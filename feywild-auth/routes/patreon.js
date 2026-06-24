const express = require('express');
const router = express.Router();
const User = require('../models/User');
const crypto = require('crypto'); // NEW: used to create secure state tokens

const CLIENT_ID = process.env.PATREON_CLIENT_ID;
const CLIENT_SECRET = process.env.PATREON_CLIENT_SECRET;
const FRONTEND_URL = (process.env.FRONTEND_URL || 'https://thefeywildvault.com').replace(/\/$/, '');

function getPatreonRedirectUri() {
  const uri = process.env.PATREON_REDIRECT_URI;

  if (!uri) {
    throw new Error("PATREON_REDIRECT_URI is missing");
  }

  return uri.trim();
}

// Helper: build authorize URL
router.get('/link', (req, res) => {
  const state = crypto.randomBytes(24).toString('hex');
  req.session.patreonState = state;

  const scope = 'identity identity.memberships';

const redirectUri = getPatreonRedirectUri();

const params = new URLSearchParams({
  response_type: 'code',
  client_id: process.env.PATREON_CLIENT_ID,
  redirect_uri: redirectUri,
  scope,
  state
});

const authorizeUrl = `https://www.patreon.com/oauth2/authorize?${params.toString()}`;

console.log('Starting Patreon OAuth:', {
  sessionID: req.sessionID,
  patreonState: req.session.patreonState,
  redirectUri
});

  req.session.save((err) => {
    if (err) {
      console.error('Failed to save Patreon OAuth state:', err);
      return res.status(500).send('Could not start Patreon linking. Please try again.');
    }

    return res.redirect(authorizeUrl);
  });
});

// Callback: exchange code -> token, then fetch identity/membership and store
router.get('/callback', async (req, res) => {
  try {
    const { code, state } = req.query;
    if (!code) return res.status(400).send('Missing code');

    console.log('Patreon callback received:', {
      sessionID: req.sessionID,
      receivedState: state,
      expectedState: req.session.patreonState,
      redirectUri: getPatreonRedirectUri(),
      hasUserId: !!req.session.userId
    });

    // Validate state
    if (!state || !req.session.patreonState || state !== req.session.patreonState) {
      console.warn('Patreon state mismatch', { received: state, expected: req.session.patreonState });
      // Clear saved state (defense-in-depth)
      delete req.session.patreonState;
      return res.status(403).send('Invalid OAuth state (possible CSRF). Please try linking again.');
    }

    // Exchange code for tokens
    const tokenRes = await fetch('https://www.patreon.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: getPatreonRedirectUri()
    })
    });
    const tokenJson = await tokenRes.json();
    if (!tokenJson.access_token) {
      console.error('Token exchange failed', tokenJson);
      return res.status(500).json({ error: 'Token exchange failed', detail: tokenJson });
    }

    const accessToken = tokenJson.access_token;
    const refreshToken = tokenJson.refresh_token;
    const expiry = new Date(Date.now() + (tokenJson.expires_in || 3600) * 1000);

    // Get identity (includes memberships/tiers)
    const identityRes = await fetch('https://www.patreon.com/api/oauth2/v2/identity?include=memberships.currently_entitled_tiers', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const identity = await identityRes.json();

    console.log("🔍 PATREON IDENTITY RAW RESPONSE:", JSON.stringify(identity, null, 2));
  
    let patreonId = identity?.data?.id || null;
    let tierName = null;
    let tierId = null;
    try {
      if (identity.included && Array.isArray(identity.included)) {
        const tierItem = identity.included.find(i => i.type === 'tier');
        if (tierItem) {
          tierName = tierItem.attributes?.title || tierItem.attributes?.name || null;
          tierId = tierItem.id;
        } else {
          const member = identity.included.find(i => i.type === 'member');
          if (member && member.relationships?.currently_entitled_tiers?.data?.length) {
            const firstTierRef = member.relationships.currently_entitled_tiers.data[0];
            const actualTier = identity.included.find(i => i.type === 'tier' && i.id === firstTierRef.id);
            if (actualTier) {
              tierName = actualTier.attributes?.title || null;
              tierId = actualTier.id;
            }
          }
        }
      }
    } catch (e) {
      console.error('Error parsing identity response', e);
    }

    const tierNames = {
        "9654416": "The Wanderer",
        "9654499": "The Traveler",
        "9654507": "The Explorer",
        "9654515": "The Adventurer"
      };

    // Require logged-in site user to link Patreon
    if (!req.session.userId) {
      // Not logged in to your site — helpful UX: redirect to account/login page and include a query so frontend knows to resume linking
      // Save the Patreon data temporarily in session so we can finish linking after login (optional)
     req.session.pendingPatreon = {
        patreonId,
        accessToken,
        refreshToken,
        tokenExpiry: expiry,
        tierId,
        tierName: tierNames[tierId] || null,
        isMember: !!tierNames[tierId]
      };
      // Clear state
delete req.session.patreonState;

// Redirect to the frontend login page with a flag telling the front-end to finish linking
return req.session.save((err) => {
  if (err) {
    console.error('Failed to save pending Patreon session:', err);
    return res.status(500).send('Could not finish Patreon linking. Please try again.');
  }

  return res.redirect(`${FRONTEND_URL}/login?finishPatreon=1`);
});
    }

    // Save to logged-in user record
    const user = await User.findById(req.session.userId);
    if (!user) {
      delete req.session.patreonState;
      return res.status(404).send('User not found');
    }

    user.patreon = user.patreon || {};
    user.patreon.isLinked = true;
    user.patreon.tierName = tierNames[tierId] || null;
    user.patreon.isMember = !!tierNames[tierId];
    user.patreon.tierId = tierId || null;
    user.patreon.patreonName = identity?.data?.attributes?.full_name || null;
   
    await user.save();

   req.session.user = {
      id: user._id,
      username: user.username,
      displayName: user.displayName,
      avatar: user.profilePic || null,
      inventory: user.inventory || [],
      patreon: {
        isMember: !!tierNames[user.patreon.tierId],
        tierName: tierNames[user.patreon.tierId] || null,
        tierId: user.patreon.tierId
      }
    };
    
    // Clear saved state
delete req.session.patreonState;

// Redirect back to the frontend page which will call /api/patreon/status to update UI
return req.session.save((err) => {
  if (err) {
    console.error('Failed to save Patreon-linked session:', err);
    return res.status(500).send('Patreon linked, but session could not be saved. Please log in again.');
  }

  return res.redirect(`${FRONTEND_URL}/?patreon=linked`);
});
    
  } catch (err) {
    console.error('Patreon callback error', err);
    return res.status(500).json({ error: 'Patreon callback failure', detail: err.message });
  }
});

// Status endpoint used by frontend gating
router.get("/status", async (req, res) => {
  if (!req.session.userId) {
    return res.json({
      loggedIn: false,
      user: null
    });
  }

  const user = await User.findById(req.session.userId).lean();

  if (!user) {
    return res.json({
      loggedIn: false,
      user: null
    });
  }

  // -----------------------------
  // ✅ Tier ID → Tier Name mapping
  // -----------------------------
  const tierNames = {
    "9654416": "The Wanderer",
    "9654499": "The Traveler",
    "9654507": "The Explorer",
    "9654515": "The Adventurer"
  };

  const tierId = user.patreon?.tierId || null;
  const tierName = tierNames[tierId] || null;
  const isMember = !!tierName;

  // -----------------------------
  // ✅ Return normalized object
  // -----------------------------
  return res.json({
    loggedIn: true,
    user: {
      username: user.username,
      displayName: user.displayName || user.username,
      patreon: {
        isLinked: user.patreon?.isLinked || false,
        tierId,
        tierName,
        isMember
      }
    }
  });
});


router.post('/unlink', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Not logged in' });
    }

    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.patreon = {
      isLinked: false,
      tierId: null,
      tierName: null,
      patreonName: null,
      isMember: false
    };

    await user.save();

    if (req.session.user) {
      req.session.user.patreon = {
        isLinked: false,
        tierId: null,
        tierName: null,
        patreonName: null,
        isMember: false
      };
    }

    return res.json({
      success: true,
      patreon: {
        isLinked: false,
        tierId: null,
        tierName: null,
        patreonName: null,
        isMember: false
      }
    });
  } catch (err) {
    console.error('Patreon unlink error:', err);
    return res.status(500).json({
      error: 'Failed to unlink Patreon',
      detail: err.message
    });
  }
});

module.exports = router;

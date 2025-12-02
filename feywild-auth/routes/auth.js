const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// PATREON MEMBERSHIP CHECK MIDDLEWARE
function requirePatreon(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({ error: "Not logged in" });
    }

    if (!req.session.user || !req.session.user.patreon || !req.session.user.patreon.isMember) {
        return res.status(403).json({ error: "Access denied. Patreon membership required." });
    }

    next();
}

// EXPORT SO OTHER ROUTES CAN USE IT
module.exports.requirePatreon = requirePatreon;

// REGISTER
router.post('/register', async (req, res) => {
  const { username, password, displayName } = req.body;
  try {
   const hashed = await bcrypt.hash(password, 12);
const user = await User.create({
  username,
  password: hashed,
  displayName
});

    req.session.userId = user._id;
    res.json({ user: { username: user.username, displayName: user.displayName } });
  } catch (err) {
  console.error('Register error:', err);
  if (err.code === 11000) { // Mongo duplicate key error code
    return res.status(400).json({ error: 'Username already exists' });
  }
  res.status(500).json({ error: 'Server error' });
}
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username, password });

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  try {
    // Select password explicitly (because select: false in schema)
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

  const tierNames = {
    "9654416": "The Wanderer",
    "9654499": "The Traveler",
    "9654507": "The Explorer",
    "9654515": "The Adventurer"
  };

  const tierId = user.patreon?.tierId || null;
  const tierName = tierNames[tierId] || null;

  req.session.userId = user._id; // ✅ Fix: store userId used in inventory routes
  req.session.user = {
  id: user._id,
  username: user.username,
  displayName: user.displayName,
  avatar: user.profilePic || null,
  inventory: user.inventory || [],
  patreon: {
    isMember: !!tierName,
    tierName,
    tierId
    }
};

    res.json({
      user: {
        username: user.username,
        displayName: user.displayName,
        profilePic: user.profilePic 
          ? user.profilePic.startsWith('http')
              ? user.profilePic 
              : `https://api.thefeywildvault.com${user.profilePic}`
          : null
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});



// LOGOUT
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
  if (err) return res.status(500).json({ error: 'Logout failed' });
  res.sendStatus(200);
});
});

// GET CURRENT USER
router.get('/user', async (req, res) => {
  if (!req.session.userId) return res.status(401).end();

  const user = await User.findById(req.session.userId)
    .select('username displayName profilePic');

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Normalize profilePic so the frontend always gets a usable URL
  let profilePic = null;
  if (user.profilePic) {
    profilePic = user.profilePic.startsWith('http')
      ? user.profilePic
      : `https://api.thefeywildvault.com${user.profilePic}`;
  }

  res.json({
    user: {
      username: user.username,
      displayName: user.displayName,
      profilePic
    }
  });
});

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads/avatars');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${req.session.userId}${ext}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedTypes.includes(ext)) {
      return cb(new Error('Only images are allowed'));
    }
    cb(null, true);
  }
});

router.post('/account/update', upload.single('avatar'), async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });

  const updates = {};
  if (req.body.displayName) updates.displayName = req.body.displayName;
  if (req.file) {
    updates.profilePic = `https://api.thefeywildvault.com/uploads/avatars/${req.file.filename}`;
  }

  try {
    await User.findByIdAndUpdate(req.session.user.id, updates);
    // Sync updated values to session
    if (updates.displayName) req.session.user.displayName = updates.displayName;
    if (updates.profilePic) req.session.user.avatar = updates.profilePic;

    res.json({ success: true, profilePic: updates.profilePic });
  } catch (err) {
    console.error('Account update error:', err);
    res.status(500).json({ error: 'Update failed' });
  }
});

// Chaos returned effects
router.get('/returned-effects', async (req, res) => {
  // ✅ Accept either userId or user.id (covers all your other routes)
  const userId = req.session.userId || req.session.user?.id;

  if (!userId) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  try {
    const user = await User.findById(userId).select('chaosEffects');
    res.json({ returnedEffects: user?.chaosEffects || [] });
  } catch (err) {
    console.error('Error loading returned effects:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/returned-effects', async (req, res) => {
  const userId = req.session.userId || req.session.user?.id;

  if (!userId) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const { returnedEffects } = req.body;
  if (!Array.isArray(returnedEffects)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.chaosEffects = returnedEffects;
    await user.save();
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving returned effects:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

//Deck of Many Things tracker
// GET deck history
router.get('/deck-history', async (req, res) => {
  if (!req.session.userId) return res.json({ deckHistory: [] });

  const user = await User.findById(req.session.userId).lean();
  res.json({ deckHistory: user.deckHistory || [] });
});

// POST deck history
router.post('/deck-history', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: 'Not logged in' });
  const { deckHistory } = req.body;
  if (!Array.isArray(deckHistory)) return res.status(400).json({ error: 'Invalid data' });

  try {
    const user = await User.findById(req.session.userId);
    user.deckHistory = deckHistory;
    await user.save();
    res.json({ success: true, deckHistory: user.deckHistory });
  } catch (err) {
    console.error('Error saving deck history:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Clear deck history
router.post('/deck-history/clear', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: 'Not logged in' });

  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.deckHistory = [];
    await user.save();
    res.json({ success: true });
  } catch (err) {
    console.error('Error clearing history:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
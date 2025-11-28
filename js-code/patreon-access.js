function patreonReady() {
  return window.CurrentUser && window.PatreonStatus;
}

// Ensure CurrentUser is synced across pages
(async function initUser() {
  try {
    const res = await fetch("https://feywildvault-backend.onrender.com/api/user", {
      credentials: "include"
    });

    if (res.ok) {
      const { user } = await res.json();
      window.CurrentUser = { username: user.username };
    }
  } catch (e) {
    console.warn("Could not load current user.");
  }
})();

// Load Patreon status on this page too
(async function initPatreon() {
  if (window.refreshPatreonStatus) {
    await window.refreshPatreonStatus();
  }
})();

// --------------------------------------
// Manual Overrides by Username (site account username)
// Each user can be allowed to "save", "share", or both.
// --------------------------------------
  // Username: permissions
  // true = allowed, false = not allowed

 window.PatreonOverrideRules = {
  "VaultGuardian": { save: true, share: true }
};

// -------------------------
// Patreon Tier Access Rules
// -------------------------

function showPatreonPopup() {
  alert('Patreon Subscriber Content');
}

// Returns true/false depending on tier access
function hasPatreonAccess(action) {

  if (!patreonReady()) {
    console.warn("Patreon system not ready — deferring check");
    return false; 
  }

  const currentUser = window.CurrentUser.username;
  const tier = window.PatreonStatus.tierName;

  // --- OVERRIDE CHECK ---
  if (window.PatreonOverrideRules[currentUser]?.[action]) {
    return true;
  }

  // --- PATREON TIER CHECK ---
  const saveAllowed = ["The Traveler", "The Explorer", "The Adventurer"];
  const shareAllowed = ["The Explorer", "The Adventurer"];

  if (action === "save") return saveAllowed.includes(tier);
  if (action === "share") return shareAllowed.includes(tier);

  return false;
}

// SAVE button wrapper
function handleSaveButton(el) {
  if (!hasPatreonAccess("save")) {
    showPatreonPopup();
    return;
  }
  saveItemToInventory(el);
}


// SHARE button wrapper
function handleShareButton(el) {
  if (!hasPatreonAccess("share")) {
    showPatreonPopup();
    return;
  }
  openShareModal(el);
}
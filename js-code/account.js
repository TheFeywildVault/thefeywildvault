document.addEventListener("DOMContentLoaded", async () => {
  const accountBtn = document.getElementById("accountBtn");
  const accountMenu = document.getElementById("accountMenu");
  const loginLink = document.getElementById("loginLink");
  const signupLink = document.getElementById("signupLink");

  
  const logoutButton = document.getElementById("logoutButton");
  const displayName = document.getElementById("displayName");
  const profilePic = document.getElementById("profilePic");
  const avatarPreview = document.getElementById("avatarPreview");
  const avatarInput = document.getElementById("avatarUpload");
  const uploadButton = document.getElementById("uploadAvatar");

  const accountSettingsLink = document.getElementById("accountSettingsLink");
  const friendsSettingsLink = document.getElementById("friendsSettingsLink");
  const courierLink = document.getElementById("courierLink");

if (loginLink) {
  // Get clean path without leaking cPanel's internal file path
  let cleanPath = location.pathname + location.search;

  // Remove internal path if Apache leaked it (cPanel servers do this)
  cleanPath = cleanPath.replace(/\/home\d+\/[^/]+\/public_html\/TheFeywildVault/, "");

  // Ensure redirect always stays inside /TheFeywildVault/
  loginLink.href = `./login?redirect=${encodeURIComponent(cleanPath)}`;
}

if (signupLink) {
  let cleanPath = location.pathname + location.search;
  cleanPath = cleanPath.replace(/\/home\d+\/[^/]+\/public_html\/TheFeywildVault/, "");
  signupLink.href = `./register?redirect=${encodeURIComponent(cleanPath)}`;
}

  // Toggle dropdown menu
  accountBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setTimeout(() => {
      accountMenu.classList.toggle("hidden");
    }, 10);
  });

  document.addEventListener("click", (e) => {
    if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target)) {
      accountMenu.classList.add("hidden");
    }
  });

  // Try to load logged-in user
 try {
  const res = await fetch("https://feywildvault-backend.onrender.com/api/user", { method: "GET", credentials: "include" });
  if (res.ok) {
    const { user } = await res.json();

    if (user) {
      displayName.textContent = user.displayName || user.username;
      profilePic.src = user.profilePic || "./img/default-avatar.jpg";
      avatarPreview.src = user.profilePic || "./img/default-avatar.jpg";
      loginLink.style.display = "none";
      signupLink.style.display = "none";
      logoutButton.style.display = "block";
      accountSettingsLink.style.display = "block";
      friendsSettingsLink.style.display = "block";
      courierLink.style.display = "block";

      await refreshPatreonStatus();

      window.CurrentUser = { username: user.username };

    } else {
      // User object missing — treat as logged out
      displayName.textContent = "Guest";
      loginLink.style.display = "block";
      signupLink.style.display = "block";
      logoutButton.style.display = "none";
      accountSettingsLink.style.display = "none";
      friendsSettingsLink.style.display = "none";
      courierLink.style.display = "none";
    }
    } else {
      // Response not OK — treat as logged out
      displayName.textContent = "Guest";
      loginLink.style.display = "block";
      signupLink.style.display = "block";
      logoutButton.style.display = "none";
      accountSettingsLink.style.display = "none";
      friendsSettingsLink.style.display = "none";
      courierLink.style.display = "none";
    }
    } catch (err) {
      // Fetch failed — treat as logged out
      displayName.textContent = "Guest";
      loginLink.style.display = "block";
      signupLink.style.display = "block";
      logoutButton.style.display = "none";
      accountSettingsLink.style.display = "none";
      friendsSettingsLink.style.display = "none";
      courierLink.style.display = "none";
    }

  logoutButton.addEventListener("click", () => {
    fetch("https://feywildvault-backend.onrender.com/api/logout", { method: "POST", credentials: "include" }).then(() => window.location.reload());
  });

  // Account Modal
  const accountModal = document.getElementById("accountModal");
  const closeAccountModal = document.getElementById("closeAccountModal");
  const usernameInput = document.getElementById("accountUsername");
  const displayNameInput = document.getElementById("accountDisplayName");
  const saveButton = document.getElementById("saveAccountChanges");
  const saveConfirm = document.getElementById("accountSaveConfirm");

  accountSettingsLink.addEventListener("click", async (e) => {
    e.preventDefault();

    const res = await fetch("https://feywildvault-backend.onrender.com/api/user", { credentials: "include" });
    if (res.ok) {
      const { user } = await res.json();

      usernameInput.value = user.username;
      displayNameInput.value = user.displayName || "";
      avatarPreview.src = user.profilePic || "./img/default-avatar.jpg";
      
      await refreshPatreonStatus();
      
      accountModal.classList.remove("hidden");
    }
  });

  closeAccountModal.addEventListener("click", () => {
    accountModal.classList.add("hidden");
    saveConfirm.classList.add("hidden");
  });

  saveButton.addEventListener("click", async () => {
    const newDisplayName = displayNameInput.value.trim();
    const avatarFile = avatarInput.files[0];
    const formData = new FormData();
    formData.append("displayName", newDisplayName);
    if (avatarFile) formData.append("avatar", avatarFile);

    const res = await fetch("https://feywildvault-backend.onrender.com/api/account/update", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (res.ok) {
      const { profilePic: newProfilePic } = await res.json();
      saveConfirm.classList.remove("hidden");
      setTimeout(() => saveConfirm.classList.add("hidden"), 3000);
      displayName.textContent = newDisplayName;
      courierLink.classList.remove("hidden");

      if (newProfilePic) {
        const bustCacheUrl = `${newProfilePic}?t=${Date.now()}`;
        profilePic.src = bustCacheUrl;
        avatarPreview.src = bustCacheUrl;
      }
    }
  });

  // Avatar preview on change
  let selectedFile;
  avatarInput.addEventListener("change", (e) => {
    selectedFile = e.target.files[0];
    if (!selectedFile) return;
    avatarPreview.src = URL.createObjectURL(selectedFile);
  });

  // Avatar upload button
if (uploadButton) {
  uploadButton.addEventListener("click", async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("avatar", selectedFile);

    const res = await fetch("https://feywildvault-backend.onrender.com/api/account/avatar", {
      method: "POST",
      body: formData,
      credentials: "include"
    });

    if (res.ok) {
      avatarPreview.src = URL.createObjectURL(selectedFile);
      profilePic.src = avatarPreview.src;
    } else {
      alert("Upload failed.");
    }
  });
} else {
  console.warn("uploadButton element (#uploadAvatar) not found");
}

  // Friends Modal
  const friendsModal = document.getElementById("friendsModal");
  const closeFriendsModal = document.getElementById("closeFriendsModal");
  const friendSearchInput = document.getElementById("friendSearchInput");
  const friendSearchBtn = document.getElementById("friendSearchBtn");
  const friendSearchMessage = document.getElementById("friendSearchMessage");
  const friendsList = document.getElementById("friendsList");

  friendsSettingsLink.addEventListener("click", async (e) => {
    e.preventDefault();
    friendSearchInput.value = "";
    friendSearchMessage.classList.add("hidden");
    friendsList.innerHTML = "";
    friendsModal.classList.remove("hidden");
    await loadFriendsList();
  });

  closeFriendsModal.addEventListener("click", () => {
    friendsModal.classList.add("hidden");
  });

  async function loadFriendsList() {
    try {
      const res = await fetch("https://feywildvault-backend.onrender.com/api/friends", { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch friends");
      const { friends } = await res.json();

      friendsList.innerHTML = friends.length === 0
        ? `<li class="text-sm text-gray-500 dark:text-gray-400">You have no friends added.</li>`
        : "";

      friends.forEach(friend => {
        const li = document.createElement("li");
        li.className = "flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded px-3 py-2";

        const img = document.createElement("img");
        img.src = friend.profilePic || "./img/default-avatar.jpg";
        img.alt = `${friend.username}'s avatar`;
        img.className = "w-8 h-8 rounded-full object-cover border border-purple-500";

        const name = document.createElement("span");
        name.textContent = friend.displayName && friend.displayName !== friend.username
        ? `${friend.username} (${friend.displayName})`
        : friend.username;
        name.className = "text-sm";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "ml-auto text-red-600 hover:text-red-800 dark:hover:text-red-400 text-sm font-semibold";
        removeBtn.onclick = async () => {
          if (confirm(`Remove friend "${friend.username}"?`)) {
            await removeFriend(friend.username);
            await loadFriendsList();
          }
        };

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(removeBtn);
        friendsList.appendChild(li);
      });

    } catch (err) {
      friendsList.innerHTML = `<li class="text-sm text-red-600">Error loading friends.</li>`;
      console.error(err);
    }
  }

  async function removeFriend(username) {
    try {
      const res = await fetch("https://feywildvault-backend.onrender.com/api/friends/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
        credentials: "include"
      });
      if (!res.ok) throw new Error("Failed to remove friend");
    } catch (err) {
      alert("Could not remove friend.");
      console.error(err);
    }
  }

  friendSearchBtn.addEventListener("click", async () => {
    const username = friendSearchInput.value.trim();
    if (!username) {
      friendSearchMessage.textContent = "Please enter a username.";
      friendSearchMessage.classList.remove("hidden");
      return;
    }

    friendSearchMessage.classList.add("hidden");

    try {
      const res = await fetch("https://feywildvault-backend.onrender.com/api/friends/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
        credentials: "include"
      });

      if (!res.ok) {
        const errData = await res.json();
        friendSearchMessage.textContent = errData.message || "Failed to add friend.";
        friendSearchMessage.classList.remove("hidden");
        return;
      }

      friendSearchInput.value = "";
      friendSearchMessage.textContent = "Friend added!";
      friendSearchMessage.classList.remove("hidden");
      await loadFriendsList();
    } catch (err) {
      friendSearchMessage.textContent = "Error adding friend.";
      friendSearchMessage.classList.remove("hidden");
      console.error(err);
    }
  });

  // Courier Modal (acts like popup)
 if (courierLink) {
 courierLink.addEventListener("click", async (e) => {
  e.preventDefault();
  if (courierModal) {
    courierModal.classList.remove("hidden");
    await loadCourierInbox(); // 🧠 This fetches and injects the courier items
  } else {
    console.warn("courierModal element is missing");
  }
});

  window.addEventListener("click", (e) => {
    if (courierModal && e.target === courierModal) {
      courierModal.classList.add("hidden");
    }
  });
} else {
  console.warn("courierLink element is missing");
}
});

function toggleCourierModal() {
  const modal = document.getElementById("courierModal");
  if (modal) modal.classList.toggle("hidden");
}

const closeCourierModal = document.getElementById("closeCourierModal");

closeCourierModal.addEventListener("click", () => {
  const courierModal = document.getElementById("courierModal");
  courierModal.classList.add("hidden");
});

const closeShareModalBtn = document.getElementById("closeShareModal");
const shareModal = document.getElementById("shareModal");

closeShareModalBtn.addEventListener("click", () => {
  shareModal.classList.add("hidden");
});

async function loadCourierInbox() {
  const inboxList = document.getElementById("courierInboxList");
  if (!inboxList) {
    console.warn("courierInboxList element is missing");
    return;
  }

  inboxList.innerHTML = `<p class="text-sm text-gray-500 dark:text-gray-400">Loading...</p>`;

  try {
    const res = await fetch("https://feywildvault-backend.onrender.com/api/courier/inbox", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      inboxList.innerHTML = `<p class="text-sm text-red-600">Error loading inbox.</p>`;
      return;
    }

    const { inbox } = await res.json();

    if (!inbox || inbox.length === 0) {
      inboxList.innerHTML = `<p class="text-sm text-gray-500 dark:text-gray-400">Your courier inbox is empty.</p>`;
      return;
    }

    inboxList.innerHTML = ""; // Clear previous content

    inbox.forEach((entry) => {
      const wrapper = document.createElement("div");
      wrapper.className = "mb-4 p-3 rounded bg-gray-100 dark:bg-gray-700 shadow";

      const fromLine = document.createElement("p");
      fromLine.className = "text-xs text-gray-600 dark:text-gray-300 mb-1";
      fromLine.textContent = `From: ${entry.from} • ${new Date(entry.timestamp).toLocaleString()}`;

      const itemContent = document.createElement("div");
      itemContent.innerHTML = entry.html || "<em>No content</em>";

      wrapper.appendChild(fromLine);
      wrapper.appendChild(itemContent);
      inboxList.appendChild(wrapper);
    });
  } catch (err) {
    console.error("Courier inbox error:", err);
    inboxList.innerHTML = `<p class="text-sm text-red-600">Could not load courier inbox.</p>`;
  }
}

// ---------- Patreon helper functions (REPLACE existing functions with this) ----------
async function refreshPatreonStatus() {
  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/patreon/status', {credentials: 'include'});
    if (!res.ok) {
      console.warn('Patreon status returned non-OK');
      setPatreonUI(null);
      return;
    }

    const json = await res.json();

    // Support both server shapes:
    // 1) { loggedIn: true, username: ..., patreon: { tierName: ... } }  <-- your server currently returns this
    // 2) { user: { patreon: {...}, username: ... } }                    <-- older/newer shape the frontend expected
    let userObj = null;
    if (json.user) {
      userObj = json.user;
    } else if (json.loggedIn) {
      // Construct a user-like object from the status response
      userObj = {
        username: json.username || null,
        displayName: json.displayName || null,
        patreon: json.patreon || null
      };
    }

    const el = document.getElementById('patreonStatus');
    // If userObj missing => not logged in
    if (
      !userObj ||
      !userObj.patreon ||
      (!userObj.patreon.tierName && !userObj.patreon.isLinked)
    ) {

      // Not linked
      if (el) el.textContent = '';
      window.PatreonStatus = null;
      setPatreonUI(null);

      // Also ensure the Link button is visible (if present)
      const linkBtn = document.getElementById('patreonLinkBtn');
      if (linkBtn) linkBtn.classList.remove('hidden');

      return;
    }

    // At this point, userObj.patreon exists
    const pat = userObj.patreon;
    const username = userObj.username;

    if (el) {
      const outputLines = [];

      // -------- ADMIN OVERRIDE CHECK --------
      const override =
        window.PatreonOverrideRules &&
        window.PatreonOverrideRules[username] &&
        (window.PatreonOverrideRules[username].save || window.PatreonOverrideRules[username].share);

      if (override) {
        outputLines.push("Admin Access — Save & Share Unlocked");
      }

      // -------- NORMAL PATREON INFO --------
      const tierName = pat.tierName || null;
      const isMember = pat.isMember;

      if (isMember) {
        outputLines.push(`Patreon: Subscribed – ${tierName}`);
      } else {
        outputLines.push("Patreon: Unsubscribed");
      }

      // Write combined output
      el.textContent = outputLines.join("\n");
      el.style.whiteSpace = "pre-line"; // Allows newlines
    }


    window.PatreonStatus = pat;
    setPatreonUI(pat);

    // If account modal exists, update account fields so they stay in sync
    if (userObj.username) {
      const unameEl = document.getElementById('accountUsername');
      if (unameEl) unameEl.value = userObj.username;
    }
  } catch (e) {
    console.error('Patreon status error', e);
    setPatreonUI(null);
  }
}

function setPatreonUI(pat) {
  const unlink = document.getElementById('patreonUnlinkBtn');
  const linkBtn = document.getElementById('patreonLinkBtn');

  // Ensure both elements exist before toggling; if one is missing, still update the status element
  if (unlink) {
    if (pat && (pat.isLinked || pat.tierName)) unlink.classList.remove('hidden');
    else unlink.classList.add('hidden');
  }
  if (linkBtn) {
    if (pat && (pat.isLinked || pat.tierName)) linkBtn.classList.add('hidden');
    else linkBtn.classList.remove('hidden');
  }

  // Optionally enable/disable buttons that require Patreon membership
  // Example: if you have UI elements gated by allowedPlus / allowedShare, toggle them here:
  if (pat && pat.tierName) {
    // Example: allowPlus and allowShare logic if your backend returns them
    // const allowPlus = pat.allowedPlus || false;
    // document.querySelectorAll('.requires-plus').forEach(el => el.style.display = allowPlus ? '' : 'none');
  }
}

// If redirected from OAuth with query param ?patreon=linked or ?finishPatreon=1, refresh status so UI updates
(function onLoadPatreonInit() {
  // call now to update UI
  refreshPatreonStatus();

  // handle query param from OAuth redirect
  const params = new URLSearchParams(window.location.search);
  if (params.get('patreon') === 'linked' || params.get('finishPatreon') === '1') {
    // remove query params from URL for cleanliness
    const cleaned = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleaned);
    // re-check status
    refreshPatreonStatus();
  }
})();

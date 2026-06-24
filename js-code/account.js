const API_BASE = "https://api.thefeywildvault.com";
const DEFAULT_AVATAR = "./img/default-avatar.jpg";

// -------------------------
// Small UI helpers
// -------------------------
function showBlock(el) {
  if (!el) return;
  el.classList.remove("hidden");
  el.style.display = "block";
}

function showInlineFlex(el) {
  if (!el) return;
  el.classList.remove("hidden");
  el.style.display = "inline-flex";
}

function hideEl(el) {
  if (!el) return;
  el.classList.add("hidden");
  el.style.display = "none";
}

function setLoggedOutUI(elements = {}) {
  const {
    displayName,
    profilePic,
    avatarPreview,
    loginLink,
    signupLink,
    logoutButton,
    accountSettingsLink,
    friendsSettingsLink,
    courierLink
  } = elements;

  if (displayName) displayName.textContent = "Guest";
  if (profilePic) profilePic.src = DEFAULT_AVATAR;
  if (avatarPreview) avatarPreview.src = DEFAULT_AVATAR;

  showBlock(loginLink);
  showBlock(signupLink);

  hideEl(logoutButton);
  hideEl(accountSettingsLink);
  hideEl(friendsSettingsLink);
  hideEl(courierLink);

  window.CurrentUser = null;
  window.PatreonStatus = null;

  setPatreonUI(null);
  setAdminAccessNotice(null);

  const patreonStatus = document.getElementById("patreonStatus");
  if (patreonStatus) patreonStatus.textContent = "";
}

function setLoggedInUI(user, elements = {}) {
  const {
    displayName,
    profilePic,
    avatarPreview,
    loginLink,
    signupLink,
    logoutButton,
    accountSettingsLink,
    friendsSettingsLink,
    courierLink
  } = elements;

  if (displayName) displayName.textContent = user.displayName || user.username;
  if (profilePic) profilePic.src = user.profilePic || DEFAULT_AVATAR;
  if (avatarPreview) avatarPreview.src = user.profilePic || DEFAULT_AVATAR;

  hideEl(loginLink);
  hideEl(signupLink);

  showBlock(logoutButton);
  showBlock(accountSettingsLink);
  showBlock(friendsSettingsLink);
  showBlock(courierLink);

  window.CurrentUser = { username: user.username };
}

function getSafeRedirectPath() {
  let cleanPath = window.location.pathname + window.location.search;

  cleanPath = cleanPath.replace(/\/home\d+\/[^/]+\/public_html/, "");

  if (
    cleanPath.includes("/login") ||
    cleanPath.includes("/login.html") ||
    cleanPath.includes("/register") ||
    cleanPath.includes("/register.html")
  ) {
    return "/index.html";
  }

  return cleanPath || "/index.html";
}

// -------------------------
// Patreon helper functions
// -------------------------
async function refreshPatreonStatus() {
  const patreonStatus = document.getElementById("patreonStatus");

  try {
    const res = await fetch(`${API_BASE}/api/patreon/status`, {
      credentials: "include"
    });

    if (!res.ok) {
      console.warn("Patreon status returned non-OK");
      window.PatreonStatus = null;
      setPatreonUI(null);
      setAdminAccessNotice(null);
      if (patreonStatus) patreonStatus.textContent = "Patreon: Unable to load status";
      return;
    }

    const json = await res.json();

    let userObj = null;

    if (json.user) {
      userObj = json.user;
    } else if (json.loggedIn) {
      userObj = {
        username: json.username || null,
        displayName: json.displayName || null,
        patreon: json.patreon || null
      };
    }

    if (!userObj) {
      window.PatreonStatus = null;
      setPatreonUI(null);
      setAdminAccessNotice(null);

      if (patreonStatus) {
        patreonStatus.textContent = "Patreon: Not logged in";
      }

      return;
    }

    const username = userObj.username;
    const pat = userObj.patreon || {
      isLinked: false,
      tierId: null,
      tierName: null,
      isMember: false
    };

    window.CurrentUser = {
      username
    };

    window.PatreonStatus = {
      isLinked: !!pat.isLinked,
      tierId: pat.tierId || null,
      tierName: pat.tierName || null,
      isMember: !!pat.isMember
    };

    setAdminAccessNotice(username);
    setPatreonStatusText(window.PatreonStatus);
    setPatreonUI(window.PatreonStatus);

    const unameEl = document.getElementById("accountUsername");
    if (unameEl && username) {
      unameEl.value = username;
    }

  } catch (e) {
    console.error("Patreon status error", e);

    window.PatreonStatus = null;
    setPatreonUI(null);
    setAdminAccessNotice(null);

    if (patreonStatus) {
      patreonStatus.textContent = "Patreon: Unable to load status";
    }
  }
}

function setAdminAccessNotice(username) {
  const patreonAccessNotice = document.getElementById("patreonAccessNotice");
  if (!patreonAccessNotice) return;

  const override = username && window.PatreonOverrideRules
    ? window.PatreonOverrideRules[username]
    : null;

  const hasSaveOverride = !!override?.save;
  const hasShareOverride = !!override?.share;

  if (!hasSaveOverride && !hasShareOverride) {
    patreonAccessNotice.textContent = "";
    patreonAccessNotice.classList.add("hidden");
    return;
  }

  let text = "Admin Access";

  if (hasSaveOverride && hasShareOverride) {
    text += " — Save & Share Unlocked";
  } else if (hasSaveOverride) {
    text += " — Save Unlocked";
  } else if (hasShareOverride) {
    text += " — Share Unlocked";
  }

  patreonAccessNotice.textContent = text;
  patreonAccessNotice.classList.remove("hidden");
}

function setPatreonStatusText(pat) {
  const patreonStatus = document.getElementById("patreonStatus");
  if (!patreonStatus) return;

  if (pat?.isMember && pat?.tierName) {
    patreonStatus.textContent = `Patreon: Subscribed – ${pat.tierName}`;
  } else if (pat?.isLinked) {
    patreonStatus.textContent = "Patreon: Linked";
  } else {
    patreonStatus.textContent = "Patreon: Unsubscribed";
  }
}

function setPatreonUI(pat) {
  const unlink = document.getElementById("patreonUnlinkBtn");
  const linkBtn = document.getElementById("patreonLinkBtn");

  const isLinked = !!pat?.isLinked;

  if (unlink) {
    unlink.classList.toggle("hidden", !isLinked);
  }

  if (linkBtn) {
    linkBtn.classList.toggle("hidden", isLinked);
  }
}

// Make available to patreon-access.js and other scripts.
window.refreshPatreonStatus = refreshPatreonStatus;

// -------------------------
// Courier helper
// -------------------------
async function loadCourierInbox() {
  const inboxList = document.getElementById("courierInboxList");
  if (!inboxList) {
    console.warn("courierInboxList element is missing");
    return;
  }

  inboxList.innerHTML = `<p class="text-sm text-gray-500 dark:text-gray-400">Loading...</p>`;

  try {
    const res = await fetch(`${API_BASE}/api/courier/inbox`, {
      method: "GET",
      credentials: "include"
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

    inboxList.innerHTML = "";

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

function toggleCourierModal() {
  const modal = document.getElementById("courierModal");
  if (modal) modal.classList.toggle("hidden");
}

window.toggleCourierModal = toggleCourierModal;

// -------------------------
// Main account setup
// -------------------------
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

  const elements = {
    displayName,
    profilePic,
    avatarPreview,
    loginLink,
    signupLink,
    logoutButton,
    accountSettingsLink,
    friendsSettingsLink,
    courierLink
  };

  if (loginLink) {
    const cleanPath = getSafeRedirectPath();
    loginLink.href = `/login?redirect=${encodeURIComponent(cleanPath)}`;
  }

  if (signupLink) {
    const cleanPath = getSafeRedirectPath();
    signupLink.href = `/register?redirect=${encodeURIComponent(cleanPath)}`;
  }

  // Toggle dropdown menu.
  if (accountBtn && accountMenu) {
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
  }

  // Try to load logged-in user.
  try {
    const res = await fetch(`${API_BASE}/api/user`, {
      method: "GET",
      credentials: "include"
    });

    if (res.ok) {
      const { user } = await res.json();

      if (user) {
        setLoggedInUI(user, elements);
        await refreshPatreonStatus();
      } else {
        setLoggedOutUI(elements);
      }
    } else {
      setLoggedOutUI(elements);
    }
  } catch (err) {
    console.error("User load failed:", err);
    setLoggedOutUI(elements);
  }

  // Logout.
  if (logoutButton) {
    logoutButton.addEventListener("click", async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(`${API_BASE}/api/logout`, {
          method: "POST",
          credentials: "include"
        });

        if (!res.ok) {
          console.error("Logout failed:", await res.text());
          alert("Logout failed. Please try again.");
          return;
        }

        window.CurrentUser = null;
        window.PatreonStatus = null;

        setLoggedOutUI(elements);

        if (accountMenu) accountMenu.classList.add("hidden");

        window.location.href = "/";
      } catch (err) {
        console.error("Logout request failed:", err);
        alert("Logout failed. Please try again.");
      }
    });
  }

  // Account Modal.
  const accountModal = document.getElementById("accountModal");
  const closeAccountModal = document.getElementById("closeAccountModal");
  const usernameInput = document.getElementById("accountUsername");
  const displayNameInput = document.getElementById("accountDisplayName");
  const saveButton = document.getElementById("saveAccountChanges");
  const saveConfirm = document.getElementById("accountSaveConfirm");

  if (accountSettingsLink && accountModal) {
    accountSettingsLink.addEventListener("click", async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(`${API_BASE}/api/user`, {
          credentials: "include"
        });

        if (!res.ok) {
          setLoggedOutUI(elements);
          if (accountMenu) accountMenu.classList.add("hidden");
          return;
        }

        const { user } = await res.json();

        if (!user) {
          setLoggedOutUI(elements);
          if (accountMenu) accountMenu.classList.add("hidden");
          return;
        }

        if (usernameInput) usernameInput.value = user.username;
        if (displayNameInput) displayNameInput.value = user.displayName || "";
        if (avatarPreview) avatarPreview.src = user.profilePic || DEFAULT_AVATAR;

        window.CurrentUser = { username: user.username };

        await refreshPatreonStatus();

        accountModal.classList.remove("hidden");
      } catch (err) {
        console.error("Could not open account modal:", err);
      }
    });
  }

  if (closeAccountModal && accountModal) {
    closeAccountModal.addEventListener("click", () => {
      accountModal.classList.add("hidden");
      if (saveConfirm) saveConfirm.classList.add("hidden");
    });
  }

  if (accountModal) {
    accountModal.addEventListener("click", (e) => {
      if (e.target === accountModal) {
        accountModal.classList.add("hidden");
        if (saveConfirm) saveConfirm.classList.add("hidden");
      }
    });
  }

  if (saveButton) {
    saveButton.addEventListener("click", async () => {
      const newDisplayName = displayNameInput ? displayNameInput.value.trim() : "";
      const avatarFile = avatarInput?.files?.[0];

      const formData = new FormData();
      formData.append("displayName", newDisplayName);
      if (avatarFile) formData.append("avatar", avatarFile);

      try {
        const res = await fetch(`${API_BASE}/api/account/update`, {
          method: "POST",
          body: formData,
          credentials: "include"
        });

        if (res.ok) {
          const { profilePic: newProfilePic } = await res.json();

          if (saveConfirm) {
            saveConfirm.classList.remove("hidden");
            setTimeout(() => saveConfirm.classList.add("hidden"), 3000);
          }

          if (displayName) displayName.textContent = newDisplayName || window.CurrentUser?.username || "User";
          if (courierLink) showBlock(courierLink);

          if (newProfilePic) {
            const bustCacheUrl = `${newProfilePic}?t=${Date.now()}`;
            if (profilePic) profilePic.src = bustCacheUrl;
            if (avatarPreview) avatarPreview.src = bustCacheUrl;
          }
        } else {
          alert("Could not save account changes.");
        }
      } catch (err) {
        console.error("Account update failed:", err);
        alert("Could not save account changes.");
      }
    });
  }

  // Avatar preview on change.
  let selectedFile = null;

  if (avatarInput) {
    avatarInput.addEventListener("change", (e) => {
      selectedFile = e.target.files[0];
      if (!selectedFile || !avatarPreview) return;
      avatarPreview.src = URL.createObjectURL(selectedFile);
    });
  }

  // Avatar upload button, if present.
  if (uploadButton) {
    uploadButton.addEventListener("click", async () => {
      if (!selectedFile) return;

      const formData = new FormData();
      formData.append("avatar", selectedFile);

      try {
        const res = await fetch(`${API_BASE}/api/account/avatar`, {
          method: "POST",
          body: formData,
          credentials: "include"
        });

        if (res.ok) {
          const previewUrl = URL.createObjectURL(selectedFile);
          if (avatarPreview) avatarPreview.src = previewUrl;
          if (profilePic) profilePic.src = previewUrl;
        } else {
          alert("Upload failed.");
        }
      } catch (err) {
        console.error("Avatar upload failed:", err);
        alert("Upload failed.");
      }
    });
  }

  // Friends Modal.
  const friendsModal = document.getElementById("friendsModal");
  const closeFriendsModal = document.getElementById("closeFriendsModal");
  const friendSearchInput = document.getElementById("friendSearchInput");
  const friendSearchBtn = document.getElementById("friendSearchBtn");
  const friendSearchMessage = document.getElementById("friendSearchMessage");
  const friendsList = document.getElementById("friendsList");

  async function loadFriendsList() {
    if (!friendsList) return;

    try {
      const res = await fetch(`${API_BASE}/api/friends`, {
        credentials: "include"
      });

      if (!res.ok) throw new Error("Failed to fetch friends");

      const { friends } = await res.json();

      friendsList.innerHTML = friends.length === 0
        ? `<li class="text-sm text-gray-500 dark:text-gray-400">You have no friends added.</li>`
        : "";

      friends.forEach(friend => {
        const li = document.createElement("li");
        li.className = "flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded px-3 py-2";

        const img = document.createElement("img");
        img.src = friend.profilePic || DEFAULT_AVATAR;
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
      const res = await fetch(`${API_BASE}/api/friends/remove`, {
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

  if (friendsSettingsLink && friendsModal) {
    friendsSettingsLink.addEventListener("click", async (e) => {
      e.preventDefault();

      if (friendSearchInput) friendSearchInput.value = "";
      if (friendSearchMessage) friendSearchMessage.classList.add("hidden");
      if (friendsList) friendsList.innerHTML = "";

      friendsModal.classList.remove("hidden");
      await loadFriendsList();
    });
  }

  if (closeFriendsModal && friendsModal) {
    closeFriendsModal.addEventListener("click", () => {
      friendsModal.classList.add("hidden");
    });
  }

  if (friendsModal) {
    friendsModal.addEventListener("click", (e) => {
      if (e.target === friendsModal) {
        friendsModal.classList.add("hidden");
      }
    });
  }

  if (friendSearchBtn) {
    friendSearchBtn.addEventListener("click", async () => {
      const username = friendSearchInput ? friendSearchInput.value.trim() : "";

      if (!username) {
        if (friendSearchMessage) {
          friendSearchMessage.textContent = "Please enter a username.";
          friendSearchMessage.classList.remove("hidden");
        }
        return;
      }

      if (friendSearchMessage) friendSearchMessage.classList.add("hidden");

      try {
        const res = await fetch(`${API_BASE}/api/friends/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
          credentials: "include"
        });

        if (!res.ok) {
          const errData = await res.json();
          if (friendSearchMessage) {
            friendSearchMessage.textContent = errData.message || "Failed to add friend.";
            friendSearchMessage.classList.remove("hidden");
          }
          return;
        }

        if (friendSearchInput) friendSearchInput.value = "";
        if (friendSearchMessage) {
          friendSearchMessage.textContent = "Friend added!";
          friendSearchMessage.classList.remove("hidden");
        }

        await loadFriendsList();
      } catch (err) {
        if (friendSearchMessage) {
          friendSearchMessage.textContent = "Error adding friend.";
          friendSearchMessage.classList.remove("hidden");
        }
        console.error(err);
      }
    });
  }

  // Courier Modal.
  const courierModal = document.getElementById("courierModal");
  const closeCourierModal = document.getElementById("closeCourierModal");

  if (closeCourierModal && courierModal) {
    closeCourierModal.addEventListener("click", () => {
      courierModal.classList.add("hidden");
    });
  }

  if (courierLink) {
    courierLink.addEventListener("click", async (e) => {
      e.preventDefault();

      if (courierModal) {
        courierModal.classList.remove("hidden");
        await loadCourierInbox();
      } else {
        console.warn("courierModal element is missing");
      }
    });
  }

  if (courierModal) {
    window.addEventListener("click", (e) => {
      if (e.target === courierModal) {
        courierModal.classList.add("hidden");
      }
    });
  }

  // Share modal safety guard.
  const closeShareModalBtn = document.getElementById("closeShareModal");
  const shareModal = document.getElementById("shareModal");

  if (closeShareModalBtn && shareModal) {
    closeShareModalBtn.addEventListener("click", () => {
      shareModal.classList.add("hidden");
    });
  }
});

// -------------------------
// OAuth return handling
// -------------------------
(function onLoadPatreonInit() {
  refreshPatreonStatus();

  const params = new URLSearchParams(window.location.search);

  if (params.get("patreon") === "linked" || params.get("finishPatreon") === "1") {
    const cleaned = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleaned);
    refreshPatreonStatus();
  }
})();
let itemToShare = null;

async function openShareModal(button = null) {
  const shareModal = document.getElementById('shareModal');
  const shareFriendsList = document.getElementById('shareFriendsList');
  shareModal.classList.remove('hidden');
  shareFriendsList.innerHTML = '<li>Loading friends...</li>';

  // 🟢 If button was passed, clone the item and store the HTML
  if (button) {
    const itemBox = button.closest(".item-result, .scroll-result") || button.parentElement;
    const clonedBox = itemBox.cloneNode(true);
    clonedBox.querySelector(".add-button")?.remove();
    clonedBox.querySelector(".aadd-button")?.remove();
    clonedBox.querySelector(".popup-message")?.remove();

    itemToShare = {
      html: clonedBox.innerHTML,
      id: Date.now() + Math.random()
    };
  }

  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/friends', { credentials: 'include' });
    if (!res.ok) throw new Error('Failed to fetch friends');
    const { friends } = await res.json();

    if (friends.length === 0) {
      shareFriendsList.innerHTML = '<li class="text-gray-500 italic">You have no friends yet.</li>';
      return;
    }

    shareFriendsList.innerHTML = '';

    friends.forEach(friend => {
      const li = document.createElement('li');
      li.className = "flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded px-3 py-2";

      const img = document.createElement('img');
      img.src = friend.profilePic || './img/default-avatar.jpg';
      img.alt = `${friend.displayName}'s avatar`;
      img.className = "w-8 h-8 rounded-full object-cover border border-purple-500";

      const name = document.createElement('span');
      name.textContent = friend.displayName && friend.displayName !== friend.username
        ? `${friend.username} (${friend.displayName})`
        : friend.username;
      name.className = "text-sm flex-grow";

      const sendBtn = document.createElement("button");
      sendBtn.textContent = "Send";
      sendBtn.className = "px-2 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700";
      sendBtn.onclick = () => sendItemToFriend(friend.username);

      li.appendChild(img);
      li.appendChild(name);
      li.appendChild(sendBtn);
      shareFriendsList.appendChild(li);
    });

  } catch (error) {
    shareFriendsList.innerHTML = '<li class="text-red-600">Error loading friends.</li>';
    console.error(error);
  }
}

function closeShareModal() {
  document.getElementById("shareModal").classList.add("hidden");
  itemToShare = null;
}

async function sendItemToFriend(username) {
  if (!itemToShare) return;

console.log("Sending to:", username);
console.log("Item HTML:", itemToShare?.html);

  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/courier/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        recipientUsername: username,
        item: itemToShare, // includes html and id
      }),
    });


    if (!res.ok) {
      const errData = await res.json();
      showShareConfirmation(errData.message || 'Failed to send item.');
      return;
    }

    closeShareModal();

    showShareConfirmation(`${extractItemName(itemToShare.html)} sent to ${username}`);
  } catch (err) {
    console.error('Send item error:', err);
    showShareConfirmation('Error sending item.');
  }
}

function extractItemName(html) {
  const div = document.createElement("div");
  div.innerHTML = html;

  // Check common selectors for item names
  const nameEl =
    div.querySelector(".item-name") ||                 // Generic class for item name
    div.querySelector(".scroll-name") ||               // For scrolls
    div.querySelector(".rarity") ||                    // Often used for items
    div.querySelector(".output-line strong") ||        // Some items use bold tags
    div.querySelector("h2") ||                         // Headings
    div.querySelector("p");                            // Fallback

  return nameEl?.textContent.trim() || "Item";
}

function showPopupCentered(text) {
  const popup = document.createElement("div");
  popup.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-6 py-3 rounded shadow-lg z-50";
  popup.textContent = text;

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2500);
}

function closeShareModal() {
  document.getElementById('shareModal').classList.add('hidden');
}

//COURIER
function toggleCourierModal() {
    const modal = document.getElementById('courierModal');
    modal.classList.toggle('hidden');
  }

  function addItemToCourier(itemHTML) {
    const courierContent = document.getElementById('courierContent');
    const itemElement = document.createElement('div');
    itemElement.className = "p-2 border rounded bg-gray-100 dark:bg-gray-700";
    itemElement.innerHTML = itemHTML;
    courierContent.appendChild(itemElement);

    // Optionally open modal immediately
    toggleCourierModal();
  }

  // Example: Call this after receiving a shared item
  // addItemToCourier("<strong>Flaming Sword</strong> - Rare Weapon");

window.openShareModal = openShareModal;
window.closeShareModal = closeShareModal;
window.sendItemToFriend = sendItemToFriend;

function showShareConfirmation(message = "Item shared successfully!") {
  const popup = document.getElementById("itemSharedPopup");
  popup.textContent = message;
  popup.classList.remove("hidden");

  // Hide after 2.5 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2500);
}

// Extract item name from the stored full HTML
function extractItemNameFromHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  const name = div.querySelector('.rarity')?.textContent || 'Unknown Item';
  return name.trim();
}

// Render courier inbox items (pass the array from backend)
function renderCourierInbox(items) {
  const list = document.getElementById("courierInboxList");
  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = '<li class="text-sm italic text-gray-500">No items in your courier inbox.</li>';
    return;
  }

  items.forEach(item => {
    console.log("Rendering item:", item);
    const wrapper = document.createElement("li");
    wrapper.className = "relative bg-white dark:bg-gray-700 rounded shadow p-4 space-y-2";
    
    // ✅ ADD THIS LINE
    wrapper.setAttribute("data-item-id", item.id);

    // ✅ Short preview render (From: + item name)
    const preview = document.createElement("div");
    preview.innerHTML = `
      <p class="text-sm text-gray-500">From: ${item.from || 'Unknown'} • ${new Date(item.timestamp).toLocaleDateString()}</p>
      <p class="font-semibold">${extractItemName(item.html)}</p>
    `;

    // ✅ Buttons
    const buttons = document.createElement("div");
    buttons.className = "absolute top-2 right-2 flex gap-2";

    buttons.innerHTML = `
      <button
        class="aadd-button w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded flex items-center justify-center font-bold"
        onclick="saveItemToInventory(this)"
        title="Save to Inventory"
      >+</button>
      <button
        class="aadd-button w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center font-bold"
        onclick="deleteCourierItem(this)"
        title="Delete Item"
      >×</button>
    `;

    wrapper.innerHTML = ""; // clear before appending
    wrapper.appendChild(preview);
    wrapper.appendChild(buttons);

    // ✅ Store full item HTML for later (required by saveItemToInventory)
const fullItem = document.createElement("div");
fullItem.className = "hidden courier-full-html"; // <- ✅ This class is what saveItemToInventory expects
fullItem.innerHTML = item.html;
wrapper.appendChild(fullItem);


    list.appendChild(wrapper);
  });

}

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ensure user is logged in
function requireLogin(req, res, next) {
  if (!req.session.user?.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

// ✅ GET /api/courier/inbox
router.get('/inbox', requireLogin, async (req, res) => {
  const user = await User.findById(req.session.user.id);
  if (!user || !user.courier) return res.json({ inbox: [] });

  res.json({ inbox: user.courier });
});

// ✅ POST /api/courier/send
router.post('/send', requireLogin, async (req, res) => {
  const { recipientUsername, item } = req.body;

  if (!recipientUsername || !item) {
    return res.status(400).json({ message: 'Missing recipient or item.' });
  }

  const recipient = await User.findOne({ username: recipientUsername });
  if (!recipient) {
    return res.status(404).json({ message: 'Recipient not found.' });
  }

  recipient.courier = recipient.courier || [];
  recipient.courier.push({
    html: item.html,
    subcategory: item.subcategory,
    from: req.session.user.username,
    timestamp: new Date()
  });

  await recipient.save();

  res.json({ success: true });
});

// Load courier inbox from backend
async function loadCourierInbox() {
  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/courier/inbox', { credentials: 'include' });
    if (!res.ok) throw new Error('Failed to load courier inbox');
    const data = await res.json();
    renderCourierInbox(data.inbox);
  } catch (err) {
    console.error(err);
  }
}

async function deleteCourierItem(button) {
const li = button.closest("li");
const itemId = li?.dataset.itemId;

  if (!itemId) return alert('Item ID missing');

  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/courier/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ itemId }),
    });

    if (!res.ok) {
      const err = await res.json();
      alert('Failed to delete: ' + (err.message || 'Unknown error'));
      return;
    }

    // Remove the item from the DOM
    button.closest('li').remove();
  } catch (error) {
    console.error('Delete error:', error);
    alert('Network error during delete');
  }
}

window.deleteCourierItem = deleteCourierItem;

// Show courier modal and load inbox on click
document.getElementById('courierLink').addEventListener('click', () => {
  loadCourierInbox();
  toggleCourierModal(); // your existing modal toggle function
});

module.exports = router;

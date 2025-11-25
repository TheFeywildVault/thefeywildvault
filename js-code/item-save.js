async function saveItemToInventory(buttonOrBox, forcedSubcategory = null, item = null) {
  let itemBox = buttonOrBox.classList.contains("item-result")
    ? buttonOrBox
    : buttonOrBox.closest(".item-result") || buttonOrBox.closest("li");

  if (!itemBox) return;

  // Extract HTML
  let itemHtml = "";
  if (itemBox.classList.contains("item-result")) {
    const clonedBox = itemBox.cloneNode(true);
    clonedBox.querySelector(".add-button, .aadd-button, .popup-message")?.remove();
    itemHtml = clonedBox.innerHTML;
  } else {
    const hiddenDiv = itemBox.querySelector(".courier-full-html");
    if (!hiddenDiv) {
      alert("Error: Item data not found.");
      return;
    }
    itemHtml = hiddenDiv.innerHTML;
  }

  // Show popup
  const popup = itemBox.querySelector(".popup-message");
  if (popup) {
    popup.classList.remove("hidden");
    setTimeout(() => popup.classList.add("hidden"), 2000);
  }

// ---------- Improved category detection + safe logging ----------
let subcategory = forcedSubcategory || null;
let category = item?.category || itemBox.dataset.category || "";

// ensure typeLineText is defined in this scope so console.log won't throw
let typeLineText = "";

// If we don't have a category, try several fallbacks to find it in the DOM
if (!category) {
  // 1) Preferred existing selectors (if present)
  const typeLineEl = itemBox.querySelector('.output-line.italic') || itemBox.querySelector('.output-line');
  if (typeLineEl?.textContent) {
    typeLineText = typeLineEl.textContent.trim();
  }

  // 2) If nothing above, try the first italic <p> (your scrolls use <p><i>...</i></p>)
  if (!typeLineText) {
    const firstItalic = itemBox.querySelector('p i');
    if (firstItalic?.textContent) typeLineText = firstItalic.textContent.trim();
  }

  // 3) If still nothing, check title line (bold inside first <p>) which often contains "Scroll"
  if (!typeLineText) {
    const titleBold = itemBox.querySelector('p b, p strong');
    if (titleBold?.textContent) {
      const titleText = titleBold.textContent.trim();
      if (/scroll/i.test(titleText)) {
        category = "Scroll";
      } else {
        // retain title in typeLineText for regex parsing below
        typeLineText = titleText;
      }
    }
  }

  // 4) If we acquired a typeLineText, try the original regex extraction (trimmed)
  if (!category && typeLineText) {
    const m = typeLineText.trim().match(/^(.+?)(?:,|\s-\s|$)/);
    if (m && m[1]) {
      category = m[1].trim();
    }
  }

  // 5) Last resort: if nothing above set category but the whole element contains "scroll"
  if (!category) {
    const wholeText = (itemHtml || itemBox.textContent || "").toLowerCase();
    if (wholeText.includes("scroll")) {
      category = "Scroll";
    }
  }
}

// Normalize category string (optional but helps matching)
category = category ? category.replace(/\s+/g, ' ').trim() : "";

// Decide subcategory from category text (lowercase comparisons)
const cat = category.toLowerCase();

if (!subcategory) {
  if (cat.includes('weapon')) {
    subcategory = "Weapon";
  } else if (cat.includes('armor') || cat.includes('shield')) {
    subcategory = "Armor";
  } else if (cat.includes('scroll')) {
    subcategory = "Scroll";
  } else if (cat.includes('arrow') || cat.includes('bolt') || cat.includes('dart') || cat.includes('ammunition')) {
    subcategory = "Ammunition";
  } else {
    // fallback
    subcategory = "Wondrous Items";
  }
}

// Safe debug logging (typeLineText is always defined now)
console.log("Saving item:", { category, subcategory, typeLineText });

// Save to backend
  const res = await fetch("/api/inventory/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      html: itemHtml,
      classification: subcategory,
      category: category || "Wondrous Items",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Save failed:", res.status, text);
    throw new Error("Failed to save item");
  }

  // Delete from courier if needed
  const courierLi = itemBox.closest("li");
  const itemId = courierLi?.dataset.itemId;
  if (itemId) {
    try {
      const delRes = await fetch("/api/courier/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ itemId }),
      });
      if (delRes.ok) courierLi.remove();
    } catch (err) {
      console.error("Error deleting courier item after save:", err);
    }
  }
}


window.saveItemToInventory = saveItemToInventory;


// 🟢 Load inventory items on DOM ready
document.addEventListener("DOMContentLoaded", async () => {
  const backpack = document.getElementById("backpack");

  let storedItems = [];
  try {
    const res = await fetch("/api/inventory", { credentials: "include" });
    if (res.ok) {
      const data = await res.json();
      storedItems = data.items || [];
    } else {
      console.error("Failed to load inventory");
    }
  } catch (err) {
    console.error("Error loading inventory:", err);
  }

  const categories = {
    Weapons: [],
    Armor: [],
    "Wondrous Items": [],
    Scrolls: [],
    Ammunition: [],
  };


// === Normalized categorization when loading stored items ===
storedItems.forEach((itemObj, index) => {
  if (!itemObj || typeof itemObj !== "object" || !itemObj.html) return;

  const catRaw = itemObj.category || "";
  const cat = (typeof catRaw === "string") ? catRaw.trim() : "";
  const catLower = cat.toLowerCase();

  let subcat = "Wondrous Items"; // normalized default

  // exact lists lowered for comparison
  const weaponExact = ["simple weapon", "simple ranged weapon", "martial weapon", "martial ranged weapon"];
  const armorExact = ["light armor", "medium armor", "heavy armor", "shield"];
  const wondrousExact = ["garment", "jewelry", "staff", "quiver", "spell focus", "container", "instrument", "misc"];

  if (weaponExact.includes(catLower) || catLower.includes("weapon")) {
    subcat = "Weapon";
  } else if (armorExact.some(a => catLower.includes(a)) || catLower.includes("armor") || catLower.includes("shield")) {
    // allow "Light Armor", "light armor (mithral)", "armor, light", etc.
    subcat = "Armor";
  } else if (wondrousExact.includes(catLower) || wondrousExact.some(w => catLower.includes(w))) {
    subcat = "Wondrous Items";
  } else if (catLower.includes("scroll")) {
    subcat = "Scroll";
  } else if (catLower.includes("arrow") || catLower.includes("bolt") || catLower.includes("dart") || catLower.includes("ammunition")) {
    subcat = "Ammunition";
  } else {
    subcat = "Wondrous Items";
  }

  // push into arrays (use the same bucket names as your categories object)
  if (subcat === "Weapon") categories.Weapons.push({ ...itemObj, index });
  else if (subcat === "Armor") categories.Armor.push({ ...itemObj, index });
  else if (subcat === "Scroll") categories.Scrolls.push({ ...itemObj, index });
  else if (subcat === "Ammunition") categories.Ammunition.push({ ...itemObj, index });
  else categories["Wondrous Items"].push({ ...itemObj, index });
});


  const allEmpty = Object.values(categories).every(arr => arr.length === 0);

  backpack.innerHTML = "";

  if (allEmpty) {
    const placeholderMessage = document.createElement("p");
    placeholderMessage.textContent = "- You have no saved items -";
    placeholderMessage.className = "text-center text-[rgba(63,41,0,0.56)] italic text-4xl py-12 my-32";
    backpack.appendChild(placeholderMessage);
    return;
  }

  Object.entries(categories).forEach(([categoryName, items]) => {
    if (items.length === 0) return;

    const details = document.createElement("details");
    details.className = "group border brown-border rounded-2xl shadow-lg mb-4";

    const summary = document.createElement("summary");
    summary.className = "cursor-pointer text-xl font-semibold py-3 px-6 brown-bg-dark brown-text-light rounded-2xl select-none";
    summary.textContent = `${categoryName} (${items.length})`;

    const content = document.createElement("div");
    content.className = "p-6 space-y-4 rounded-b-2xl";
    content.style.backgroundColor = "#f4ecd8";

    details.addEventListener("toggle", () => {
      summary.classList.toggle("rounded-t-2xl", details.open);
      summary.classList.toggle("rounded-2xl", !details.open);
    });

    items.forEach(itemObj => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item-result mb-4 text-left relative";
      itemDiv.dataset.id = itemObj.id;

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = itemObj.html;

      tempDiv.querySelector(".add-button, .aadd-button")?.remove();
      tempDiv.querySelector(".popup-message")?.remove();

      itemDiv.innerHTML = tempDiv.innerHTML;

      // Subtract button (only for ammunition)
      if (categoryName === "Ammunition") {
        const quantityLine = Array.from(itemDiv.querySelectorAll(".output-line")).find(p => p.textContent.includes("x"));
        const match = quantityLine?.textContent.match(/x(\d+)/);

        if (match) {
          let count = parseInt(match[1]);

          const subtractBtn = document.createElement("button");
          subtractBtn.textContent = "-";
          subtractBtn.className = "absolute top-2 right-40 rounded w-8 h-7 bg-red-500 text-white font-bold text-xl z-50";
          subtractBtn.onclick = async () => {
            if (count > 0) {
              count--;
              quantityLine.textContent = quantityLine.textContent.replace(/x\d+/, `x${count}`);

              if (count === 0) {
                itemDiv.remove();
                await fetch("/api/inventory/delete", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({ itemId: itemObj.id }),
                });
              }
            }
          };

          itemDiv.appendChild(subtractBtn);
        }
      }

      const shareBtn = document.createElement("button");
      shareBtn.textContent = "Share";
      shareBtn.className = "absolute top-2 right-24 w-fit px-2 py-1 text-sm text-white bg-gray-700 rounded hover:bg-gray-900 transition";
      shareBtn.onclick = () => openShareModal(shareBtn);
      itemDiv.appendChild(shareBtn);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-button absolute top-2 right-3 w-fit px-2 py-1 text-sm text-white bg-gray-700 rounded hover:bg-red-600 transition";
      removeBtn.onclick = () => showConfirmPopup(itemDiv, itemObj.id);

      itemDiv.appendChild(removeBtn);
      content.appendChild(itemDiv);
    });

    details.appendChild(summary);
    details.appendChild(content);
    backpack.appendChild(details);
  });
});

let itemToRemove = null;
let itemToRemoveId = null;

function showConfirmPopup(itemElement, itemId) {
  itemToRemove = itemElement;
  itemToRemoveId = itemId;
  document.getElementById("confirmPopup").classList.remove("hidden");
}

document.getElementById("confirmYes").onclick = async () => {
  if (itemToRemove && itemToRemoveId) {
    itemToRemove.remove();

    await fetch("/api/inventory/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ itemId: itemToRemoveId }),
    });

    itemToRemove = null;
    itemToRemoveId = null;
    document.getElementById("confirmPopup").classList.add("hidden");
  }
};

document.getElementById("confirmNo").onclick = () => {
  itemToRemove = null;
  itemToRemoveId = null;
  document.getElementById("confirmPopup").classList.add("hidden");
};


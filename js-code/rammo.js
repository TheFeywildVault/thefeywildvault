const RandomAmmoTable = [        
    { id: 1, name: "Standard Arrow", simplename: "Arrow", intextname: "These Arrows", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Piercing", weight: "0.1 lb.", strength: "-", properties: "" },
    { id: 2, name: "Broadhead Arrow", simplename: "Arrow", intextname: "These Arrows", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Slashing", weight: "0.1 lb.", strength: "-", properties: "" },
    { id: 3, name: "Blunt Arrow", simplename: "Arrow", intextname: "These Arrows", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Bludgeoning", weight: "0.1 lb.", strength: "-", properties: "- Nonlethal" },
    { id: 4, name: "Standard Bolt", simplename: "Bolt", intextname: "These Bolts", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Piercing", weight: "0.1 lb.", strength: "-", properties: "" },
    { id: 5, name: "Broadhead Bolt", simplename: "Bolt", intextname: "These Bolts", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Slashing", weight: "0.1 lb.", strength: "-", properties: "" },
    { id: 6, name: "Blunt Bolt", simplename: "Bolt", intextname: "These Bolts", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Bludgeoning", weight: "0.1 lb.", strength: "-", properties: "- Nonlethal" },
    { id: 7, name: "Dart", simplename: "Dart", intextname: "These Darts", supcategory: "Weapon", category: " Simple Weapon", subcategory: "Weapon", material: "Metal", cost: "1", combat: "Bludgeoning", weight: "0.1 lb.", strength: "-", properties: "- Nonlethal" },
];

// ammo effect table
const ammoeffectTable = [
    {id: 1, effectname: "{flavor} {item}", common: "This {item} deals an additional 1d6 {element} damage.", uncommon: "This {item} deals an additional 1d8 {element} damage.", rare: "This {item} deals an additional 2d8 {element} damage.", veryrare: "This {item} deals an additional 3d12 {element} damage.", legendary: "This {item} deals an additional 5d12 {element} damage.", cost: "", patreon: "", inspiration: "", flavor: ""},
    {id: 2, effectname: "Walloping {item}", common: "This {item} packs a wallop. A creature hit by this {item} must succeed on a DC 10 Strength saving throw or be knocked prone.", uncommon: "", rare: "", veryrare: "", legendary: "", cost: "", patreon: "", inspiration: "", flavor: ""},
    {id: 3, effectname: "Shrouded {item}", common: "", uncommon: "", rare: "When a creature is hit by this {item}, it must make a DC 15 Constitution saving throw or have their Strength score reduced by 2d4 for 1 hour, or by half as much on a success. This effect can't reduce a creature's Strength score below 6.", veryrare: "", legendary: "", cost: "", patreon: "", inspiration: "", flavor: ""},

  ];

//DAMAGE TYPE       

// Define the table as an array of objects
const damageTypes = [
    { id: 1, damageType: "Acid" },
    { id: 2, damageType: "Cold" },
    { id: 3, damageType: "Fire" },
    { id: 4, damageType: "Force" },
    { id: 5, damageType: "Lightning" },
    { id: 6, damageType: "Necrotic" },
    { id: 7, damageType: "Poison" },
    { id: 8, damageType: "Psychic" },
    { id: 9, damageType: "Radiant" },
    { id: 10, damageType: "Thunder" }
];

// Array to store the last two selected damage types
let lastTwoSelections = [];

// Function to select a random damage type, avoiding the last two selections
function getRandomDamageType() {
    let availableDamageTypes = damageTypes.filter(type => 
        !lastTwoSelections.includes(type.damageType)
    );

    // In case all damage types are excluded by the last two selections
    if (availableDamageTypes.length === 0) {
        availableDamageTypes = damageTypes;
    }

    const randomIndex = Math.floor(Math.random() * availableDamageTypes.length);
    const selectedType = availableDamageTypes[randomIndex];

    // Update the last two selections
    lastTwoSelections.push(selectedType.damageType);
    if (lastTwoSelections.length > 2) {
        lastTwoSelections.shift(); // Keep only the last two selections
    }

    return selectedType;
}

function getDamageTypeAndFlavor() {
    const selectedDamageType = getRandomDamageType().damageType;

    const damageFlavors = {
        "Acid": ["Acidic", "Burning", "Corrosive"],
        "Cold": ["Frozen", "Chilled", "Snowy", "Frigid", "Icy", "Frosted", "Sub-Zero"],
        "Fire": ["Flaming", "Fiery", "Molten", "Blazing", "Smoldering"],
        "Force": ["Ethereal"],
        "Lightning": ["Charged", "Electrifying"],
        "Necrotic": ["Deadly", "Pestilent", "Deathly"],
        "Poison": ["Toxic", "Poisonous", "Noxious", "Putrid", "Slimy"],
        "Psychic": ["Grey"],
        "Radiant": ["Heavenly", "Shining", "Gleaming", "Lustrous", "Glorious", "Dazzling", "Illuminated"],
        "Thunder": ["Thunderous", "Booming", "Roaring", "Deafening"]
    };

    const damageOfFlavors = {
        "Acid": ["Acid", "Slime"],
        "Cold": ["Snow", "Ice", "Blizzards"],
        "Fire": ["Fire", "Lava", "Volcanoes", "Embers"],
        "Force": ["Intangibility", "Etherealness"],
        "Lightning": ["Storms", "Lightning"],
        "Necrotic": ["Death", "Pestilence", "Shadows"],
        "Poison": ["Poison", "Venom", "Toxins"],
        "Psychic": ["Telepathy", "Mysticism"],
        "Radiant": ["Light", "Brilliance"],
        "Thunder": ["Thunder", "Clamor"]
    };

    const flavors = damageFlavors[selectedDamageType];
    const offlavors = damageOfFlavors[selectedDamageType];

    if (flavors && flavors.length > 0 && offlavors && offlavors.length > 0) {
        const flavorIndex = Math.floor(Math.random() * flavors.length);
        const ofFlavorIndex = Math.floor(Math.random() * offlavors.length);
        const selectedFlavor = flavors[flavorIndex];
        const selectedOfFlavor = offlavors[ofFlavorIndex];

        return {
            damageType: selectedDamageType,
            flavor: selectedFlavor,
            offlavor: selectedOfFlavor
        };
    } else {
        return {
            damageType: selectedDamageType,
            flavor: "Unknown flavor",
            offlavor: "Unknown of-flavor"
        };
    }
}

//CREATURE TYPE       

// Define the table as an array of objects
const creatureTypes = [
    { id: 1, creatureType: "Aberation" },
    { id: 2, creatureType: "Beast" },
    { id: 3, creatureType: "Celestial" },
    { id: 4, creatureType: "Construct" },
    { id: 5, creatureType: "Dragon" },
    { id: 6, creatureType: "Elemental" },
    { id: 7, creatureType: "Fey" },
    { id: 8, creatureType: "Fiend" },
    { id: 9, creatureType: "Giant" },
    { id: 10, creatureType: "Monstrosity" },
    { id: 11, creatureType: "Ooze" },
    { id: 12, creatureType: "Plant" },
    { id: 13, creatureType: "Undead" },
];

    // Array to store the last two selected damage types
    let lastTwoCSelections = [];

    // Function to select a random damage type, avoiding the last two selections
    function getRandomCreatureType() {
        let availableCreatureTypes = creatureTypes.filter(type => 
            !lastTwoCSelections.includes(type.creatureType)
        );

        // In case all damage types are excluded by the last two selections
        if (availableCreatureTypes.length === 0) {
            availableCreatureTypes =  creatureTypes;
        }

        const randomIndex = Math.floor(Math.random() * availableCreatureTypes.length);
        const selectedType = availableCreatureTypes[randomIndex];

        // Update the last two selections
        lastTwoCSelections.push(selectedType.creatureType);
        if (lastTwoCSelections.length > 2) {
            lastTwoCSelections.shift(); // Keep only the last two selections
        }

        return selectedType;
    }       

//RARITY

function getColumnForLevel(level) {
    if (level >= 1 && level <= 4) return 0;
    if (level >= 5 && level <= 10) return 1;
    if (level >= 11 && level <= 16) return 2;
    if (level >= 17 && level <= 20) return 3;
    }

    function getRarity(level, roll) {
    const rarityTable = [
    [3, 3, 3, 3, 4],  // Level 1-4
    [3, 4, 4, 4, 5],  // Level 5-10
    [4, 4, 5, 5, 6],  // Level 11-16
    [5, 5, 5, 6, 7],  // Level 17-20
    ];
    const rarityLabels = ["Common", "Uncommon", "Rare", "Very Rare", "Legendary"];
    const column = getColumnForLevel(level);

    // Ensure roll produces a valid index
    const index = Math.min(Math.floor(roll / 2), 4); // Cap index at 4

    const rarity = rarityTable[column][index];

    return rarityLabels[rarity - 3];
    }

//COST

function getCost(rarity) {
    const rarityValues = {
    "Common": 10,
    "Uncommon": 50,
    "Rare": 500,
    "Very Rare": 2000,
    "Legendary": 5000
    };

    return rarityValues[rarity] || 0; // Return 0 if rarity is not found
    }

    // Example usage:
    function getCostValue(level, roll) {
    const rarity = getRarity(level, roll);
    return getCost(rarity);
    }

//BASE BONUS

function determineBaseBonus(item, rarity) {
    if (item.subcategory !== "Weapon") {
    return "";  // Return an empty string if the item is neither Weapon nor Armor
    }

    const bonusTable = {
    "Common": [""],
    "Uncommon": ["", "+1"],
    "Rare": ["", "+1", "+2"],
    "Very Rare": ["+1", "+2", "+3"],
    "Legendary": ["+2", "+3", "+4"]
    };

    const possibleBonuses = bonusTable[rarity];
    const randomIndex = Math.floor(Math.random() * possibleBonuses.length);

    return possibleBonuses[randomIndex];
    }

//MAGIC EFFECT

function getRandomEffect(effectTable, rarity) {
const row = Math.floor(Math.random() * effectTable.length);
const rarityMapping = {
"Common": "common",
"Uncommon": "uncommon",
"Rare": "rare",
"Very Rare": "veryrare",
"Legendary": "legendary"
};

// Fetch the correct effect based on the rarity
const rarityKey = rarityMapping[rarity];

// Return both the effect and the patreon property
return {
effect: effectTable[row][rarityKey],
modifier: effectTable[row].effectname,  // Assuming 'effectname' is the item description
patreon: effectTable[row].patreon,  // Add the patreon property
cost: effectTable[row].cost
};
}

//ITEM NAME REPLACEMENTS
function replaceItemInEffect(effectModifier, item, damageType, flavor, offlavor) {
    return effectModifier
        .replace(/{item}/gi, item.name)
        .replace(/{simplename}/gi, item.simplename)
        .replace(/{intextname}/gi, item.intextname)
        .replace(/{element}/gi, damageType)
        .replace(/{flavor}/gi, flavor)
        .replace(/{offlavor}/gi, offlavor);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 2;
}

function getSelectedAmmoTypes() {
  const checkboxes = document.querySelectorAll('#ammoDropdown .ammo');
  const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);

  // If none are selected, default to all
  if (selected.length === 0) {
    return Array.from(checkboxes).map(cb => cb.value);
  }

  return selected;
}

// FINAL RANDOM ITEM OUTPUT
function generateammo() {
  const runCount = parseInt(document.getElementById("runCount").value);
  const level = parseInt(document.getElementById("level").value);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  // Use the full ammo list for now (replace filter function)
const selectedTypes = getSelectedAmmoTypes();
const filteredItems = RandomAmmoTable.filter(item => selectedTypes.includes(item.simplename));

if (filteredItems.length === 0) {
  resultDiv.innerHTML = "<p>No matching items found. Please select at least one type of ammunition.</p>";
  return;
}
  if (filteredItems.length === 0) {
    resultDiv.innerHTML = "<p>No matching items found.</p>";
    return;
  }

  function getEffectTableForItem(item) {
    if (item.simplename === "Arrow" || item.simplename === "Bolt" || item.simplename === "Dart") return ammoeffectTable;
    return [];
  }

  for (let i = 0; i < runCount; i++) {
    const roll = Math.floor(Math.random() * 10) + 1;
    const itemIndex = Math.floor(Math.random() * filteredItems.length);
    const item = filteredItems[itemIndex];

    const rarity = getRarity(level, roll);
    const creature = getRandomCreatureType();
    const gold = getCostValue(level, roll);
    const { damageType, flavor, offlavor } = getDamageTypeAndFlavor();
    const bonus = determineBaseBonus(item, rarity);
    const randomNumber = getRandomNumber();

    const ttname = item.intextname.toLowerCase();
    const sname = item.simplename.toLowerCase();
    const lflavor = flavor.toLowerCase();

    const effectTable = getEffectTableForItem(item);
    if (effectTable.length === 0) {
      resultDiv.innerHTML += `<p>No effect table for ${item.name}</p>`;
      continue;
    }

  // 🔁 Keep picking an effect for this rarity until it's non-empty
let effectResult = null;
const maxTries = 20; // safety cap to avoid infinite loop

for (let attempt = 0; attempt < maxTries; attempt++) {
  const candidate = getRandomEffect(effectTable, rarity);
  if (candidate && candidate.effect && candidate.effect.trim() !== "") {
    effectResult = candidate;
    break;
  }
}

// If still no valid effect found, skip this item
if (!effectResult) {
  continue; // move to next iteration of the for (let i = 0; i < runCount; i++) loop
}

// Now do the language replacement
effectResult.effect = effectResult.effect
  .replace(/{element}/g, damageType)
  .replace(/{creature}/g, creature.creatureType)
  .replace("{bonus}", bonus)
  .replace(/{flavor}/g, lflavor)
  .replace(/{sitem}/g, sname)
  .replace(/{item}/g, ttname);

    const finalname = replaceItemInEffect(effectResult.modifier, item, damageType, flavor, offlavor);

    const effectCost = effectResult.cost ? parseFloat(effectResult.cost) : 0;
    const itemCost = parseFloat(item.cost) || 0;
    const finalcost = Math.ceil((gold * effectCost) + itemCost);

const outputBox = document.createElement("div");
outputBox.classList.add("output-box", "result", "ammo-result", "item-result", "relative", "pt-2");

outputBox.innerHTML = `
  <!-- Button container (absolute, top-right) -->
<div class="absolute top-1 right-2 flex flex-col-reverse gap-1 sm:flex-row sm:items-center sm:gap-2">
  <!-- Share / ">" button -->
  <button
    class="aadd-button h-8 text-white bg-gray-700 rounded hover:bg-gray-900 transition flex items-center justify-center font-bold"
    onclick="handleShareButton(this)">
    <span class="inline sm:hidden">&gt;</span>
    <span class="hidden w-16 sm:inline">Share</span>
  </button>

  <!-- Save "+" button -->
  <button
    class="aadd-button w-8 h-8 text-white bg-gray-700 rounded hover:bg-gray-900 transition flex items-center justify-center font-bold"
    onclick="handleSaveButton(this)"
  >
    +
  </button>
</div>
  <div class="rarity ${rarity.replace(" ", ".")} font-semibold text-lg mb-1">${finalname}</div>
  <p class="output-line italic">${bonus} ${item.name} x${randomNumber} - ${rarity}</p>
  <p class="output-line effect">${item.combat} ${item.properties}</p>
  <p class="output-line effect">${effectResult.effect}</p>
  <p class="output-line">Cost: ${finalcost} gp</p>

  <div class="popup-message hidden absolute top-12 right-4 bg-gray-500/90 text-white text-sm px-3 py-1 rounded shadow z-20">Item Saved to Inventory</div>
`;

resultDiv.appendChild(outputBox);

  }
}
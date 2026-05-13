// ===============================
// Universal Monster Dropdown Logic
// ===============================

function toggleMonsterDropdown(buttonElement, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const dropdown = container.querySelector(".dropdown-content");
  const arrow = buttonElement.querySelector(".arrow");

  if (!dropdown) return;

  const isHidden = dropdown.classList.contains("hidden");

  if (isHidden) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? "&#9652;" : "&#9662;";
  }
}


// ===============================
// Difficulty Dropdown
// HTML uses: toggleDropdownDiff(this)
// ===============================
function toggleDropdownDiff(buttonElement) {
  toggleMonsterDropdown(buttonElement, "DiffDropdown");
}

function selectAllDiffDropdown(containerId) {
  selectAllMonsterDropdown(containerId);
}

function unselectAllDiffDropdown(containerId) {
  unselectAllMonsterDropdown(containerId);
}

function selectAllMonsterDropdown(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll(".dropdown-checkbox").forEach((checkbox) => {
    checkbox.checked = true;
  });
}

function unselectAllMonsterDropdown(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll(".dropdown-checkbox").forEach((checkbox) => {
    checkbox.checked = false;
  });
}

// ===============================
// Size Dropdown
// HTML uses: toggleDropdown(this)
// ===============================

function toggleDropdown(buttonElement) {
  toggleMonsterDropdown(buttonElement, "SizeDropdown");
}

function selectAllSizeDropdown(containerId) {
  selectAllMonsterDropdown(containerId);
}

function unselectAllSizeDropdown(containerId) {
  unselectAllMonsterDropdown(containerId);
}

// ===============================
// Creature Type Dropdown
// HTML uses: toggleDropdownCType(this)
// ===============================

function toggleDropdownCType(buttonElement) {
  toggleMonsterDropdown(buttonElement, "CTypeDropdown");
}

function selectAllCTypeDropdown(containerId) {
  selectAllMonsterDropdown(containerId);
}

function unselectAllCTypeDropdown(containerId) {
  unselectAllMonsterDropdown(containerId);
}

// ===============================
// Alignment Dropdown
// HTML uses: toggleDropdownType(this)
// ===============================

function toggleDropdownType(buttonElement) {
  toggleMonsterDropdown(buttonElement, "AlignDropdown");
}

function selectAllAlignDropdown(containerId) {
  selectAllMonsterDropdown(containerId);
}

function unselectAllAlignDropdown(containerId) {
  unselectAllMonsterDropdown(containerId);
}

// ===============================
// Biome Dropdown
// HTML uses: toggleDropdownBiome(this)
// ===============================

function toggleDropdownBiome(buttonElement) {
  toggleMonsterDropdown(buttonElement, "BiomeDropdown");
}

function selectAllBiomeDropdown(containerId) {
  selectAllMonsterDropdown(containerId);
}

function unselectAllBiomeDropdown(containerId) {
  unselectAllMonsterDropdown(containerId);
}

// ===============================
// Speed Dropdown
// HTML uses: toggleDropdownSpeed(this)
// ===============================

function toggleDropdownSpeed(buttonElement) {
  toggleMonsterDropdown(buttonElement, "SpeedDropdown");
}

function selectAllSpeedDropdown(containerId) {
  selectAllMonsterDropdown(containerId);
}

function unselectAllSpeedDropdown(containerId) {
  unselectAllMonsterDropdown(containerId);
}

// ===============================
// Optional Helper Functions
// Use these in generateMonster()
// ===============================

function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function getSelectedMonsterFilters() {
  return {
    sizes: getCheckedValues(".dropdown-checkbox.size"),
    creatureTypes: getCheckedValues(".dropdown-checkbox.ctype"),

    // Your HTML currently spells this class as "alignement"
    // so this matches the current file exactly.
    alignments: getCheckedValues(".dropdown-checkbox.alignement"),

    biomes: getCheckedValues(".dropdown-checkbox.biome"),
    speeds: getCheckedValues(".dropdown-checkbox.speed"),

    minCR: parseInt(document.getElementById("crMin")?.value ?? "0"),
    maxCR: parseInt(document.getElementById("crMax")?.value ?? "30"),

    minAC: parseInt(document.getElementById("acMin")?.value ?? "5"),
    maxAC: parseInt(document.getElementById("acMax")?.value ?? "25")
  };
}

  function selectAllDiffDropdown(id) {
    const wrapper = document.getElementById(id);
    if (!wrapper) return;

    const checkboxes = wrapper.querySelectorAll(".difficulty");
    checkboxes.forEach(box => {
      box.checked = true;
    });
  }

  function unselectAllDiffDropdown(id) {
    const wrapper = document.getElementById(id);
    if (!wrapper) return;

    const checkboxes = wrapper.querySelectorAll(".difficulty");
    checkboxes.forEach(box => {
      box.checked = false;
    });
  }
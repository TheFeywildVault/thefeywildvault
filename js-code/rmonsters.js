const RandomMonsterTable = [        
  { id: 1, name: "Aboleth", size: "Large", displaytype: "Aberration", filtertype: "Aberration", alignment: "Lawful Evil", biome: "Underwater", cr: "10 ", exp: "(XP 5,900, or 7,200 in lair)", proficiency: "4", ac: "17", hitpoints: "150 (20d10 + 40)", speed: "10 ft., Swim 40 ft.", fly: "", swim: "Yes", climb: "", burrow: "", str: 21, strmod: 5, strsave:5, dex: 9, dexmod: -1, dexsave:3, con: 15, conmod: 2, consave:6, int: 18, intmod: 4, intsave:8, wis: 15, wismod: 2, wissave:6, cha: 18, chamod: 4, chasave:4, skills: "History +12, Perception +10", vulnerabilities: "", resistances: "", immunitydmg: "", immunitycnd: "", gear: "", senses: "Darkvision 120 ft.; Passive Perception 20", languages: "Deep Speech; telepathy 120 ft.", traits: "<b>Amphibious.</b> The aboleth can breathe air and water.<br><br><b>Eldritch Restoration.</b> If destroyed, the aboleth gains a new body in 5d10 days, reviving with all its Hit Points in the Far Realm or another location chosen by the GM.<br><br><b>Legendary Resistance (3/Day, or 4/Day in Lair).</b> If the aboleth fails a saving throw, it can choose to succeed instead.<br><br><b>Mucus Cloud.</b> While underwater, the aboleth is surrounded by mucus. Constitution Saving Throw: DC 14, each creature in a 5-foot Emanation originating from the aboleth at the end of the aboleth’s turn. Failure: The target is cursed. Until the curse ends, the target’s skin becomes slimy, the target can breathe air and water, and it can’t regain Hit Points unless it is underwater. While the cursed creature is outside a body of water, the creature takes 6 (1d12) Acid damage at the end of every 10 minutes unless moisture is applied to its skin before those minutes have passed.<br><br><b>Probing Telepathy.</b> If a creature the aboleth can see communicates telepathically with the aboleth, the aboleth learns the creature’s greatest desires.", actions: "<b>Multiattack.</b> The aboleth makes two Tentacle attacks and uses either Consume Memories or Dominate Mind if available.<br><br><b>Tentacle.</b> Melee Attack Roll: +9, reach 15 ft. Hit: 12 (2d6 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of four tentacles.<br><br><b>Consume Memories.</b> Intelligence Saving Throw: DC 16, one creature within 30 feet that is Charmed or Grappled by the aboleth. Failure: 10 (3d6) Psychic damage. Success: Half damage. Failure or Success: The aboleth gains the target’s memories if the target is a Humanoid and is reduced to 0 Hit Points by this action.<br><br><b>Dominate Mind (2/Day).</b> Wisdom Saving Throw: DC 16, one creature the aboleth can see within 30 feet. Failure: The target has the Charmed condition until the aboleth dies or is on a different plane of existence from the target. While Charmed, the target acts as an ally to the aboleth and is under its control while within 60 feet of it. In addition, the aboleth and the target can communicate telepathically with each other over any distance. The target repeats the save whenever it takes damage as well as after every 24 hours it spends at least 1 mile away from the aboleth, ending the effect on itself on a success.", bonusactions: "", reactions: "", legendaryactions: "<b>Legendary Action Uses: 3 (4 in Lair).</b> Immediately after another creature’s turn, the aboleth can expend a use to take one of the following actions. The aboleth regains all expended uses at the start of each of its turns.<br><br><b>Lash.</b> The aboleth makes one Tentacle attack.<br><br><b>Psychic Drain.</b> If the aboleth has at least one creature Charmed or Grappled, it uses Consume Memories and regains 5 (1d10) Hit Points." },
  { id: 2, name: "Air Elemental", size: "Large", displaytype: "Elemental", filtertype: "Elemental", alignment: "Neutral", biome: "Mountain", cr: "5 ", exp: "(XP 1,800)", proficiency: "3", ac: "15", hitpoints: "90 (12d10 + 24)", speed: "10 ft., Fly 90 ft. (hover)", fly: "Yes", swim: "", climb: "", burrow: "", str: 14, strmod: 2, strsave:2, dex: 20, dexmod: 5, dexsave:5, con: 14, conmod: 2, consave:2, int: 6, intmod: -2, intsave:-2, wis: 10, wismod: 0, wissave:0, cha: 6, chamod: -2, chasave:-2, skills: "", vulnerabilities: "", resistances: "Bludgeoning, Lightning, Piercing, Slashing", immunitydmg: "Poison, Thunder", immunitycnd: "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious", gear: "", senses: "Darkvision 60 ft.; Passive Perception 10", languages: "Primordial (Auran)", traits: "<b>Air Form.</b> The elemental can enter a creature’s space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so.", actions: "<b>Multiattack.</b> The elemental makes two Thunderous Slam attacks.<br><br><b>Thunderous Slam.</b> Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Thunder damage.<br><br><b>Whirlwind (Recharge 4–6).</b> Strength Saving Throw: DC 13, one Medium or smaller creature in the elemental’s space. Failure: 24 (4d10 + 2) Thunder damage, and the target is pushed up to 20 feet straight away from the elemental and has the Prone condition. Success: Half damage only. Animated Objects", bonusactions: "", reactions: "", legendaryactions: "" },
  { id: 3, name: "Animated Armor", size: "Medium", displaytype: "Construct", filtertype: "Construct", alignment: "Unaligned", biome: "Urban", cr: "1 ", exp: "(XP 200)", proficiency: "2", ac: "18", hitpoints: "33 (6d8 + 6)", speed: "25 ft.", fly: "", swim: "", climb: "", burrow: "", str: 14, strmod: 2, strsave:2, dex: 11, dexmod: 0, dexsave:0, con: 13, conmod: 1, consave:1, int: 1, intmod: -5, intsave:-5, wis: 3, wismod: -4, wissave:-4, cha: 1, chamod: -5, chasave:-5, skills: "", vulnerabilities: "", resistances: "", immunitydmg: "Poison, Psychic", immunitycnd: "Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned", gear: "", senses: "Blindsight 60 ft.; Passive Perception 6", languages: "None", traits: "", actions: "<b>Multiattack.</b> The armor makes two Slam attacks.<br><br><b>Slam.</b> Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Bludgeoning damage.", bonusactions: "", reactions: "", legendaryactions: "" },


]

const CR_RECOMMENDATION_TABLES = {
  easy: {
    1: ["1/8", "1/4", "1/4", "1/2", "1/2", "1/2", "1/2", "1", "1", "1"],
    2: ["1/4", "1/2", "1/2", "1", "1", "1", "1", "1", "2", "2"],
    3: ["1/4", "1/2", "1", "1", "1", "2", "2", "2", "2", "3"],
    4: ["1/2", "1", "1", "2", "2", "3", "3", "3", "4", "4"],
    5: ["1", "2", "3", "3", "4", "4", "4", "5", "5", "6"],
    6: ["1", "2", "3", "4", "4", "5", "5", "6", "6", "7"],
    7: ["1", "3", "3", "4", "4", "5", "6", "6", "7", "7"],
    8: ["2", "3", "4", "5", "5", "6", "7", "7", "8", "8"],
    9: ["2", "4", "4", "5", "6", "7", "7", "8", "8", "9"],
    10: ["2", "4", "5", "6", "7", "7", "8", "8", "9", "10"],
    11: ["3", "4", "6", "7", "8", "8", "9", "10", "11", "11"],
    12: ["3", "5", "7", "8", "9", "10", "10", "11", "12", "13"],
    13: ["4", "5", "7", "8", "9", "10", "11", "12", "12", "13"],
    14: ["4", "6", "7", "9", "10", "11", "12", "13", "13", "14"],
    15: ["4", "6", "8", "9", "10", "12", "12", "13", "14", "15"],
    16: ["4", "7", "8", "10", "11", "12", "13", "14", "15", "16"],
    17: ["5", "8", "10", "11", "13", "14", "15", "16", "17", "18"],
    18: ["5", "8", "10", "12", "13", "14", "15", "16", "17", "18"],
    19: ["6", "8", "11", "12", "14", "15", "16", "17", "18", "19"],
    20: ["6", "9", "12", "13", "15", "16", "17", "19", "20", "20"]
  },

  medium: {
    1: ["1/4", "1/2", "1/2", "1", "1", "1", "1", "1", "2", "2"],
    2: ["1/2", "1", "1", "1", "2", "2", "3", "3", "3", "3"],
    3: ["1/2", "1", "2", "2", "3", "3", "3", "4", "4", "4"],
    4: ["1", "2", "3", "3", "4", "4", "4", "5", "5", "6"],
    5: ["2", "3", "4", "5", "6", "7", "7", "8", "8", "9"],
    6: ["2", "4", "5", "6", "7", "7", "8", "8", "9", "10"],
    7: ["3", "4", "5", "7", "7", "8", "9", "10", "10", "11"],
    8: ["3", "5", "6", "7", "8", "9", "10", "11", "11", "12"],
    9: ["4", "5", "7", "8", "9", "10", "11", "12", "12", "13"],
    10: ["4", "6", "7", "8", "10", "11", "12", "12", "13", "14"],
    11: ["4", "7", "8", "10", "11", "12", "13", "14", "15", "16"],
    12: ["5", "8", "10", "11", "13", "14", "15", "16", "17", "18"],
    13: ["5", "8", "10", "12", "13", "15", "16", "16", "17", "19"],
    14: ["6", "9", "11", "13", "14", "16", "16", "18", "19", "20"],
    15: ["6", "9", "12", "13", "15", "16", "17", "19", "20", "20"],
    16: ["7", "10", "12", "14", "16", "17", "19", "20", "20", "20"],
    17: ["8", "11", "14", "16", "17", "19", "20", "20", "21", "21"],
    18: ["8", "12", "14", "16", "18", "20", "20", "21", "21", "22"],
    19: ["8", "12", "15", "17", "19", "20", "21", "21", "22", "22"],
    20: ["9", "13", "16", "19", "20", "21", "21", "22", "23", "23"]
  },

  hard: {
    1: ["1/4", "1/2", "1", "1", "1", "2", "2", "2", "2", "3"],
    2: ["1/2", "1", "2", "2", "3", "3", "3", "4", "4", "4"],
    3: ["1", "2", "2", "3", "4", "4", "4", "5", "5", "5"],
    4: ["1", "3", "4", "4", "5", "5", "6", "7", "7", "7"],
    5: ["3", "4", "5", "7", "7", "8", "9", "10", "10", "11"],
    6: ["3", "5", "6", "7", "8", "9", "10", "11", "11", "12"],
    7: ["4", "5", "7", "8", "9", "10", "11", "12", "12", "13"],
    8: ["4", "6", "8", "9", "10", "12", "12", "13", "14", "15"],
    9: ["4", "7", "8", "10", "11", "12", "13", "14", "15", "16"],
    10: ["5", "7", "9", "11", "12", "13", "15", "16", "16", "17"],
    11: ["6", "8", "11", "12", "14", "15", "16", "17", "18", "19"],
    12: ["7", "10", "12", "14", "16", "17", "18", "19", "20", "20"],
    13: ["7", "10", "13", "15", "16", "18", "19", "20", "20", "21"],
    14: ["7", "11", "13", "16", "17", "19", "20", "20", "21", "21"],
    15: ["8", "12", "14", "16", "18", "20", "20", "21", "21", "22"],
    16: ["8", "12", "15", "17", "19", "20", "21", "21", "22", "22"],
    17: ["10", "14", "16", "19", "20", "21", "22", "22", "23", "23"],
    18: ["10", "14", "17", "20", "20", "21", "22", "23", "23", "24"],
    19: ["11", "15", "18", "20", "21", "22", "23", "23", "24", "24"],
    20: ["12", "16", "20", "21", "22", "23", "23", "24", "25", "25"]
  },

  deadly: {
    1: ["1/2", "1", "1", "1", "2", "2", "3", "3", "3", "3"],
    2: ["1", "1", "2", "3", "3", "4", "4", "4", "5", "5"],
    3: ["1", "3", "4", "4", "5", "6", "6", "7", "7", "8"],
    4: ["2", "3", "4", "5", "6", "7", "7", "8", "8", "9"],
    5: ["4", "5", "7", "8", "9", "10", "11", "12", "12", "13"],
    6: ["4", "6", "8", "9", "10", "12", "12", "13", "14", "15"],
    7: ["4", "7", "9", "10", "12", "13", "14", "15", "16", "16"],
    8: ["5", "8", "10", "12", "13", "14", "15", "16", "17", "18"],
    9: ["6", "8", "11", "12", "14", "15", "16", "17", "18", "19"],
    10: ["6", "9", "12", "13", "15", "16", "17", "19", "20", "20"],
    11: ["7", "11", "13", "15", "17", "18", "20", "20", "20", "21"],
    12: ["8", "12", "15", "17", "19", "20", "20", "21", "21", "22"],
    13: ["9", "13", "16", "18", "20", "20", "21", "21", "22", "23"],
    14: ["9", "13", "16", "19", "20", "21", "21", "22", "23", "23"],
    15: ["10", "14", "17", "20", "20", "21", "22", "23", "23", "24"],
    16: ["11", "15", "18", "20", "21", "22", "23", "23", "24", "24"],
    17: ["12", "16", "20", "21", "22", "23", "23", "24", "25", "25"],
    18: ["12", "17", "20", "21", "22", "23", "24", "25", "25", "26"],
    19: ["13", "18", "20", "22", "23", "24", "25", "25", "26", "27"],
    20: ["14", "20", "21", "23", "24", "25", "25", "26", "27", "28"]
  }
};

// =====================================================
// Monster Generator / Selection Logic
// Requires:
//   - RandomMonsterTable from rmonsters.js
//   - CR_RECOMMENDATION_TABLES from your CR table file
//   - Existing HTML IDs from monsters.html
// =====================================================

// Ordered CR list used by the CR slider and CR adjustments.
// Slider values should be indexes into this array.
const MONSTER_CR_ORDER = [
  "0",
  "1/8",
  "1/4",
  "1/2",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30"
];

function normalizeCR(cr) {
  return String(cr ?? "").trim();
}

function crToIndex(cr) {
  return MONSTER_CR_ORDER.indexOf(normalizeCR(cr));
}

function indexToCR(index) {
  const safeIndex = Math.max(0, Math.min(MONSTER_CR_ORDER.length - 1, Number(index)));
  return MONSTER_CR_ORDER[safeIndex];
}

function formatModifier(value) {
  const number = Number(value);
  return number >= 0 ? `+${number}` : `${number}`;
}

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getSelectedCheckboxValues(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter(box => box.checked)
    .map(box => box.value);
}

// =====================================================
// Difficulty Logic
// =====================================================

function getWeightedRandomDifficulty() {
  const roll = Math.random() * 100;

  if (roll < 30) return "easy";
  if (roll < 80) return "medium";
  if (roll < 95) return "hard";
  return "deadly";
}

function getSelectedDifficulty() {
  const selectedDifficulties = getSelectedCheckboxValues(".difficulty")
    .map(value => value.toLowerCase());

  // If no difficulty is selected, use weighted default.
  if (selectedDifficulties.length === 0) {
    return {
      difficulty: getWeightedRandomDifficulty(),
      source: "No difficulty selected; randomly selected using Easy 30%, Medium 50%, Hard 15%, Deadly 5%."
    };
  }

  // If one or more are selected, randomly choose among the selected options.
  const chosen = getRandomArrayItem(selectedDifficulties);

  return {
    difficulty: chosen,
    source: `Difficulty selected from checked options: ${selectedDifficulties.join(", ")}.`
  };
}

function getRecommendedMonsterCR(playerLevel, playerCount, difficulty = "medium") {
  const normalizedDifficulty = String(difficulty).toLowerCase();

  if (!CR_RECOMMENDATION_TABLES[normalizedDifficulty]) {
    console.warn(`Invalid difficulty: ${difficulty}`);
    return null;
  }

  const level = Number(playerLevel);
  const count = Number(playerCount);

  if (level < 1 || level > 20 || !Number.isInteger(level)) {
    console.warn(`Invalid player level: ${playerLevel}. Must be 1-20.`);
    return null;
  }

  if (count < 1 || count > 10 || !Number.isInteger(count)) {
    console.warn(`Invalid player count: ${playerCount}. Must be 1-10.`);
    return null;
  }

  return CR_RECOMMENDATION_TABLES[normalizedDifficulty][level][count - 1];
}

// =====================================================
// Monster Count CR Adjustment
// =====================================================

function getCRAdjustmentForMonsterCount(monsterCount) {
  if (monsterCount <= 1) return 0;
  if (monsterCount === 2) return 2;
  if (monsterCount === 3) return 3;
  if (monsterCount === 4) return 4;
  if (monsterCount === 5) return 5;
  if (monsterCount >= 6 && monsterCount <= 7) return 6;
  if (monsterCount >= 8 && monsterCount <= 11) return 7;
  if (monsterCount >= 12 && monsterCount <= 14) return 8;
  return 9;
}

function getAdjustedMonsterCR(baseCR, monsterCount) {
  const baseIndex = crToIndex(baseCR);

  if (baseIndex === -1) {
    console.warn(`Invalid base CR: ${baseCR}`);
    return null;
  }

  const adjustment = getCRAdjustmentForMonsterCount(monsterCount);
  const adjustedIndex = Math.max(0, baseIndex - adjustment);

  return indexToCR(adjustedIndex);
}

function clampCRToSliderRange(cr, minCR, maxCR) {
  const crIndex = crToIndex(cr);
  const minIndex = crToIndex(minCR);
  const maxIndex = crToIndex(maxCR);

  if (crIndex === -1) return minCR;

  if (crIndex < minIndex) return minCR;
  if (crIndex > maxIndex) return maxCR;

  return cr;
}

// =====================================================
// Slider Values
// =====================================================

function getCRSliderRange() {
  const minSlider = document.getElementById("crMin");
  const maxSlider = document.getElementById("crMax");

  const minIndex = Number(minSlider?.value ?? 0);
  const maxIndex = Number(maxSlider?.value ?? MONSTER_CR_ORDER.length - 1);

  return {
    minCR: indexToCR(minIndex),
    maxCR: indexToCR(maxIndex),
    minIndex,
    maxIndex
  };
}

function getACSliderRange() {
  const minAC = Number(document.getElementById("acMin")?.value ?? 5);
  const maxAC = Number(document.getElementById("acMax")?.value ?? 25);

  return {
    minAC,
    maxAC
  };
}

// =====================================================
// Filters
// =====================================================

function monsterHasSelectedSpeed(monster, selectedSpeeds) {
  if (selectedSpeeds.length === 0) return true;

  return selectedSpeeds.some(speed => {
    const key = speed.toLowerCase();

    if (key === "fly") {
      return String(monster.fly ?? "").toLowerCase() === "yes" ||
        String(monster.speed ?? "").toLowerCase().includes("fly");
    }

    if (key === "swim") {
      return String(monster.swim ?? "").toLowerCase() === "yes" ||
        String(monster.speed ?? "").toLowerCase().includes("swim");
    }

    if (key === "climb") {
      return String(monster.climb ?? "").toLowerCase() === "yes" ||
        String(monster.speed ?? "").toLowerCase().includes("climb");
    }

    if (key === "burrow") {
      return String(monster.burrow ?? "").toLowerCase() === "yes" ||
        String(monster.speed ?? "").toLowerCase().includes("burrow");
    }

    return false;
  });
}

function monsterPassesOptionalFilters(monster) {
  const selectedSizes = getSelectedCheckboxValues(".size");
  const selectedTypes = getSelectedCheckboxValues(".ctype");
  const selectedAlignments = getSelectedCheckboxValues(".alignement"); // HTML currently uses "alignement"
  const selectedBiomes = getSelectedCheckboxValues(".biome");
  const selectedSpeeds = getSelectedCheckboxValues(".speed");

  const { minAC, maxAC } = getACSliderRange();

  const monsterAC = Number(monster.ac);
  const monsterCRIndex = crToIndex(monster.cr);
  const { minIndex, maxIndex } = getCRSliderRange();

  if (Number.isFinite(monsterAC) && (monsterAC < minAC || monsterAC > maxAC)) {
    return false;
  }

  if (monsterCRIndex === -1 || monsterCRIndex < minIndex || monsterCRIndex > maxIndex) {
    return false;
  }

  if (selectedSizes.length > 0 && !selectedSizes.includes(monster.size)) {
    return false;
  }

  // Filter by filtertype, but final output displays displaytype.
  if (selectedTypes.length > 0 && !selectedTypes.includes(monster.filtertype)) {
    return false;
  }

  if (selectedAlignments.length > 0 && !selectedAlignments.includes(monster.alignment)) {
    return false;
  }

  if (selectedBiomes.length > 0 && !selectedBiomes.includes(monster.biome)) {
    return false;
  }

  if (!monsterHasSelectedSpeed(monster, selectedSpeeds)) {
    return false;
  }

  return true;
}

// =====================================================
// Monster Selection
// =====================================================

function getClosestAvailableCR(targetCR, availableMonsters) {
  const targetIndex = crToIndex(targetCR);

  if (targetIndex === -1 || availableMonsters.length === 0) {
    return null;
  }

  const availableCRs = [...new Set(
    availableMonsters
      .map(monster => normalizeCR(monster.cr))
      .filter(cr => crToIndex(cr) !== -1)
  )];

  availableCRs.sort((a, b) => {
    return Math.abs(crToIndex(a) - targetIndex) - Math.abs(crToIndex(b) - targetIndex);
  });

  return availableCRs[0] ?? null;
}

function selectMonsterByCR(targetCR) {
  const filteredMonsters = RandomMonsterTable.filter(monsterPassesOptionalFilters);

  if (filteredMonsters.length === 0) {
    return {
      monster: null,
      actualCR: null,
      exactMatch: false,
      filteredCount: 0
    };
  }

  let matchingMonsters = filteredMonsters.filter(monster => {
    return normalizeCR(monster.cr) === normalizeCR(targetCR);
  });

  let exactMatch = true;
  let actualCR = targetCR;

  // If no exact CR match exists after filters, choose closest available CR.
  if (matchingMonsters.length === 0) {
    exactMatch = false;
    actualCR = getClosestAvailableCR(targetCR, filteredMonsters);

    matchingMonsters = filteredMonsters.filter(monster => {
      return normalizeCR(monster.cr) === normalizeCR(actualCR);
    });
  }

  return {
    monster: getRandomArrayItem(matchingMonsters),
    actualCR,
    exactMatch,
    filteredCount: filteredMonsters.length
  };
}

// =====================================================
// Hit Point Rolling + Heal/Damage Controls
// =====================================================

const activeMonsterHP = {};

function rollDice(count, sides) {
  let total = 0;

  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }

  return total;
}

function rollHitPoints(hitpointText) {
  const text = String(hitpointText ?? "");

  // Examples:
  // "150 (20d10 + 40)"
  // "14 (4d6)"
  // "33 (6d8 + 6)"
  const match = text.match(/\((\d+)d(\d+)\s*([+-]\s*\d+)?\)/i);

  if (!match) {
    const flatNumber = parseInt(text, 10);
    return Number.isFinite(flatNumber) ? flatNumber : 1;
  }

  const diceCount = Number(match[1]);
  const diceSides = Number(match[2]);
  const modifier = match[3] ? Number(match[3].replace(/\s/g, "")) : 0;

  return Math.max(1, rollDice(diceCount, diceSides) + modifier);
}

function changeMonsterHP(instanceId, mode) {
  const input = document.getElementById(`${instanceId}-hp-input`);
  const display = document.getElementById(`${instanceId}-hp-display`);

  if (!input || !display || activeMonsterHP[instanceId] === undefined) return;

  const amount = Math.max(0, Number(input.value || 0));

  if (mode === "heal") {
    activeMonsterHP[instanceId] += amount;
  }

  if (mode === "damage") {
    activeMonsterHP[instanceId] = Math.max(0, activeMonsterHP[instanceId] - amount);
  }

  display.textContent = activeMonsterHP[instanceId];
  input.value = "";
}

function createHPControls(monster, instanceId, label = "") {
  const rolledHP = rollHitPoints(monster.hitpoints);
  activeMonsterHP[instanceId] = rolledHP;

  const hpFormula = getHPFormulaDisplay(monster.hitpoints);

  return `
    <div class="monster-hp-controls mt-2 mb-3 flex flex-wrap items-center gap-2">
      ${label ? `<span class="font-bold">${label}</span>` : ""}
      <span>Hit Points</span>
      <span id="${instanceId}-hp-display" class="font-bold">${rolledHP}</span>
      <span class="text-sm text-gray-700">${hpFormula}</span>

      <input
        id="${instanceId}-hp-input"
        type="number"
        min="0"
        value=""
        placeholder="0"
        class="w-20 px-2 py-1 border rounded text-black"
      />

      <button
        type="button"
        onclick="changeMonsterHP('${instanceId}', 'heal')"
        class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
        Heal
      </button>

      <button
        type="button"
        onclick="changeMonsterHP('${instanceId}', 'damage')"
        class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
        Damage
      </button>
    </div>
  `;
}

function getHPFormulaDisplay(hitpointText) {
  const text = String(hitpointText ?? "").trim();

  // Turns "33 (6d8 + 6)" into "(6d8+6)"
  const formulaMatch = text.match(/\(([^)]+)\)/);

  if (formulaMatch) {
    return `(${formulaMatch[1].replace(/\s+/g, "")})`;
  }

  // Fallback: if no dice formula exists, show the flat HP number only.
  const flatHP = parseInt(text, 10);
  return Number.isFinite(flatHP) ? String(flatHP) : "";
}

// =====================================================
// Stat Block Formatting
// =====================================================

function buildSavingThrows(monster) {
  const saves = [
    { label: "STR", mod: monster.strmod, save: monster.strsave },
    { label: "DEX", mod: monster.dexmod, save: monster.dexsave },
    { label: "CON", mod: monster.conmod, save: monster.consave },
    { label: "INT", mod: monster.intmod, save: monster.intsave },
    { label: "WIS", mod: monster.wismod, save: monster.wissave },
    { label: "CHA", mod: monster.chamod, save: monster.chasave }
  ];

  const differentSaves = saves.filter(entry => {
    return Number(entry.save) !== Number(entry.mod);
  });

  if (differentSaves.length === 0) return "";

  return `
    <p><strong>Saving Throws</strong> ${
      differentSaves
        .map(entry => `${entry.label} ${formatModifier(entry.save)}`)
        .join(", ")
    }</p>
  `;
}

function buildOptionalLine(label, value) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return "";
  }

  return `<p><strong>${label}</strong> ${value}</p>`;
}

function buildSection(title, html) {
  if (!html || String(html).trim() === "") return "";

  return `
    <h3 class="monster-section-title">${title}</h3>
    <div class="monster-section-body">
      ${html}
    </div>
  `;
}

function buildAbilityBlock(monster) {
  return `
    <div class="monster-abilities">
      <div><strong>STR</strong><br>${monster.str} (${formatModifier(monster.strmod)})</div>
      <div><strong>DEX</strong><br>${monster.dex} (${formatModifier(monster.dexmod)})</div>
      <div><strong>CON</strong><br>${monster.con} (${formatModifier(monster.conmod)})</div>
      <div><strong>INT</strong><br>${monster.int} (${formatModifier(monster.intmod)})</div>
      <div><strong>WIS</strong><br>${monster.wis} (${formatModifier(monster.wismod)})</div>
      <div><strong>CHA</strong><br>${monster.cha} (${formatModifier(monster.chamod)})</div>
    </div>
  `;
}

function buildStatBlock(monster, processText, monsterCount) {
  const instanceId = `monster-${Date.now()}-1`;

  return `
    <style>
      .monster-stat-block {
        max-width: 980px;
        margin: 0 auto;
        color: #3a1600;
        font-family: Georgia, "Times New Roman", serif;
        line-height: 1.35;
      }

      .monster-top-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      @media (min-width: 900px) {
        .monster-top-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      .monster-name {
        color: #8b1e13;
        font-size: 2rem;
        font-weight: 800;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 0.1rem;
      }

      .monster-subtitle {
        font-style: italic;
        margin-bottom: 1rem;
      }

      .monster-red-line {
        border-top: 2px solid #9f2b20;
        margin: 0.75rem 0;
      }

      .monster-abilities {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        text-align: center;
        color: #9f2b20;
        border-top: 2px solid #9f2b20;
        border-bottom: 2px solid #9f2b20;
        padding: 0.5rem 0;
        margin: 0.75rem 0;
        gap: 0.25rem;
      }

      .monster-section-title {
        color: #9f2b20;
        font-size: 1.5rem;
        border-bottom: 2px solid #9f2b20;
        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
        padding-bottom: 0.25rem;
      }

      .monster-section-body b,
      .monster-section-body strong {
        font-style: italic;
        color: #111;
      }

      .monster-name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.monster-info-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.monster-info-button {
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 999px;
  border: 1px solid #8b1e13;
  background: rgba(255, 255, 255, 0.55);
  color: #8b1e13;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1;
  cursor: help;
}

.monster-info-bubble {
  display: none;
  position: absolute;
  z-index: 50;
  top: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: min(420px, 80vw);
  background: #fff8df;
  border: 2px solid #8b1e13;
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  padding: 0.75rem;
  color: #111;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  line-height: 1.35;
  text-transform: none;
  letter-spacing: normal;
}

.monster-info-wrapper:hover .monster-info-bubble,
.monster-info-wrapper:focus-within .monster-info-bubble {
  display: block;
}

@media (max-width: 640px) {
  .monster-info-bubble {
    left: auto;
    right: 0;
    transform: none;
    width: min(340px, 85vw);
  }
}

      .monster-extra-card {
        border-top: 2px solid #9f2b20;
        margin-top: 1rem;
        padding-top: 0.75rem;
      }
    </style>

<div class="monster-stat-block">
  <div class="monster-top-grid">
    <div>
      <div class="monster-name-row">
        <h2 class="monster-name">${monster.name}</h2>

        <div class="monster-info-wrapper">
          <button type="button" class="monster-info-button" aria-label="Selection process">
            ?
          </button>

          <div class="monster-info-bubble">
            <strong>Selection Process:</strong><br>
            ${processText}
          </div>
        </div>
      </div>
          <p class="monster-subtitle">
            ${monster.size} ${monster.displaytype}, ${monster.alignment}
          </p>

          <div class="monster-red-line"></div>

          <p><strong>Armor Class</strong> ${monster.ac}</p>
          ${createHPControls(monster, instanceId)}
          <p><strong>Speed</strong> ${monster.speed}</p>

          <div class="monster-red-line"></div>

          ${buildAbilityBlock(monster)}

          ${buildSavingThrows(monster)}
          ${buildOptionalLine("Skills", monster.skills)}
          ${buildOptionalLine("Damage Vulnerabilities", monster.vulnerabilities)}
          ${buildOptionalLine("Damage Resistances", monster.resistances)}
          ${buildOptionalLine("Damage Immunities", monster.immunitydmg)}
          ${buildOptionalLine("Condition Immunities", monster.immunitycnd)}
          ${buildOptionalLine("Gear", monster.gear)}
          ${buildOptionalLine("Senses", monster.senses)}
          ${buildOptionalLine("Languages", monster.languages)}
          <p><strong>Challenge</strong> ${normalizeCR(monster.cr)} ${monster.exp || ""}</p>
          <p><strong>Proficiency Bonus</strong> ${formatModifier(monster.proficiency)}</p>
        </div>

        <div>
          ${buildSection("Traits", monster.traits)}
          ${buildSection("Actions", monster.actions)}
          ${buildSection("Bonus Actions", monster.bonusactions)}
          ${buildSection("Reactions", monster.reactions)}
          ${buildSection("Legendary Actions", monster.legendaryactions)}
        </div>
      </div>

      ${buildAdditionalMonsterHPBlocks(monster, monsterCount)}
    </div>
  `;
}

function buildAdditionalMonsterHPBlocks(monster, monsterCount) {
  if (monsterCount <= 1) return "";

  let html = `
    <div class="monster-extra-card">
      <h3 class="monster-section-title">Additional Monsters</h3>
  `;

  for (let i = 2; i <= monsterCount; i++) {
    const instanceId = `monster-${Date.now()}-${i}`;

    html += `
      <div class="mb-3">
        <p class="font-bold">${monster.name} #${i}</p>
        ${createHPControls(monster, instanceId)}
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

// =====================================================
// Main Generate Function
// =====================================================

function generateMonster() {
  const resultBox = document.getElementById("result");

  if (!resultBox) {
    console.warn("No #result element found.");
    return;
  }

  const playerLevel = Number(document.getElementById("plevel")?.value ?? 1);
  const playerCount = Number(document.getElementById("pCount")?.value ?? 1);
  const monsterCount = Number(document.getElementById("monsterCount")?.value ?? 1);

  const { minCR, maxCR } = getCRSliderRange();
  const { minAC, maxAC } = getACSliderRange();

  const difficultyResult = getSelectedDifficulty();
  const difficulty = difficultyResult.difficulty;

  const recommendedCR = getRecommendedMonsterCR(playerLevel, playerCount, difficulty);

  if (!recommendedCR) {
    resultBox.innerHTML = `
      <p class="text-red-700 font-bold">
        Could not determine a recommended CR. Check player level, player count, and difficulty.
      </p>
    `;
    return;
  }

  const sliderClampedCR = clampCRToSliderRange(recommendedCR, minCR, maxCR);
  const finalTargetCR = getAdjustedMonsterCR(sliderClampedCR, monsterCount);

  const selection = selectMonsterByCR(finalTargetCR);

  if (!selection.monster) {
    resultBox.innerHTML = `
      <p class="text-red-700 font-bold">No monster found.</p>
      <p>
        Try widening your CR range, AC range, or removing one or more filters.
      </p>
    `;
    return;
  }

  const countAdjustment = getCRAdjustmentForMonsterCount(monsterCount);

  const processText = `
    Player Level: <strong>${playerLevel}</strong> |
    Player Count: <strong>${playerCount}</strong> |
    Monster Count: <strong>${monsterCount}</strong><br>

    ${difficultyResult.source}<br>

    Difficulty Table Result:
    <strong>${capitalizeFirstLetter(difficulty)}</strong> difficulty recommends
    <strong>CR ${recommendedCR}</strong> for this party size and level.<br>

    CR Slider Range:
    <strong>${minCR}</strong> to <strong>${maxCR}</strong>.
    ${
      normalizeCR(recommendedCR) !== normalizeCR(sliderClampedCR)
        ? `The recommended CR was outside the slider range, so it was clamped to <strong>CR ${sliderClampedCR}</strong>.`
        : `The recommended CR was within the slider range, so it stayed at <strong>CR ${sliderClampedCR}</strong>.`
    }<br>

    Monster Count Adjustment:
    <strong>${monsterCount}</strong> monster(s) applies a
    <strong>-${countAdjustment} CR step</strong> adjustment, making the target monster CR
    <strong>${finalTargetCR}</strong>.<br>

    Filters Applied:
    AC <strong>${minAC}-${maxAC}</strong>, plus any selected size, type, alignment, biome, and speed filters.<br>

    Final Selection:
    ${
      selection.exactMatch
        ? `An exact filtered match was found at <strong>CR ${selection.actualCR}</strong>.`
        : `No exact filtered match was found at CR ${finalTargetCR}, so the closest available filtered CR was used: <strong>CR ${selection.actualCR}</strong>.`
    }
  `;

  resultBox.innerHTML = buildStatBlock(selection.monster, processText, monsterCount);
}

function capitalizeFirstLetter(text) {
  const value = String(text ?? "");
  return value.charAt(0).toUpperCase() + value.slice(1);
}
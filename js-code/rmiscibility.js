const MiscibilityTable = [
 { id: 1, effectname: "Arcane Detonation", weight: 1, effect: "Both potions lose their effects, and the mixture creates a magical explosion in a 5-foot-radius Sphere centered on itself. Each creature in that area takes 4d10 Force damage." },
{ id: 2, effectname: "Toxic Transmutation", weight: 5, effect: "Both potions lose their effects, and the mixture becomes an ingested poison of your choice (see “Poison”)." },
{ id: 3, effectname: "Magical Collapse", weight: 5, effect: "Both potions lose their effects." },
{ id: 4, effectname: "Partial Rejection", weight: 5, effect: "One potion loses its effect." },
{ id: 5, effectname: "Diluted Fusion", weight: 5, effect: "Both potions work, but with their numerical effects and durations halved. If a potion has no numerical effect and no duration, it instead loses its effect." },
{ id: 6, effectname: "Stable Combination", weight: 5, effect: "Both potions work normally." },
{ id: 7, effectname: "Empowered Resonance", weight: 5, effect: "Both potions work, but the numerical effects and duration of one potion are doubled. If neither potion has anything to double in this way, they work normally." },
{ id: 8, effectname: "Permanent Alteration", weight: 1, effect: "Only one potion works, but its effects are permanent. Choose the simplest effect to make permanent or the one that seems the most fun. For example, a Potion of Healing might increase the drinker’s Hit Point maximum by 2d4 + 2, or a Potion of Invisibility might give the drinker the Invisible condition indefinitely. At your discretion, a Dispel Magic spell or similar magic might end this lasting effect." },
{ id: 9, effectname: "Delayed Reaction", weight: 5, effect: "Both potions appear to do nothing at first. After 1d4 rounds, both effects activate at the same time." },
{ id: 10, effectname: "Wild Surge", weight: 5, effect: "Both potions work, but unstable magic erupts from the drinker. Roll once on a Wild Magic Surge table, or create a minor magical side effect." },
{ id: 11, effectname: "Reversed Effect", weight: 5, effect: "One potion works normally. The other produces an opposite or twisted version of its intended effect." },
{ id: 12, effectname: "Shared Effect", weight: 5, effect: "Both potion effects activate, but they also affect one additional random creature within 10 feet of the drinker." },
{ id: 13, effectname: "Overload", weight: 5, effect: "Both potions work normally, but the drinker takes 2d10 Force damage as their body struggles to contain the magic." },
{ id: 14, effectname: "Unstable Duration", weight: 5, effect: "Both potions work, but each duration is randomly altered. Roll a d4 for each: 1 = half duration, 2 = normal duration, 3 = double duration, 4 = ends at the end of the drinker’s next turn." },
{ id: 15, effectname: "Alchemical Mutation", weight: 5, effect: "One potion works normally, and the drinker gains a temporary physical mutation for the potion’s duration or for 1 hour, whichever is shorter." },

];

let lastMiscibilityEffectId = null;

function getRandomMiscibilityEffect() {
  // Remove the last selected effect so it cannot be chosen twice in a row
  let availableEffects = MiscibilityTable.filter(item => item.id !== lastMiscibilityEffectId);

  // Safety fallback in case the table only has one item
  if (availableEffects.length === 0) {
    availableEffects = MiscibilityTable;
  }

  const totalWeight = availableEffects.reduce((sum, item) => {
    return sum + item.weight;
  }, 0);

  let roll = Math.random() * totalWeight;

  for (const item of availableEffects) {
    roll -= item.weight;

    if (roll <= 0) {
      lastMiscibilityEffectId = item.id;
      return item;
    }
  }

  const fallback = availableEffects[availableEffects.length - 1];
  lastMiscibilityEffectId = fallback.id;
  return fallback;
}

function generateMiscibilityEffect() {
  const resultDiv = document.getElementById("result");

  if (!resultDiv) {
    console.error("Result box not found.");
    return;
  }

  resultDiv.innerHTML = "";

  const placeholder = document.getElementById("placeholder-text");
  if (placeholder) placeholder.remove();

  const miscibilityResult = getRandomMiscibilityEffect();

  const outputBox = document.createElement("div");
  outputBox.classList.add("output-box", "item-result");

outputBox.innerHTML = `
  <div class="miscibility-result">
    <span class="miscibility-name">${miscibilityResult.effectname}</span>

    <span class="miscibility-label">
      Potion Miscibility
    </span>

    <span class="miscibility-effect">
      ${miscibilityResult.effect}
    </span>
  </div>
`;

  resultDiv.appendChild(outputBox);
}

document.addEventListener("DOMContentLoaded", () => {
  const miscibilityButton = document.getElementById("MiscibilityButton");

  if (!miscibilityButton) {
    console.error("MiscibilityButton not found.");
    return;
  }

  miscibilityButton.addEventListener("click", generateMiscibilityEffect);
});

window.generateMiscibilityEffect = generateMiscibilityEffect;

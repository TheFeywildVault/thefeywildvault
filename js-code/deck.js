const deckofmanything = [        
{ id: 1, name: "Balance", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "You can increase one of your ability scores by 2, to a maximum of 22, provided you also decrease another one of your ability scores by 2. You can’t decrease an ability that has a score of 5 or lower. Alternatively, you can choose not to adjust your ability scores, in which case this card has no effect."},
{ id: 2, name: "Comet", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "The next time you enter combat against one or more Hostile creatures, you can select one of them as your foe when you roll Initiative. If you reduce your foe to 0 Hit Points during that combat, you have Advantage on Death Saving Throws for 1 year. If someone else reduces your chosen foe to 0 Hit Points or you don’t choose a foe, this card has no effect."},
{ id: 3, name: "Donjon", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you’re wearing and carrying disappears with you except for Artifacts, which stay behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can’t be located by any Divination magic, but a <b><i>Wish</i></b> spell can reveal the location of your prison. You draw no more cards."},
{ id: 4, name: "Euryale", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "The card’s medusa-like visage curses you. You take a −2 penalty to saving throws while cursed in this way. Only a god or the magic of the Fates card can end this curse."},
{ id: 5, name: "Fates", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "Reality’s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card’s magic as soon as you draw the card or at any other time before you die."},
{ id: 6, name: "Flames", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "A powerful devil becomes your enemy. The devil seeks your ruin and torments you, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies."},
{ id: 7, name: "Fool", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "No", effect: "You have Disadvantage on D20 Tests for the next 72 hours. Draw another card; this draw doesn’t count as one of your declared draws."},
{ id: 8, name: "Gem", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "Twenty-five pieces of jewelry worth 2,000 GP each or fifty gems worth 1,000 GP each appear at your feet."},
{ id: 9, name: "Jester", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "No", effect: "You have Advantage on D20 Tests for the next 72 hours, or you can draw two additional cards beyond your declared draws."},
{ id: 10, name: "Key", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "A Rare or rarer magic weapon with which you are proficient appears on your person. The DM chooses the weapon"},
{ id: 11, name: "Knight", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "You gain the service of a Knight, who magically appears in an unoccupied space you choose within 30 feet of yourself. The knight has the same alignment as you and serves you loyally until death, believing the two of you have been drawn together by fate. Work with your DM to create a name and backstory for this NPC. The DM can use a different stat block to represent the knight, as desired."},
{ id: 12, name: "Moon", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "You gain the ability to cast <b><i>Wish</i></b> 1d3 times."},
{ id: 13, name: "Puzzle", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "Permanently reduce your Intelligence or Wisdom by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws."},
{ id: 14, name: "Rogue", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "An NPC of the DM’s choice becomes Hostile toward you. You don’t know the identity of this NPC until they or someone else reveals it. Nothing less than a <b><i>Wish</i></b> spell or divine intervention can end the NPC’s hostility toward you."},
{ id: 15, name: "Ruin", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. If you have a Bastion (see the Dungeon Master’s Guide), it is destroyed by some calamity beyond your control. Any documentation that proves you should own something lost to this card also disappears."},
{ id: 16, name: "Sage", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question."},
{ id: 17, name: "Skull", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "An Avatar of Death appears in an unoccupied space as close to you as possible. The avatar targets only you with its attacks, appearing as a ghostly skeleton clad in a tattered black robe and carrying a spectral scythe. The avatar disappears when it drops to 0 Hit Points or you die. If an ally of yours deals damage to the avatar, that ally summons another Avatar of Death. The new avatar appears in an unoccupied space as close to that ally as possible and targets only that ally with its attacks. You and your allies can each summon only one avatar as a consequence of this draw. A creature slain by an avatar can’t be restored to life."},
{ id: 18, name: "Star", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "Increase one of your ability scores by 2, to a maximum of 24."},
{ id: 19, name: "Sun", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "A magic item (chosen by the DM) appears on your person. In addition, you gain 10 Temporary Hit Points daily at dawn until you die."},
{ id: 20, name: "Talons", deck13: "No", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "Every magic item you wear or carry disintegrates. Artifacts in your possession vanish instead."},
{ id: 21, name: "Throne", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "You gain proficiency and Expertise in your choice of History, Insight, Intimidation, or Persuasion. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently home to one or more monsters, which must be cleared out before you can claim the keep as yours."},
{ id: 22, name: "Void", deck13: "Yes", deck22: "Yes", deck66: "Yes", reshuffle: "Yes", effect: "Your soul is drawn from your body and contained in an object in a place of the DM’s choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is inert, ceases aging, and requires no food, air, or water. A <b><i>Wish</i></b> spell can’t return your soul to your body, but the spell reveals the location of the object that holds your soul. You draw no more cards."},
{ id: 23, name: "Aberration", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain telepathy within a range of 90 feet."},
{ id: 24, name: "Beast", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You immediately transform into a random Beast with a CR of 5 or lower. Your game statistics—including your ability scores, hit points, and possible actions—are replaced by the Beast’s game statistics, and any nonmagical equipment you’re wearing or carrying melds into your new form and can’t be used. Any magic items you’re carrying drop in an unoccupied space within 5 feet of your new form. You remain transformed in this way for 2d12 days; nothing can alter your form while you’re under the effects of this card, but the <b><i>Wish</i></b> spell can end the transformation early. When you revert to your normal form, you return to the same state you were in when you initially transformed."},
{ id: 25, name: "Book", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain the ability to speak, read, and write 1d6 + 2 languages of your choice."},
{ id: 26, name: "Bridge", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain the ability to cast the <b><i>Time Stop</i></b> spell 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."},
{ id: 27, name: "Campfire", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You immediately gain the benefits of finishing a long rest."},
{ id: 28, name: "Cavern", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain a climbing speed equal to your walking speed. You also gain the ability to move up, down, across vertical surfaces, and along ceilings, while leaving your hands free."},
{ id: 29, name: "Celestial", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You sprout a pair of softly luminescent, feathered wings from your back and gain a flying speed of 30 feet."},
{ id: 30, name: "Construct", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A homunculus appears in an unoccupied space within 5 feet of you. The appearance of the homunculus is determined by the DM, and the homunculus treats you as its creator."},
{ id: 31, name: "Corpse", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You immediately drop to 0 hit points, have the unconscious condition, and must begin making death saving throws. Spells and other magical effects that restore hit points have no effect on you until you are stabilized. If you fail three death saving throws, you die and can be resurrected only by the <b><i>Wish</i></b> spell."},
{ id: 32, name: "Crossroads", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Roll a d20. If the roll is even, you age 1d10 years. If the roll is odd, you become younger by 1d10 years, to a minimum of 1 year. This effect can be undone only by the <b><i>Wish</i></b> spell, divine intervention, or similar magic."},
{ id: 33, name: "Door", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain the ability to cast the <b><i>Gate</i></b> spell 1d4 times, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."},
{ id: 34, name: "Dragon", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A dragon egg appears at your feet and immediately hatches into a dragon wyrmling. The type of dragon is chosen by the DM. The wyrmling views you as its parent and is staunchly loyal to you and your allies."},
{ id: 35, name: "Elemental", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You become immune to one of the following damage types (choose immediately upon drawing this card): acid, cold, fire, lightning, or thunder."},
{ id: 36, name: "Expert", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your Dexterity score increases by 2, to a maximum of 22."},
{ id: 37, name: "Fey", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A fey crossing opens into the Feywild, and you’re immediately pulled through it, disappearing in a flash of rainbow-colored light. You draw no more cards. The fey crossing appears as a shimmering fractal of light above the deck, and it remains open for 1 minute after the card is drawn. The precise location in the Feywild to which the fey crossing leads is determined by the DM."},
{ id: 38, name: "Fiend", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A powerful Fiend appears in a nearby unoccupied space and offers you a deal. The precise nature of this deal is up to the DM, but usually the Fiend offers some material reward in exchange for you and your allies completing a task for the Fiend. The Fiend is indifferent to you and can be bargained with; it keeps its side of any bargain it makes, though it might twist the wording of any agreement to suit its purposes. If attacked, or if negotiations fail and you refuse the Fiend’s offer, it returns to its home plane."},
{ id: 39, name: "Giant", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You immediately grow 2d10 inches in height, and your hit point maximum and current hit points both increase by 20."},
{ id: 40, name: "Humanoid", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You can immediately choose to stop drawing from the deck, regardless of how many cards you initially declared."},
{ id: 41, name: "Lance", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "All your ability scores increase by 1, to a maximum of 20."},
{ id: 42, name: "Mage", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your Intelligence score increases by 2, to a maximum of 22."},
{ id: 43, name: "Map", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "At any time you choose within 1 year of drawing this card, you can mentally name or describe an object or individual that is familiar to you. You immediately know the location of the object or individual, as well as the distance between you and the object or individual, even if the object or individual is on a different plane of existence. If you named an individual, you know if they are alive and any conditions they have. If you named an object, you know if it is broken or not. If you named a magic item that has charges, you know how many charges it has remaining."},
{ id: 44, name: "Maze", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain 1d3 levels of exhaustion."},
{ id: 45, name: "Mine", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A pile of 2d6 gems (each worth 5,000 gp) and 1d10 chunks of precious ore (each worth 2,500 gp) appears at your feet."},
{ id: 46, name: "Monstrosity", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A Large or larger Monstrosity with a challenge rating of 10 or less (chosen by the DM) appears in an unoccupied space within 15 feet of you. The creature is hostile toward you and attacks immediately. The creature disappears when it is killed or when you are reduced to 0 hit points. If there isn’t enough space for a Large or larger creature to appear, this card has no effect."},
{ id: 47, name: "Ooze", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A gelatinous cube immediately appears in your space and engulfs you. The gelatinous cube is hostile and remains until it is destroyed. If there isn’t enough space for the gelatinous cube to appear, this card has no effect."},
{ id: 48, name: "Path", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your walking speed increases by 10 feet."},
{ id: 49, name: "Pit", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A pit opens beneath you. You plummet 3d6 × 10 feet, take damage from the fall, and have the prone condition."},
{ id: 50, name: "Plant", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain the ability to cast <b><i>Speak with Plants</i></b> without using a spell slot; you must finish a long rest before you can cast it this way again. If you have spell slots of 3rd level or higher, you can cast this spell using them. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."},
{ id: 51, name: "Priest", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your Wisdom score increases by 2, to a maximum of 22."},
{ id: 52, name: "Prisoner", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Glowing chains made of magical force appear and wrap around you. You have the restrained condition until the chains are destroyed or you are freed. While you have this condition, you can’t cast spells, and any magic items you’re wearing or carrying have their properties suppressed. You draw no more cards. The chains are immune to damage and can’t be dispelled using the <b><i>Dispel Magic</i></b> spell or similar magic. However, a <b><i>Disintegrate</i></b> spell destroys the chains instantly, freeing you. Another creature can also free you by succeeding on a DC 30 Dexterity check using thieves’ tools."},
{ id: 53, name: "Ring", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A rare or rarer magic ring appears on your finger. If you have the attunement slots available, you’re automatically attuned to the ring when it appears. The DM chooses the ring."},
{ id: 54, name: "Shield", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A rare or rarer suit of magic armor that you are proficient with appears in your hands. The DM chooses the armor. If you lack proficiency with any armor, your base AC instead now equals 12 + your Dexterity modifier while you aren’t wearing armor."},
{ id: 55, name: "Ship", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You gain proficiency in three skills chosen by the DM."},
{ id: 56, name: "Staff", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A rare or rarer magic rod, staff, or wand appears in your hands. The DM chooses the item."},
{ id: 57, name: "Stairway", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You can choose to either decrease your number of declared draws by two or receive a rare or rarer wondrous item, which appears in your hands. The DM chooses the item."},
{ id: 58, name: "Statue", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You immediately have the petrified condition as your body is transformed into marble. The petrification lasts until you are freed with the <b><i>Greater Restoration</i></b> spell or similar magic."},
{ id: 59, name: "Tavern", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your Charisma score increases by 2 to a maximum of 22."},
{ id: 60, name: "Temple", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "A deity or entity of similar power becomes bound to aid you. At any point in time between drawing the card and when you die, you can use your action to call on this entity for divine intervention, and the entity is bound to answer. The parameters and nature of this intervention are chosen by the DM. If you die without having used this intervention, the deity fulfills its obligation by casting the <b><i>Resurrection</i></b> spell on you. Once the entity has answered your call for divine intervention or resurrected you, the entity is no longer bound to aid you."},
{ id: 61, name: "Tomb", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "At any time you choose within 1 year of drawing this card, you can cast the <b><i>True Resurrection</i></b> spell once without expending a spell slot or requiring material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice)."},
{ id: 62, name: "Tower", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Draw two additional cards beyond your declared number of draws. The magic of these cards doesn’t immediately take effect; instead, choose one of the two additional cards to keep, returning the other to the deck. The magic of the card you keep takes effect immediately thereafter."},
{ id: 63, name: "Tree", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your skin immediately becomes rough, like tree bark. Your base AC now equals 15 + your Dexterity modifier while you aren’t wearing armor, but you have vulnerability to fire damage. This transformation can be undone only by the <b><i>Wish</i></b> spell, divine intervention, or similar magic."},
{ id: 64, name: "Undead", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Somewhere on the Material Plane, a revenant rises. This revenant blames you for its existence and relentlessly hunts you to exact its revenge. The revenant exists until either 1 year passes, the revenant kills you, or you use a <b><i>Wish</i></b> spell to banish it permanently to the afterlife."},
{ id: 65, name: "Warrior", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "Your Strength score increases by 2 to a maximum of 22."},
{ id: 66, name: "Well", deck13: "No", deck22: "No", deck66: "Yes", reshuffle: "Yes", effect: "You learn three cantrips of your choice from any spell list."},

  ];

let fullDrawHistory = [];
let pendingDraws = [];
let currentDrawIndex = 0;
let nonReshuffleDrawn = new Set();
let effectTally = [];

// ---------- helpers ----------
const getCardName = (x) => (x && (x.cardName || x.name)) || "";
const lookupEffect = (name) => {
  if (!name || !Array.isArray(window.deckofmanything)) return "";
  const found = deckofmanything.find(c => c.name === name);
  return found ? found.effect : "";
};

// ---------- compute effectTally ----------
function computeEffectTally() {
  const grouped = {};
  fullDrawHistory.forEach(card => {
    const name = card.cardName || getCardName(card);
    const effect = card.effect || lookupEffect(name);
    if (!name) return;
    if (!grouped[name]) grouped[name] = { name, effect, count: 0 };
    grouped[name].count++;
  });
  effectTally = Object.values(grouped);
}

// ---------- update UI ----------
function updateTally() {
  computeEffectTally();
  const tallyContainer = document.getElementById("effectTally");
  const tallyContent = document.getElementById("tallyContent");

  if (!effectTally.length) {
    tallyContainer.classList.add("hidden");
    tallyContent.innerHTML = "";
    return;
  }

  tallyContainer.classList.remove("hidden");
  tallyContent.innerHTML = effectTally
    .map(card => `<b>${card.name}</b> × ${card.count} – ${card.effect}`)
    .join("<br>");
}

// ---------- core flow ----------
function generatefate() {
  const deckSize = document.getElementById("decksizeDropdown").value;
  const drawCountStr = document.getElementById("drawDropdown").value;
  const placeholder = document.getElementById("placeholder-text");
  const resultBox = document.getElementById("deckResult");

  if (!deckSize || !drawCountStr) {
    alert("Please select both a deck size and draw count.");
    return;
  }

  const drawCount = parseInt(drawCountStr, 10);
  if (isNaN(drawCount) || drawCount < 1) return;

  resultBox.innerHTML = `
    <p id="drawCounter" class="text-sm text-gray-600 dark:text-gray-400 mb-2">
      Draws Remaining: <span id="drawsRemaining">${drawCount}</span>
    </p>
  `;
  placeholder?.classList.add("hidden");

  let eligibleDeck = deckofmanything.filter(card => {
    const isInDeck =
      (deckSize === "13 Cards" && card.deck13 === "Yes") ||
      (deckSize === "22 Cards" && card.deck22 === "Yes") ||
      (deckSize === "66 Cards" && card.deck66 === "Yes");
    return isInDeck && !(card.reshuffle === "No" && nonReshuffleDrawn.has(card.id));
  });

  if (!eligibleDeck.length) {
    alert("No more available cards to draw. Please reset the deck.");
    return;
  }

  pendingDraws = [];
  const drawsToMake = Math.min(drawCount, eligibleDeck.length);
  for (let i = 0; i < drawsToMake; i++) {
    const randIndex = Math.floor(Math.random() * eligibleDeck.length);
    pendingDraws.push(eligibleDeck.splice(randIndex, 1)[0]);
  }

  currentDrawIndex = 0;
  drawNextCard();

  const drawNextButton = document.getElementById("drawNextButton");
  const mainDrawButton = document.getElementById("generateFateButton");
  drawNextButton.classList.toggle("hidden", pendingDraws.length <= 1);
  if (pendingDraws.length > 1) mainDrawButton.classList.add("hidden");
}

function drawNextCard() {
  if (currentDrawIndex >= pendingDraws.length) {
    document.getElementById("drawNextButton").classList.add("hidden");
    return;
  }

  const card = pendingDraws[currentDrawIndex];
  const resultBox = document.getElementById("deckResult");

  resultBox.innerHTML = `
    <p id="drawCounter" class="text-sm text-gray-600 dark:text-gray-400 mb-2">
      Draws Remaining: <span id="drawsRemaining">${pendingDraws.length - currentDrawIndex - 1}</span>
    </p>
    <p class="font-bold">${card.name}</p>
    <p class="mb-4">${card.effect}</p>
  `;

  fullDrawHistory.push({
    cardName: card.name,
    effect: card.effect,
    deckType: card.deckType || null,
    drawnAt: new Date().toISOString()
  });

  if (card.reshuffle === "No") nonReshuffleDrawn.add(card.id);

  currentDrawIndex++;
  updateTally();
  saveDeckHistory();

  if (currentDrawIndex >= pendingDraws.length) {
    document.getElementById("drawNextButton").classList.add("hidden");
    document.getElementById("generateFateButton").classList.remove("hidden");
  }
}

// ---------- persistence ----------
let _skipPersistenceForThisSession = false;

async function saveDeckHistory() {
  if (_skipPersistenceForThisSession) return;
  try {
   const slimHistory = fullDrawHistory.map(card => {
  const name = card.cardName || getCardName(card);
  return {
    cardName: name,
    effect: card.effect || lookupEffect(name), // ✅ make sure effect is saved
    deckType: card.deckType,
    drawnAt: card.drawnAt
  };
});


    const res = await fetch('/api/deck-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ deckHistory: slimHistory })
    });

    if (res.status === 401) _skipPersistenceForThisSession = true;
  } catch (err) {
    console.error('Error saving deck history:', err);
  }
}

async function loadDeckHistory() {
  try {
    const res = await fetch('/api/deck-history', { credentials: 'include' });
    if (!res.ok) return;
    const data = await res.json();

 fullDrawHistory = Array.isArray(data.deckHistory)
  ? data.deckHistory.map(card => {
      const name = card.cardName || getCardName(card);
      return {
        cardName: name,
        effect: card.effect || lookupEffect(name),  // 🔑 fill missing effect
        deckType: card.deckType,
        drawnAt: card.drawnAt
      };
    })
  : [];

    updateTally(); // recompute effectTally from loaded history
  } catch (err) {
    console.error('Error loading deck history:', err);
  }

console.log("Loaded deckHistory:", data.deckHistory);
console.log("Rebuilt fullDrawHistory:", fullDrawHistory);

}

// ---------- controls ----------
async function clearTally() {
  fullDrawHistory = [];
  effectTally = [];
  pendingDraws = [];
  currentDrawIndex = 0;
  updateTally();

  try {
    await fetch('/api/deck-history/clear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
  } catch (err) {
    console.error(err);
  }
}

function resetDeck() {
  fullDrawHistory = [];
  effectTally = [];
  pendingDraws = [];
  currentDrawIndex = 0;
  nonReshuffleDrawn = new Set();
  updateTally();
}

// ---------- init ----------
window.addEventListener('load', loadDeckHistory);

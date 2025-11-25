const BadChaosTable = [        
    { id: 1, name: "Nightmares", duration: "Long Rest", chaoseffect: "The next time you sleep you will have horrific nightmares. When you take your next long rest, you are unable to gain any of the benefits. You are unable to regain health and your spell slots don't recharge." },
    { id: 2, name: "Chameleon", duration: "Permanent", chaoseffect: "Your {body} changes color, taking on a {color} hue. This effect is permanent but can be removed with the spell <i><b>remove curse</b></i>." },
    { id: 3, name: "Blinded", duration: "Long Rest", chaoseffect: "You are Blinded until you finish your next short or long rest." },
    { id: 4, name: "Atrophy", duration: "Long Rest", chaoseffect: "Decrease your {ability} by 2 until you finish a long rest." },
    { id: 5, name: "Wizened", duration: "Minute", chaoseffect: "You grow a long white beard 10 feet long, it grows at 1 foot per minute stopping at 10 feet." },
    { id: 6, name: "Let There Be Night", duration: "Immediate", chaoseffect: "You cast <i><b>darkness</b></i>, centered on you. Concentration isn't required and his last for the spell's duration." },
    { id: 7, name: "Flicker Away", duration: "Immediate", chaoseffect: "You teleport to the Astral plane until the end of your next turn, you return to the location where you started or the closest unoccupied space." },
    { id: 8, name: "Minimum Effort", duration: "Minute", chaoseffect: "The next spell you cast that does damage deals minimum damage. The effect ends after one minute if no spells that deals damage is cast." },
    { id: 9, name: "Mute", duration: "Long Rest", chaoseffect: "You mouth disappears, you can't speak until you finish a long rest." },
    { id: 10, name: "Reverse", duration: "Immediate", chaoseffect: "You swap places with the nearest hostile creature." },
    { id: 11, name: "Echoes of Confusion", duration: "Long Rest", chaoseffect: "You can speak but you can't understand anyone until you finish your next long rest." },
    { id: 12, name: "Buzz Head", duration: "Minute", chaoseffect: "Gnats buzz around your head for one minute, distracting you. You must make a Constitution saving throw against your own spell save DC to cast a spell." },
    { id: 13, name: "Spell Silence", duration: "Minute", chaoseffect: "Loose the ability to cast spells for one minute." },
    { id: 14, name: "Steel Boots", duration: "Long Rest", chaoseffect: "Your feet turn to steel. You automatically fail any DEX save and your speed is reduced by 15 feet until you finish a long rest." },
    { id: 15, name: "Teddy Bear", duration: "Minute", chaoseffect: "You turn into a giant teddy bear for one minute. You gain resistance to bludgeoning damage but vulnerability to slashing." },
    { id: 16, name: "Shattered Guard", duration: "Minute", chaoseffect: "For one minute, you are vulnerable to non-magical bludgeoning, piercing, and slashing damage." },
    { id: 17, name: "Eternal Flame", duration: "Minute", chaoseffect: "A small flame apears 1 inch in front of your chest for 1 minute, if the flame goes out you drop to 0 hit points." },
    { id: 18, name: "Bock Bock", duration: "Immediate", chaoseffect: "You cast <i><b>polymorph</b></i> on yourself, turning you into a chicken." },
    { id: 19, name: "Inflation", duration: "Immediate", chaoseffect: "One quarter of the highest currency you are carrying is now copper." },
    { id: 20, name: "Thing in the Ice", duration: "Minute", chaoseffect: "You become completely frozen in ice for 1 minute or until you succeed on a Strength check against your spell DC to break free." },
    { id: 21, name: "The Jitter Bug", duration: "Minute", chaoseffect: "You spontaneously start dancing for 1 minute, you immediately go to the nearest creature and start grinding vigourously." },
    { id: 22, name: "Mute", duration: "Immediate", chaoseffect: "You cast the spell <i><b>silence</b></i>, centered on you." },
    { id: 23, name: "Miniatures", duration: "Minute", chaoseffect: "All weapons within a 10 foot radius shrink in size, dealing half damage for 1 minute." },
    { id: 24, name: "Time Vortex", duration: "Immediate", chaoseffect: "You spontaneously begin changing age, randomly growing younger or older." },
    { id: 25, name: "Nature's Rebuke", duration: "Long Rest", chaoseffect: "Nature has a disdain for you. Any tree with 25 of you becomes animated and hostile towards you, this effects last until you finish a long rest. They have the same statistics as a Treant." },
    { id: 26, name: "Acidic Slime", duration: "Immediate", chaoseffect: "The closest melee weapon to you becomes covered in poisonous slime. Each turn the wielder takes 1d4 acid damage when weilding or holding the weapon." },
    { id: 27, name: "Cling to Life", duration: "Immediate", chaoseffect: "You immediately drop to 1 hit point." },
    { id: 28, name: "Miniature Might", duration: "Long Rest", chaoseffect: "Both of your arm size are reduced to half their original size until you finish a long rest. You lose the ability to use two-handed weapons and the versitile properties." },
    { id: 29, name: "Offensive Wiff", duration: "Long Rest", chaoseffect: "You are surrounded by a faint, offensive odor until you finish a long rest. You get disadvantage on all Charisma checks." },
    { id: 30, name: "Voices of Madness", duration: "Minute", chaoseffect: "For one minute, language is incomprehensible. Each round you hear a creature speak, take 1d6 psychic damage." },
    { id: 31, name: "Unseen Force", duration: "Immediate", chaoseffect: "All creatures within 60 feet of you take 2d6 force damage." },
    { id: 32, name: "Gone But Not Forgotten", duration: "Minute", chaoseffect: "For the next minute you turn invisible and are blinded." },
    { id: 33, name: "Rootbound", duration: "Minute", chaoseffect: "Your feet become rooted into the ground, you are unable to move for 1 minute." },
    { id: 34, name: "Unlucky", duration: "Long Rest", chaoseffect: "You feel unlucky. Until you finish a long rest, any time you make an ability check, roll 1d4 and subtract the result." },
    { id: 35, name: "Doppleganger", duration: "Minute", chaoseffect: "For 1 minute, a hostile duplicate of yourself appears in the nearest open space. They have the same initiative as you but may take their own actions. The have hit points equal to your current hit point total." },
    { id: 36, name: "Iron Teddy Bear", duration: "Minute", chaoseffect: "You feel invincible but powerless. Double your maximum health but half your melee attack damage for 1 minute." },
    { id: 37, name: "Shy", duration: "Long Rest", chaoseffect: "Decrease you Charisma by 2 when encountering the opposite gender during social interactions until you finish a long rest." },
    { id: 38, name: "Stumble", duration: "Immediate", chaoseffect: "You have disadvantage on the next attack, check, or save." },
    { id: 39, name: "Brittle Veil", duration: "Long Rest", chaoseffect: "Until you finish a long rest, all creatures within 60 feet of you are vulnerable to {element} damage type." },
    { id: 40, name: "Squid Legs", duration: "Minute", chaoseffect: "Your legs become tentacles, you can't walk for 1 minute but gain a swim speed equal to your walking speed." },
    { id: 41, name: "Taxes", duration: "Immediate", chaoseffect: "The God of Chaos requiries his  taxes. 5d100 gold disapears from your inventory. If you do not have that amount of gold on your person, the nearest gold in proximity to you is taken until the amount is reached." },
    { id: 42, name: "Disarming", duration: "Long Rest", chaoseffect: "Both of your arms fall off, you take no damage and they will regrow after you finish a long rest." },
    { id: 43, name: "Gills", duration: "Long Rest", chaoseffect: "You gain the ability to breath under water until you finish a long rest, growing a pair of scaly gills on your neck. You must breathe underwater once every hour or take 1d6 force damage." },
    { id: 44, name: "Fruit of the Loom", duration: "Minute", chaoseffect: "You turn into a piece of fruit for 1 minute." },
    { id: 45, name: "Time Bound", duration: "Long Rest", chaoseffect: "Lose your bonus action until you finish your next long rest." },
    { id: 46, name: "Two Left Feet", duration: "Long Rest", chaoseffect: "Until you take a long rest, you take full damage on successful DEX saves." },
    { id: 47, name: "Celebration", duration: "Minute", chaoseffect: "Fireworks go off 2 feet above your head for 1 minute. You have disadvantage on Stealth checks." },
    { id: 48, name: "Bobble Head", duration: "Minute", chaoseffect: "For 1 minute your head doubles in size. Each turn, while your head is enlarged, you must make a Strength check to keep standing. On a failed check, you fall prone. You remain prone until you succeed on a Strength check on each turn or the effect ends." },
    { id: 49, name: "Headless Horseman", duration: "Long Rest", chaoseffect: "Until your next long rest your head becomes invisible, frightening any common folk." },
    { id: 50, name: "Ears!", duration: "Trigger", chaoseffect: "You have a hunger for cooked ears, take 2d4 damage every day you havent eaten cooked ears, once you eat the ears you are no longer hungry and the curse is broken." },
    { id: 51, name: "Acidic Explosion", duration: "Minute", chaoseffect: "Any creature within 30 feet of you who is wearing armor gets a -2 penalty to their AC for 1 minute as acid burst from you." },
    { id: 52, name: "The Unskilled Laborer", duration: "Long Rest", chaoseffect: "You lose proficiency in all abilities until you finish a long rest." },
    { id: 53, name: "Cloak of Deception", duration: "Minute", chaoseffect: "Up to 6 hostile creaturse within 30 feet of you become invisible for the next minute. The invisibility on a creature ends when it attacks or casts a spells." },
    { id: 54, name: "The Meat Sweats", duration: "Long Rest", chaoseffect: "You eminate a rotting meat smell until you finish your next long rest. While you smell of rotting meat, any carnivorous beast will attack you on sight." },
    { id: 55, name: "Mortally Wounded", duration: "Long Rest", chaoseffect: "Until you finish a long rest, when you drop to to 0 hit points, you automatically fail a death save." },
    { id: 56, name: "Full Bladder", duration: "Minute", chaoseffect: "You feel the incredible urge to relive yourself. Until you do, your Strength and Intelligence are reduced by 2. If you do not relive yourself in two minutes the above effects are removed but your Charisma is reduced by 4 until you change your trousers or take a bath." },
    { id: 57, name: "Colorful Dragon Fire", duration: "Minute", chaoseffect: "An Adult {DColor} Dragon appears for one minute. It remains for the duration or until it drops to 0 hit points, vanishing into smoke." },
    { id: 58, name: "Earthquake", duration: "Immediate", chaoseffect: "Cast <i><b>earthquake</b></i> centered on yourself." },
    { id: 59, name: "Double Trouble", duration: "Immediate", chaoseffect: "Roll two times on the wild magic surge table and take both effects." },
    { id: 60, name: "Arcane Suppression", duration: "Minute", chaoseffect: "For the next minute you are unable to alter your spells with metamagic." },
    { id: 61, name: "Noodle Legs", duration: "Long Rest", chaoseffect: "Your legs begin to feel like noodles, all of the bones in your legs have disappeared. You movement speed drops to 0 until the bones regrow once you finish a long rest." },
    { id: 62, name: "Inebriated", duration: "Minute", chaoseffect: "You become intoxicated. You have disadvantage on melee and spell attacks for the next minute." },
    { id: 63, name: "Pyromaniac", duration: "Immediate", chaoseffect: "You cast <i><b>create bonfire</b></i> centered on yourself, everyone within 10 feet must succeed on a DEX saving throw or take 1d8 fire damage." },
    { id: 64, name: "Rust", duration: "Long Rest", chaoseffect: "Any armor you are wearing becomes brittle as it rapidly rusts, reducing your AC by 1 until you finish a long rest." },
    { id: 65, name: "Water to…Acid?", duration: "Trigger", chaoseffect: "The next water source you touch turns to acid." },
    { id: 66, name: "Medus", duration: "Minute", chaoseffect: "Your hair turns into tiny snakes for 1 minute, you take 1d6 damage piercing damage per turn." },
    { id: 67, name: "Phantom Legs", duration: "Minute", chaoseffect: "Your legs disapper for 1d4 minutes, your move speed is now only 5 feet per round." },
    { id: 68, name: "Redirect", duration: "Immediate", chaoseffect: "Change the target of your spell to the closest creature nearest to the original target. If the spell you cast that triggered the wild surge does not have a target, nothing happens." },
    { id: 69, name: "Enchanter's Gift", duration: "Immediate", chaoseffect: "A random rare magical item appears on the ground within 5-feet of the closest hostile creature. If there aren't any hostile creatures within sight, it appears 20 feet above you head." },
    { id: 70, name: "Phase Step", duration: "Minute", chaoseffect: "You cast Etherealness, it lasts for 1d4 minutes. You are unable to end the spell at will." },
    { id: 71, name: "Blink", duration: "Immediate", chaoseffect: "You disappear, reappearing 1d4 turns later." },

  ];

const ModChaosTable = [
    { id: 1, name: "Arcane Rebound", duration: "Immediate", chaoseffect: "You regain one spell slot of 5th level or lower." },
    { id: 2, name: "Chameleon", duration: "Long Rest", chaoseffect: "Your {body} changes color, taking on a {color} hue. This effect lasts until your next long rest." },
    { id: 3, name: "Seer's Eye", duration: "Long Rest", chaoseffect: "A third eye appears on your forehead, giving you advantage on sight-based Perception checks until you finish your next long rest." },
    { id: 4, name: "Surge of Aptitude", duration: "Long Rest", chaoseffect: "Increase your {ability} by 2 until you finish a long rest." },
    { id: 5, name: "Featherbeard", duration: "Trigger", chaoseffect: "You grow a beard made of feathers, which remain until you sneeze." },
    { id: 6, name: "Core Detonation", duration: "Immediate", chaoseffect: "A burst or energy explodes within you at the center. You and each creature within 20 feet of you must make a DEX saving throw using your spell save DC, taking 2d6 fire, 2d6 lightning, and 2d6 thunder damage on a failed save, or half as much on a successful one." },
    { id: 7, name: "Stray Bolt", duration: "Immediate", chaoseffect: "A bolt of lightning strikes a random creature within 15 feet, they take 1d10 lightning damage." },
    { id: 8, name: "Luminade", duration: "Minute", chaoseffect: "You emanate dim light in a 30-foot radius for one minute." },
    { id: 9, name: "Astral Displacement", duration: "Immediate", chaoseffect: "You teleport to the random space within 50 feet until the end of your next turn, you return to the location where you started or the closest unoccupied space." },
    { id: 10, name: "Arcane Echo", duration: "Minute", chaoseffect: "The next spell you cast that does damage within the next minute, add 1d4 to the damage roll." },
    { id: 11, name: "Bubble Mute", duration: "Minute", chaoseffect: "You cant speak for one minute. When you try, pink bubbles float out of your mouth." },
    { id: 12, name: "Friendly Switcheroo", duration: "Trigger", chaoseffect: "You swap places with the nearest friendly creature." },
    { id: 13, name: "Tongue of Babel", duration: "Long Rest", chaoseffect: "You gain the ability to speak one random language until you finish a long rest." },
    { id: 14, name: "Songbirds of Attraction", duration: "Minute", chaoseffect: "Small birds flutter and chirp in your vicinity for one minute, during which time you have disadvantage on Stealth checks." },
    { id: 15, name: "Spell Drag", duration: "Minute", chaoseffect: "For the next minute, all spells with a casting time of one action or one bonus action require two consecutive actions to cast." },
    { id: 16, name: "Rootstep", duration: "Long Rest", chaoseffect: "Your feet turn to wood with twiggy growths. You automatically fail any Stealth check until you finish a long rest." },
    { id: 17, name: "Cephalopocalyse", duration: "Immediate", chaoseffect: "A random creature within 25 feet grow 6 additional arms. They may hold multiple weapons and may attack twice per turn." },
    { id: 18, name: "Stonehide Surge", duration: "Minute", chaoseffect: "For one minute, you gain resistance to non-magical bludgeoning, piercing, and slashing damage." },
    { id: 19, name: "Auto-Combustion", duration: "Immediate", chaoseffect: "Your body is engulfed in flames and you take 1d8 damage." },
    { id: 20, name: "Autoshift", duration: "Immediate", chaoseffect: "You cast <i><b>polymorph</b></i> on yourself, turning you into a giant octopus." },
    { id: 21, name: "Gilded Fool", duration: "Immediate", chaoseffect: "All gold you are now carrying is silver." },
    { id: 22, name: "Icy Footing", duration: "Immediate", chaoseffect: "The ground becomes covered in ice in a 20 ft radius, everyone within range must make a DEX saving throw or fall prone." },
    { id: 23, name: "Boogie Hex", duration: "Minute", chaoseffect: "You are filled with the urge to start dancing. You have disadvantage on attacks for 1 minute or until you succeed on a Wisdom saving throw equal to your spell save DC." },
    { id: 24, name: "Slip and Slide", duration: "Immediate", chaoseffect: "You cast the Grease spell centered on you. Concentration isn't required and his last for the spell's duration." },
    { id: 25, name: "Wooden Arsenal", duration: "Immediate", chaoseffect: "All non-magical weapons within sight become made out of wood, changing the damage type to bludgeoning, damage is dealt normally." },
    { id: 26, name: "Snowbear", duration: "Immediate", chaoseffect: "Your hair turns white and you grow a bushy white beard." },
    { id: 27, name: "Petal Crown", duration: "Long Rest", chaoseffect: "You grow a crown of flowers which lasts until your next long rest. The flowers will attract bees" },
    { id: 28, name: "Balloon Blade", duration: "Immediate", chaoseffect: "A random melee weapon within 25 feet becomes a balloon. Damage is applied normally but swing speed is slower, -1 to attack rolls." },
    { id: 29, name: "Flutter Pulse", duration: "Immediate", chaoseffect: "Your heart stops for a couple beats, you take 1d6 force damage." },
    { id: 30, name: "Mini-Me", duration: "Long Rest", chaoseffect: "Reduce your overall size by half, height and weight, until you finish a long rest. Your size category goes down one level (if you are a Medium creature, you become Small). Your movement speed is reduced by 10 feet." },
    { id: 31, name: "Congested", duration: "Long Rest", chaoseffect: "You loose the ability to smell until you finish a long rest. You automatically fail any Perception checks related to smell." },
    { id: 32, name: "Wildspeaker", duration: "Immediate", chaoseffect: "You cast Speak with Animals, targeting yourself." },
    { id: 33, name: "Radiant Boon", duration: "Immediate", chaoseffect: "All creatures within 60 feet of you gain 2d8 temporary hit points." },
    { id: 34, name: "", duration: "Minute", chaoseffect: "For the next minute you become invisible." },
    { id: 35, name: "Sapling Skull", duration: "Immediate", chaoseffect: "A plant starts growing out of your head." },
    { id: 36, name: "Fortune's Flicker", duration: "Trigger", chaoseffect: "On your next ability check, saving throw, or attack, roll a 1d4 and add the result." },
    { id: 37, name: "Mirror Trickery", duration: "Minute", chaoseffect: "You cast <i><b>mirror image</b></i> on yourself, which lasts for one minute and does not require concentration." },
    { id: 38, name: "Glass Cannon", duration: "Minute", chaoseffect: "You feel powerful but weak. Double the damage dealt by melee weapons but half you hit points for 1 minute." },
    { id: 39, name: "Reverse Mirror", duration: "Long Rest", chaoseffect: "You turn into the opposite gender until you finish a long rest." },
    { id: 40, name: "Spitfire", duration: "Minute", chaoseffect: "For the next minute your spit is acidic. You may make a ranged attack, 10/15, dealing 1d6 acid damage on a successful hit. Whenever you make this ranged attack, take 1d6 acid damage." },
    { id: 41, name: "Surge of Fortune", duration: "Trigger", chaoseffect: "Gain a +2 to the next attack, ability check, or saving throw." },
    { id: 42, name: "Chaotic Empowerment", duration: "Long Rest", chaoseffect: "Until you finish a long rest, all creatures within 60 feet of you deal an extra 1d4 {element} damage on melee weapon attacks." },
    { id: 43, name: "Tentaclimbs", duration: "Minute", chaoseffect: "Your arms appear to be tentacles, you drop anything you are holding and you can't pick anything up for 1 minute." },
    { id: 44, name: "Windfall", duration: "Immediate", chaoseffect: "3d12 gold pieces appear near you." },
    { id: 45, name: "Tail of Trials", duration: "Permanent", chaoseffect: "You grow a prehensile tail, able to wield simple weapons. You may make a melee attack using your tail as a bonus action." },
    { id: 46, name: "Toxic Nimbus", duration: "Minute", chaoseffect: "You radiate a cloud of posionous gas for one minute dealing 1d4 posion damage to anyone within 5 feet of you, you are immune to the damage." },
    { id: 47, name: "Miracle Walker", duration: "Long Rest", chaoseffect: "You have the ability to walk on water until you finish a long rest." },
    { id: 48, name: "Stoutpaw", duration: "Minute", chaoseffect: "You become a bear with short legs for 1 minute. You have the same statistics as a bear but have a movement speed of 10 feet." },
    { id: 49, name: "Jack of All Trades", duration: "Long Rest", chaoseffect: "You gain proficiency on all ability checks until you finish a long rest." },
    { id: 50, name: "Echo Daggers", duration: "Immediate", chaoseffect: "Eight daggers fly away from you in the cardinal directions and main diagonals." },
    { id: 51, name: "Frogger", duration: "Short Rest", chaoseffect: "Multiply your jump height by 2d4 until you finish a short or long rest." },
    { id: 52, name: "Bonus Burn", duration: "Minute", chaoseffect: "For one minute, gain one additional bonus action per turn. You take one level of exhaustion per extra bonus action taken." },
    { id: 53, name: "Shimmerstep", duration: "Immediate", chaoseffect: "You cast <i><b>levitate</b></i> on a random creatures within 60 feet of you." },
    { id: 54, name: "T-Rex Effect", duration: "Short Rest", chaoseffect: "If you stand super still for one round you become invisible until you move again, this effect lasts until you finish a short or long rest." },
    { id: 55, name: "Titan's Fists", duration: "Long Rest", chaoseffect: "Until your next long rest, you fists double in size. You deal double damage with unarmed strikes." },
    { id: 56, name: "Breeze of Insignificance", duration: "Immediate", chaoseffect: "A light breeze blows outward from you. All creatures within 60 feet can feel the breeze but otherwise has no effect." },
    { id: 57, name: "Mind Echo", duration: "Short Rest", chaoseffect: "You are able to hear the thought of any creature with 5 feet until you finish a short or long rest." },
    { id: 58, name: "Torso of Transparency", duration: "Long Rest", chaoseffect: "Your torso, and any clothes or armor your wearing become invisible until your next long rest, giving you a +1 to your AC." },
    { id: 59, name: "Entomophage's Curse", duration: "Trigger", chaoseffect: "Your have a thirst that only a bug will quench, you frantically search and eat the first bug you find ending your thirst, you take 1d4 damage every hour you haven't eaten a bug." },
    { id: 60, name: "Reactive Ward", duration: "Immediate", chaoseffect: "You cast <i><bshield</b></i>." },
    { id: 61, name: "The Persistent Laborer", duration: "Long Rest", chaoseffect: "You gain proficiency in {ability} until you finish a long rest." },
    { id: 62, name: "Invisible Ally", duration: "Minute", chaoseffect: "One creaturse of your choice within 20 feet of you becomes invisible for the next minute. The invisibility on a creature ends when it attacks or casts a spells." },
    { id: 63, name: "Beastly Tongue", duration: "Short Rest", chaoseffect: "You must make an animal sound at the end of each sentence or take 1d6 psychic damage. This effect last until you finish a short or long rest." },
    { id: 64, name: "Gender Mirage", duration: "Long Rest", chaoseffect: "Until your next long rest you appear to others as the opposite gender." },
    { id: 65, name: "Purifying Aura", duration: "Immediate", chaoseffect: "All food and drink within 30 feet of you is purified." },
    { id: 66, name: "Relentless Survival", duration: "Long Rest", chaoseffect: "Until you finish a long rest, when you drop to to 0 hit points, you automatically succed on a death save." },
    { id: 67, name: "Fiery Flatulence", duration: "Minute", chaoseffect: "You let out a continous fart for one minute, it catches fire half way through dealing 2d6 fire damage to you and anyone 10 feet behind you." },
    { id: 68, name: "Faerie Dragon Visit", duration: "Minute", chaoseffect: "A Faerie Dragon appears for one minute." },
    { id: 69, name: "Silken Trail", duration: "Long Rest", chaoseffect: "You produce silky web 10 feet in length from your butt every hour until you finish a long rest, it can be used as rope." },
    { id: 70, name: "Pebble Rain", duration: "Minute", chaoseffect: "It begins to rain pebblesin a 60 foot radius for one minute, each creature within range takes 1d4 bludgeoning damage per round." },
    { id: 71, name: "Whistling Ears", duration: "Immediate", chaoseffect: "Black smoke shoots out of your ears making a loud whistle. Any creature within 60 feet of your knows your location." },
    { id: 72, name: "Effortless Casting", duration: "Minute", chaoseffect: "For the next minute all spells may be cast as if under effects of Subtle Spell metamagic without expending sorcery points. Any spell that uses this ability may not use another metamagic ability to alter the spell." },
    { id: 73, name: "Noodle Arms", duration: "Long Rest", chaoseffect: "Your arms begin to feel like noodles, all of the bones in your arms have disappeared. You have disadvantage on any melee attacks until the bones regrow once you finish a long rest." },
    { id: 74, name: "Deafening Boom", duration: "Long Rest", chaoseffect: "You hear a loud boom, lose the ability to hear until your next long rest." },
    { id: 75, name: "Charming Drunk", duration: "Long Rest", chaoseffect: "Until your next long rest, when you become intoxicated you have advantage on Charisma based ability checks." },
    { id: 76, name: "Fiery Sneezes", duration: "Minute", chaoseffect: "Everytime you sneeze fire shoots out of your nostrils in a 15 foot line dealing 1d6 fire damage. Every round for 1 minute, make a CON saving throw. On a failed throw you sneeze." },
    { id: 77, name: "Magical Defense", duration: "Long Rest", chaoseffect: "+1 bonus to your AC until you finish a long rest." },
    { id: 78, name: "Chaotic Rage", duration: "Immediate", chaoseffect: "You are driven mad by the chaos, causing you to go into a barbarian rage." },
    { id: 79, name: "Random Launch", duration: "Immediate", chaoseffect: "You are thrown 15 feet in a random direction or until you come into contact with an inmovable object." },
    { id: 80, name: "Cue Ball", duration: "Long Rest", chaoseffect: "All of your hair falls out, it regrows when you finish a long rest." },
    { id: 81, name: "Hopscotch Curse", duration: "Minute", chaoseffect: "You look down and your two legs have merged into one, you are proficient in hopping but you move speed is cut in half. This last for 1d4 minutes" },
    { id: 82, name: "Spell Delay", duration: "Trigger", chaoseffect: "Your spell fizzles, it will be cast on your next turn as normal with the same target(s). If no target remains before your next turn, the spell fails." },
    { id: 83, name: "Mundane Manifestation", duration: "Immediate", chaoseffect: "A random non-magical item appears on the ground within 5-feet of you." },
    { id: 84, name: "Phantom Familiar", duration: "Long Rest", chaoseffect: "A random phantom pet appears before you, lending you aid until you finish a long rest." },
    { id: 85, name: "Flameguard Aura", duration: "Minute", chaoseffect: "You become engulfed in flames for one minute, you take no damage from this effect. If any creature comes into contact with you they take 1d6 fire damage." },
    { id: 86, name: "Feline & Canine Deluge", duration: "Minute", chaoseffect: "It starts raining cats and dogs for one minute, causing 1d8 bludgeoning damage if hit by a dog and 1d6 slashing if hit by a cat." },
    { id: 87, name: "Burden’s Blessing", duration: "Long Rest", chaoseffect: "Increase your carrying capacity by 50 lbs until you finish a long rest." },
    { id: 88, name: "Arcane Drain", duration: "Immediate", chaoseffect: "Lose one of you highest remaining spell slots." },
    { id: 89, name: "Elemental Fist", duration: "Long Rest", chaoseffect: "Until the end of your next long rest, your unarmed strikes deal an extra 1d4 {element} damage." },
    { id: 90, name: "Cozy Vitality", duration: "Immediate", chaoseffect: "You feel warm and fuzzy on the inside, +1 temporary HP." },
    { id: 91, name: "Chameleon’s Guise", duration: "Long Rest", chaoseffect: "You appear to others as a different race until you finish a long rest." },
    { id: 92, name: "Snowcloud Halo", duration: "Short Rest", chaoseffect: "Until your next short or long rest, a small grey cloud appears above your head letting down snowflakes." },
    { id: 93, name: "Blooming Resilience", duration: "Minute", chaoseffect: "A flower sprouts out of the top of your head. For the next minute, on each of your turns, you regain 1 hit points." },
    { id: 94, name: "Surge Amplifier", duration: "Long Rest", chaoseffect: "Roll again on the magic surge table, the next effect taken has double the duration, targets, and/or damage. If the effect ends on your next long rest, it won't end until your second long rest." },
    { id: 95, name: "Chaotic Recursion", duration: "Minute", chaoseffect: "For the next minute, on each of your turn roll on this table, ignoring this result on subsequent rolls." },
    { id: 96, name: "Pack Mule", duration: "Permanent", chaoseffect: "You can now carry your max weight without being overencumbered" },
    { id: 97, name: "Zoomies", duration: "Minute", chaoseffect: "You feel a surge of energy course through your body, your movement speed is increased by 20 feet per round for one minute." },
    { id: 98, name: "Midas Merlot", duration: "Trigger", chaoseffect: "The next water source you touch turns to wine." },
    { id: 99, name: "Designated Sorcerer", duration: "Long Rest", chaoseffect: "Until your next long rest, you are immune to being intoxicated." },
    { id: 100, name: "Lead Bones", duration: "Long Rest", chaoseffect: "You feel more durable. Your bones become stronger and denser until you finish a long rest. You are resistent to blugeoning damage but your movement speed is reduced to 10 feet and your swim speed becomes 0." },
    { id: 101, name: "Solid Gold Movement", duration: "Immediate", chaoseffect: "Your stomach feels really solid and you feel the urge to relive yourself. When you do you find a turd made out of solid gold worth 200g in replace of the usual. Take 1d6 force damage after you are done." },
    { id: 102, name: "Shifting Self", duration: "Long Rest", chaoseffect: "Gain the ability to change genders, when you finish your next long rest you will stay whatever gender you are at that time." },
    { id: 103, name: "Jumpstart", duration: "Short Rest", chaoseffect: "Multiply your jump height by 3d4 until you finish a short or long rest." },
    { id: 104, name: "Sticky Fingers", duration: "Long Rest", chaoseffect: "You grow suction cups on your hands which last until your next long rest. For the duration weapons can't be knocked or taken out of your grasp against your will." },
    { id: 105, name: "Mocking Aura", duration: "Minute", chaoseffect: "For one minute, every creature that hears you speak, hears insults as if you are casting <i><b>viscious mockery</b></i> at first level." },
    { id: 106, name: "Larger than Life", duration: "Long Rest", chaoseffect: "Double your overall size, height and weight, until you finish a long rest. Your size category goes up one level, if you are a Medium creature, you become Large. Your movement speed increases by 10 feet." },
    { id: 107, name: "Entish", duration: "Long Rest", chaoseffect: "Gain the ability to talk to trees until you finish a long rest." },
    { id: 108, name: "Chronomagical Skincare", duration: "Trigger", chaoseffect: "For the next 5 years you won't age." },
    { id: 109, name: "Elevator Ambience", duration: "Minute", chaoseffect: "You are surrounded by faint ethereal music for one minute." },
    { id: 110, name: "Loud and Proud", duration: "Minute", chaoseffect: "For the next minute, you must shout when you speak." },
    { id: 111, name: "Size of Surprise", duration: "Immediate", chaoseffect: "You shrink in size to that of a small creature. If you are already a small creature you grow in size to that of a large creature." },
    { id: 112, name: "Sweather Weather", duration: "Immediate", chaoseffect: "You feel cold and dreary, lose 1 HP." },
    { id: 113, name: "Explosive Fists", duration: "Long Rest", chaoseffect: "Until the end of your next long rest, your unarmed strikes deal an extra 2d6 fire damage and 2d6 thunder. You take half as much fire and thunder damage dealt." },
    { id: 114, name: "Burdened", duration: "Long Rest", chaoseffect: "Decrease your carrying capacity by 50 lbs until you finish a long rest." },
    { id: 115, name: "Green Thumb", duration: "Minute", chaoseffect: "For the next minute, all plants within 25 feet grow as if under the Plant Growth spell." },
    { id: 116, name: "Frogger", duration: "Long Rest", chaoseffect: "Multiply your jump height by 1d4 until you finish your next long rest." },

];

const GoodChaosTable = [
    { id: 1, name: "Chaos Recharged", duration: "Immediate", chaoseffect: "You regain all expended sorcery point." },
    { id: 2, name: "Chameleon", duration: "Permanent", chaoseffect: "Your {body} changes color, taking on either a {color} or {color} hue. This effect is permanent but can be removed with the spell <i><b>remove curse</b></i>." },
    { id: 3, name: "I Can See Clearly Now", duration: "Long Rest", chaoseffect: "Gain superior darkvision until you finish your next long rest." },
    { id: 4, name: "Power Surge", duration: "Permanent", chaoseffect: "Permanently increase your {ability} score by 1 to a maximum of 20." },
    { id: 5, name: "Wingin' It", duration: "Minute", chaoseffect: "You grow a pair of white wings which allow you to fly at 60 ft per round for one minute at which time they will disappear into a puff of feathers." },
    { id: 6, name: "Elemental Timeout", duration: "Long Rest", chaoseffect: "Until you finish your next long rest you are resistant to {element} damage" },
    { id: 7, name: "Walking Headlight", duration: "Minute", chaoseffect: "You emanate a blidning light in a 5-foot radius and dim light in an additional 40-foot radius for one minute. Any creature within 5 feet of you become blinded." },
    { id: 8, name: "Blink and You'll Miss Me", duration: "Minute", chaoseffect: "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns." },
    { id: 9, name: "Maximum Effort", duration: "Trigger", chaoseffect: "The next spell you cast that does damage does maximum damage." },
    { id: 10, name: "Now Your'e Me", duration: "Immediate", chaoseffect: "You choose one creature within 60 feet and swap places with the target." },
    { id: 11, name: "Hobbits Greatest Wish", duration: "Permanent", chaoseffect: "You gain the ability to call forth a large hardy meal once per day." },
    { id: 12, name: "Duolingo", duration: "Permanent", chaoseffect: "You gain the ability to speak {language}." },
    { id: 13, name: "Show Us the Meaning of Haste", duration: "Minute", chaoseffect: "For the next minute, all spells with a casting time of one action can now be cast with a bonus action." },
    { id: 14, name: "Ten-Toed Angel", duration: "Long Rest", chaoseffect: "You feet sprout two feathery wings on each foot, giving you the effects of the <i><b>feather fall</b></i> spell until you finish your next long rest." },
    { id: 15, name: "Overdrive", duration: "Immediate", chaoseffect: "You may immediately take one additional action." },
    { id: 16, name: "Party Protection", duration: "Minute", chaoseffect: "For one minute, you and up to two other targets within 15 feet gain resistance to non-magical bludgeoning, piercing, and slashing damage." },
    { id: 17, name: "Crown of Embers", duration: "Minute", chaoseffect: "A flame crown appears above your head. For the next minute, whenever you deal fire damage you deal 1d4 times that amount." },
    { id: 18, name: "Economic Boom", duration: "Immediate", chaoseffect: "The gold you are carrying is doubled." },
    { id: 19, name: "Sparta in Winter", duration: "Immediate", chaoseffect: "The air in front of you freezes solid in the shape of a spear. As a bonus action you may make a ranged attack, dealing 2d6 cold damage." },
    { id: 20, name: "Footloose", duration: "Long Rest", chaoseffect: "You are endowed with great dancing skills, granting you an additional +2 to Performance checks until you finish a long rest." },
    { id: 21, name: "Soul Lash", duration: "Immediate", chaoseffect: "Each creature within 30 feet of you takes 1d8 necrotic damage as smoky black wisps lash out from your body. You regain hit points eqaul to the total damage dealt." },
    { id: 22, name: "Blade Blessing", duration: "Long Rest", chaoseffect: "All weapons within 15 feet become sharper or stronger, dealing an additional damage die of damage until the wielder finished a long rest." },
    { id: 23, name: "Conduit of the Storm", duration: "Minute", chaoseffect: "You feel a field of energy form around you. You may designate a weapon in sight, becoming charged with electricity dealing an extra 1d6 lightning damage for 1 minute." },
    { id: 24, name: "Temporary Hero", duration: "Immediate", chaoseffect: "You immediately gain 20 temporary hit points." },
    { id: 25, name: "Nose Knows", duration: "Long Rest", chaoseffect: "You gain the smell sense of a blood hound. You gain advantage on any Perception checks related to smell until the end of your next long rest." },
    { id: 26, name: "Group Hug", duration: "Immediate", chaoseffect: "All allies within 60 feet of you regain 2d8 hit points." },
    { id: 27, name: "Sneak Mode", duration: "Minute", chaoseffect: "For the next minute you become invisible and gain advantage on Stealth checks." },
    { id: 28, name: "Barkside Armor", duration: "Long Rest", chaoseffect: "You start growing patches of bark on your skin, gaining the effects of the <i>barkskin</i> spell until the end of your next long rest." },
    { id: 29, name: "Lady Luck's Favor", duration: "Long Rest", chaoseffect: "You are blessed by Tymora. Until you finsih a long rest, any time you make an ability check, roll 1d4 and add the result." },
    { id: 30, name: "Mirror Me Maybe", duration: "Minute", chaoseffect: "For 1 minute, a duplicate of yourself appears in the nearest open space. They have the same initiative as you but may take their own actions. Health and sorcercy points are shared between yourself and the duplicate." },
    { id: 31, name: "Glass Cannon Protocol", duration: "Minute", chaoseffect: "You feel powerful but weak. Double the damage dealt by spells but half your hit points for one minute." },
    { id: 32, name: "Shining Armor", duration: "Long Rest", chaoseffect: "Increase your Charisma by 2 when encountering the opposite gender during social interactions until you finish a long rest." },
    { id: 33, name: "Lucky Break", duration: "Trigger", chaoseffect: "You have advantage on the next attack, check, or save." },
    { id: 34, name: "Aura of Resistance", duration: "Minute", chaoseffect: "For the next minute, all creatures within 60 feet of you are resistant to {element} damage." },
    { id: 35, name: "Gem Drop", duration: "Immediate", chaoseffect: "3d6 random gems appear near you worth 50gp each." },
    { id: 36, name: "Armed and Then Some", duration: "Long Rest", chaoseffect: "Two additional arms grow out of your side which last until you finish a long rest. When you make a melee attack on your turn, you may make another attack as a bonus action." },
    { id: 37, name: "Gill Issues", duration: "Long Rest", chaoseffect: "You have the ability to breath underwater until you finish a long rest." },
    { id: 38, name: "Centaurnado", duration: "Long Rest", chaoseffect: "You cast <i><b>polymorph</b></i> on yourself, turning you into a centaur but with the torso or a minotaur. You gain the attributes of both creatures until you finish a long rest." },
    { id: 39, name: "Jack of All Trades", duration: "Long Rest", chaoseffect: "You gain expertise in all skills until you finish a long rest." },
    { id: 40, name: "Eagle Eyed", duration: "Long Rest", chaoseffect: "Automatically success on any ranged weapon attacks until you finish a short or long rest." },
    { id: 41, name: "Fly You Fools", duration: "Immediate", chaoseffect: "You cast <i><b>fly</b></i> on a random creatures within 60 feet of you." },
    { id: 42, name: "Nimble Nimbus", duration: "Long Rest", chaoseffect: "Until you finish a long rest, you take no damage on successful DEX saves." },
    { id: 43, name: "What Feet?", duration: "Minute", chaoseffect: "Your feet become invisible and your movement is silent for one minute, gain advantage on Stealth based checks." },
    { id: 44, name: "Heightened Senses", duration: "Long Rest", chaoseffect: "Your eyes, nose, mouth, and ears all double in size, increasing your Perception by 4, to a maximum of 24, until you finish a long rest." },
    { id: 45, name: "Gust of You", duration: "Immediate", chaoseffect: "All creatures within 20 feet of you must make a STR saving throw, with a DC equal to your spell save DC, as a strong gust of wind surges from you. On a failed save they are knocked prone." },
    { id: 46, name: "Invisible Pain", duration: "Minute", chaoseffect: "Your arms, and any weapons, becomes invisible giving you advantage on attack rolls for 1 minute." },
    { id: 47, name: "Shield Delivery", duration: "Immediate", chaoseffect: "You may choose up to two creatures within 30 feet, each creature gains the effects of the <i><b>shield</b></i> spell." },
    { id: 48, name: "Skilled by Chaos", duration: "Long Rest", chaoseffect: "You gain proficiency in all abilities until you finish a long rest." },
    { id: 49, name: "Ghost Mode", duration: "Minute", chaoseffect: "Up to 6 creaturse of your choice within 30 feet of you becomes invisible for the next minute. The invisibility on a creature ends when it attacks or casts a spells." },
    { id: 50, name: "Beast Speech", duration: "Long Rest", chaoseffect: "You gain the ability to speak with animals until you finish a long rest." },
    { id: 51, name: "No Save, No Mercy", duration: "Trigger", chaoseffect: "The next spell you cast automatically suceeds. Any spell attacks hit and any target automatically fails their saving throw." },
    { id: 52, name: "Almost Died but Didn't", duration: "Long Rest", chaoseffect: "Until you finish a long rest, if you were to die, you are instead stabilized with 1 hit point." },
    { id: 53, name: "Metallic Mayhen", duration: "Minute", chaoseffect: "An Adult {DChrome} Dragon appears for one minute. It remains for the duration or until it drops to 0 hit points, vanishing into smoke." },
    { id: 54, name: "Wall-Crawler", duration: "Immediate", chaoseffect: "You cast <i><b>spider climb</b></i> climb on yourself." },
    { id: 55, name: "Stone Skin", duration: "Long Rest", chaoseffect: "Your skin becomes rock hard, reduce the amount of piercing, bluedgeoning, and slashing damage by 1d4 until you finish a long rest." },
    { id: 56, name: "Choose Your Chaos", duration: "Immediate", chaoseffect: "Roll two times on the wild magic surge table and pick which effect occurs." },
    { id: 57, name: "Twinsies", duration: "Minute", chaoseffect: "For the next minute all spells may be cast as if under effects of Twinned Spell metamagic without expending sorcery points. Any spell that uses this ability may not use another metamagic ability to alter the spell." },
    { id: 58, name: "Pheonix Leap", duration: "Immediate", chaoseffect: "You grow wings of fire from your back, you can jump as high as 100 feet and you float back down as if under the effects of the <i><b>feather fall</b></i> spell. When you land the wings disappear." },
    { id: 59, name: "Chaotic Reinforcement", duration: "Long Rest", chaoseffect: "Any armor you are wearing becomes stronger, granting you a +2 to your AC until you take damage greater than 15 points or finish a long rest." },
    { id: 60, name: "King of the Jungle", duration: "Long Rest", chaoseffect: "You grow a magnificent golden lions mane which lasts until you finish a long rest. Gain advantage on Intimidation check while you have the lions mane." },
    { id: 61, name: "Echo Cast", duration: "Trigger", chaoseffect: "During your next turn, you may cast a copy of your spell as a bonus action without expending a spell slot." },
    { id: 62, name: "Loot Drop", duration: "Immediate", chaoseffect: "A random very rare magcial item appears on the ground within 5-feet of you." },
    { id: 63, name: "Saddle Up", duration: "Long Rest", chaoseffect: "A phantom steed appears before you, lending you aid until you finish a long rest." },
    { id: 64, name: "Full Tank", duration: "Immediate", chaoseffect: "You recover all of your expended spell slots." },
    { id: 65, name: "Double Beat", duration: "Permanent", chaoseffect: "You grow a second heart and you are now harder to kill. You must now make 4 failed death saves in order to die." },
    { id: 66, name: "Fists of Flavor", duration: "Long Rest", chaoseffect: "Until the end of your next long rest, your unarmed strikes deal an additional 1d6 {element} damage." },
    { id: 67, name: "Minor Miracle", duration: "Immediate", chaoseffect: "You feel rejuvenated, regain 5 hit points." },
    { id: 68, name: "Mixed Ancestry", duration: "Long Rest", chaoseffect: "You gain some physical characteristics of a {race}, gaining their racial bonuses until you finish a long rest. If you are already the race specified, nothing happens." },
    { id: 69, name: "Radiant Recovery", duration: "Minute", chaoseffect: "A light halo appears floating above your head. For the next minute, on each of your turns, you regain 5 hit points." },
    { id: 70, name: "Fast Forward", duration: "Long Rest", chaoseffect: "Roll again on the magic surge table, the next effects taken have half the duration. If the effect ends on your next long rest, it will instead end on your next short rest." },
 
];

const VBadChaosTable = [
{ id: 1, name: "Monolingual", duration: "Immediate", chaoseffect: "You lose the ability to speak all languages, besides Common. You may re-learn any language lost from this effect or one you did not previous know." },
{ id: 2, name: "Elemental Exposure", duration: "Variable", chaoseffect: "{time}, you gain a vulnerability to {element} damage." },
{ id: 3, name: "Phobophobia", duration: "Variable", chaoseffect: "{time}, you have {phobia}, becoming freightened in the presence of your fear." },
{ id: 4, name: "Freaky Friday", duration: "Long Rest", chaoseffect: "You and the target of the spell swap bodies until your next long rest, if either of you die it is permanent." },
{ id: 5, name: "Nudist", duration: "Immediate", chaoseffect: "All of your clothes and armor disintergrate." },
{ id: 6, name: "Directionless Teleporter", duration: "Immediate", chaoseffect: "You are teleported upwards 2d100 feet." },
{ id: 7, name: "Enemy's Blessing", duration: "Immediate", chaoseffect: "All enemies within 60 feet regain full health." },
{ id: 8, name: "Howl of the Moon", duration: "Permanent", chaoseffect: "You are cursed with lycanthrope, of the {lycan} strain." },
{ id: 9, name: "Mana Collapse", duration: "Long Rest", chaoseffect: "You lose all of your sorcery points and can’t gain any additional points until you finish a long rest." },
{ id: 10, name: "Peter Pan", duration: "Immediate", chaoseffect: "Your shadow detaches from your body, becoming a Shadow creature." },
{ id: 11, name: "Lightning Storm", duration: "Immediate", chaoseffect: "All creatures within 60 feet become the target of the <i><b>lightning bolt</b></i> spell cast 1d4 levels above third." },
{ id: 12, name: "Elder's Gaze", duration: "Variable", chaoseffect: "{time}, your eye sight ages to that of an elder giving you disadvantage on all sight based Perception checks unless you are wearing glasses." },
{ id: 13, name: "Brain Rot", duration: "Variable", chaoseffect: "{time}, decrease your {ability} by 1." },
{ id: 14, name: "Teratophobia", duration: "Variable", chaoseffect: "{time}, you become frightened of all non-humanoid creatures." },
{ id: 15, name: "Phototoxicity", duration: "Permanent", chaoseffect: "For each round you are in direct sunlight, you take 1d6 radiant damage." },
{ id: 16, name: "Crippling Drag", duration: "Variable", chaoseffect: "{time}, reduce your speed by half." },
{ id: 17, name: "Spellburn", duration: "Immediate", chaoseffect: "You are unable to contain the surge of energy that begins to build within you. That magic explodes from your body, consuming all spell slots. You and all creatures in 25 feet take 1d6 force damage for each spell level consumed." },
{ id: 18, name: "Heartstrings Severed", duration: "Variable", chaoseffect: "Your feel a tug at your heart and it skips several beats. {time}, your HP Max is reduced to half." },
{ id: 19, name: "Self Destruction", duration: "Immediate", chaoseffect: "A burst or energy explodes within you at the center. You and each creature within 20 feet of you must make a DEX saving throw using your spell save DC, taking 4d6 fire, 4d6 lightning, and 4d6 tunder damage on a failed save, or half as much on a successful one." },
{ id: 20, name: "Kaiju's Rampage", duration: "Minute", chaoseffect: "For the next minute, whenever you move 10 of more feet, <i><b>earthquake</b></i> is cast centered on youself when you end your movement." },
{ id: 21, name: "Arcane Silence", duration: "Minute", chaoseffect: "For the next minute all spells you cast automatically fail. Any spell attacks miss, any target automatically succeeds on their saving throw, and the duration is reduced to 0." },
{ id: 22, name: "Etched in Stone", duration: "Immediate", chaoseffect: "Roll again on the magic surge table, the next effects taken become permanent." },
{ id: 23, name: "Skillfade", duration: "Long Rest", chaoseffect: "You lose proficiency in all skill rolls until you finish a long rest." },
{ id: 24, name: "How to Lose Friends", duration: "Immediate", chaoseffect: "A fireball explodes with you at the center. You and each creature within 20 feet of you who must make a DEX saving throw using your spell save DC, taking 5d6 fire damage on a failed save, or half as much on a successful one." },

  ];

const VGoodChaosTable = [
{ id: 1, name: "Brawler", duration: "Variable", chaoseffect: "{time}, your unarmed strikes deal an additional 1d12 {element} damage." },
{ id: 2, name: "Studious", duration: "Variable", chaoseffect: "You gain extensive knowledge on one subject matter. {time}, increase one ability score or your choice by 1, to a maximum of 24." },
{ id: 3, name: "Heightened", duration: "Variable", chaoseffect: "One of your senses becomes doubled in efficiency. {time}, you gain advantage on Percpetion checks related to that sense." },
{ id: 4, name: "Divine Health", duration: "Variable", chaoseffect: "You are surrounded by a glowing light that feels divine in nature, gifting you with extra health. {time}, your hit point maximum is doubled." },
{ id: 5, name: "Extra Charge", duration: "Immediate", chaoseffect: "Gain one additional spell known, up to the highest spell level you can cast." },
{ id: 6, name: "Cure All", duration: "Immediate", chaoseffect: "You are cured of all curses, diseases, ailments, and negative effects are removed." },
{ id: 7, name: "Back to Max", duration: "Immediate", chaoseffect: "All creatures of your choice within 100 feet regain full health." },
{ id: 8, name: "Improvement", duration: "Variable", chaoseffect: "{time}, increase your {ability} by 1." },
{ id: 9, name: "Appropriation", duration: "Permanent", chaoseffect: "You are imbued with the traits of {race}, gaining their racial bonuses and some physical characterisics." },
{ id: 10, name: "Photosynthesis", duration: "Permanent", chaoseffect: "For each round you are in direct sunlight, you regain 1d4 hit points." },
{ id: 11, name: "Superman", duration: "Variable", chaoseffect: "{time}, you gain immunity to {element} damage." },
{ id: 12, name: "Sonic", duration: "Variable", chaoseffect: "{time}, double your movement speed." },
{ id: 13, name: "RNGesus", duration: "Immediate", chaoseffect: "A legendary random magic item appears in front of you." },
{ id: 14, name: "Monster Hunter", duration: "Variable", chaoseffect: "You appear menacing to all non-humanoid creatures. {time}, you have advantage on melee attacks made against those creatures." },
{ id: 15, name: "Heavenly Aid", duration: "Minute", chaoseffect: "Summons a Deva to aid you in combat for one minute." },
{ id: 16, name: "Vahalla", duration: "Permanent", chaoseffect: "You are blessed with the gift of Vahalla. You may summon spirit warrior as if you had blown a silver Horn of Vahalla. Once used, you can't use this ability again until 7 days have passed." },
{ id: 17, name: "Genie", duration: "Immediate", chaoseffect: "You cast <i><b>wish</b></i>." },
{ id: 18, name: "Stand Still", duration: "Immediate", chaoseffect: "You cast <i><b>time stop</b></i>." },


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

//ABILITY TYPE       

// Define the table as an array of objects
const AbilityTypes = [
    { id: 1, AbilityType: "Strength" },
    { id: 2, AbilityType: "Dexterity" },
    { id: 3, AbilityType: "Constitution" },
    { id: 4, AbilityType: "Wisdom" },
    { id: 5, AbilityType: "Charisma" },
    { id: 6, AbilityType: "Intelligence" }
];

// Array to store the last two selected damage types
let lastTwoABSelections = [];

// Function to select a random damage type, avoiding the last two selections
function getRandomAbilityType() {
    let availableAbilityTypes = AbilityTypes.filter(type => 
        !lastTwoABSelections.includes(type.AbilityType)
    );

    // In case all damage types are excluded by the last two selections
    if (availableAbilityTypes.length === 0) {
        availableAbilityTypes = AbilityTypes;
    }

    const randomIndex = Math.floor(Math.random() * availableAbilityTypes.length);
    const selectedType = availableAbilityTypes[randomIndex];

    // Update the last two selections
    lastTwoABSelections.push(selectedType.AbilityType);
    if (lastTwoABSelections.length > 2) {
        lastTwoABSelections.shift(); // Keep only the last two selections
    }

    return selectedType;
}

//RACE TYPE       

// Define the table as an array of objects
const raceTypes = [
    { id: 1, raceType: "Aarakocra" },
    { id: 2, raceType: "Aasimar" },
    { id: 3, raceType: "Air Genasi" },
    { id: 4, raceType: "Bugbear" },
    { id: 5, raceType: "Centaur" },
    { id: 6, raceType: "Changeling" },
    { id: 7, raceType: "Deep Gnome" },
    { id: 8, raceType: "Dragonborn" },
    { id: 9, raceType: "Duergar" },
    { id: 10, raceType: "Dwarf" },
    { id: 11, raceType: "Earth Genasi" },
    { id: 12, raceType: "Eladrin" },
    { id: 13, raceType: "Elf" },
    { id: 14, raceType: "Fairy" },
    { id: 15, raceType: "Firbolg" },
    { id: 16, raceType: "Fire Genasi" },
    { id: 17, raceType: "Githyanki" },
    { id: 18, raceType: "Githzerai" },
    { id: 19, raceType: "Gnome" },
    { id: 20, raceType: "Goblin" },
    { id: 21, raceType: "Goliath" },
    { id: 22, raceType: "Halfling" },
    { id: 23, raceType: "Harengon" },
    { id: 24, raceType: "Hobgoblin" },
    { id: 25, raceType: "Human" },
    { id: 26, raceType: "Kenku" },
    { id: 27, raceType: "Kolbold" },
    { id: 28, raceType: "Lizardfolk" },
    { id: 29, raceType: "Minotaur" },
    { id: 30, raceType: "Orc" },
    { id: 31, raceType: "Satyr" },
    { id: 32, raceType: "Sea Elf" },
    { id: 33, raceType: "Shadar-kai" },
    { id: 34, raceType: "Shifter" },
    { id: 35, raceType: "Tabaxi" },
    { id: 36, raceType: "Tiefling" },
    { id: 37, raceType: "Tortle" },
    { id: 38, raceType: "Triton" },
    { id: 39, raceType: "Water Genasi" },
    { id: 40, raceType: "Yuan-ti" },  
];

    // Array to store the last two selected damage types
    let lastTworaceSelections = [];

    // Function to select a random damage type, avoiding the last two selections
    function getRandomraceType() {
        let availableraceTypes = raceTypes.filter(type => 
            !lastTworaceSelections.includes(type.raceType)
        );

        // In case all damage types are excluded by the last two selections
        if (availableraceTypes.length === 0) {
            availableraceTypes =  raceTypes;
        }

        const randomIndex = Math.floor(Math.random() * availableraceTypes.length);
        const selectedType = availableraceTypes[randomIndex];

        // Update the last two selections
        lastTworaceSelections.push(selectedType.raceType);
        if (lastTworaceSelections.length > 2) {
            lastTworaceSelections.shift(); // Keep only the last two selections
        }

        return selectedType;
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

//CHROME DRAGON TYPE       

// Define the table as an array of objects
const CRDragonTypes = [
    { id: 1, ChromeType: "Brass" },
    { id: 2, ChromeType: "Copper" },
    { id: 3, ChromeType: "Bronze" },
    { id: 4, ChromeType: "Silver" },
    { id: 5, ChromeType: "Gold" }
];

// Array to store the last two selected damage types
let lastTwoCRSelections = [];

// Function to select a random damage type, avoiding the last two selections
function getRandomChromeDragonType() {
    let availableChromeTypes = CRDragonTypes.filter(type => 
        !lastTwoCRSelections.includes(type.ChromeType)
    );

    // In case all damage types are excluded by the last two selections
    if (availableChromeTypes.length === 0) {
        availableChromeTypes = CRDragonTypes;
    }

    const randomIndex = Math.floor(Math.random() * availableChromeTypes.length);
    const selectedType = availableChromeTypes[randomIndex];

    // Update the last two selections
    lastTwoCRSelections.push(selectedType.ChromeType);
    if (lastTwoCRSelections.length > 2) {
        lastTwoCRSelections.shift(); // Keep only the last two selections
    }

    return selectedType;
}

//COLOR DRAGON TYPE       

// Define the table as an array of objects
const CLDragonTypes = [
    { id: 1, ColorType: "White" },
    { id: 2, ColorType: "Black" },
    { id: 3, ColorType: "Green" },
    { id: 4, ColorType: "Blue" },
    { id: 5, ColorType: "Red" }
];

// Array to store the last two selected damage types
let lastTwoCLSelections = [];

function getRandomColorDragonType() {
    let availableColorTypes = CLDragonTypes.filter(type => 
        !lastTwoCLSelections.includes(type.ColorType)
    );

    if (availableColorTypes.length === 0) {
        availableColorTypes = CLDragonTypes;
    }

    const randomIndex = Math.floor(Math.random() * availableColorTypes.length);
    const selectedType = availableColorTypes[randomIndex];

    lastTwoCLSelections.push(selectedType.ColorType);
    if (lastTwoCLSelections.length > 2) {
        lastTwoCLSelections.shift(); // Keep only the last two selections
    }

    return selectedType;
}

//LYCAN TYPE       

// Define the table as an array of objects
const LycanTypes = [
    { id: 1, LycanType: "Werewolf" },
    { id: 2, LycanType: "Wereboar" },
    { id: 3, LycanType: "Werebear" },
    { id: 4, LycanType: "Weretiger" },
    { id: 5, LycanType: "Wererat" }
];

let lastTwoLycanSelections = [];

function getRandomLycanType() {
    let availableLycanTypes = LycanTypes.filter(type => 
        !lastTwoLycanSelections.includes(type.LycanType)
    );

    if (availableLycanTypes.length === 0) {
        availableLycanTypes = LycanTypes;
    }

    const randomIndex = Math.floor(Math.random() * availableLycanTypes.length);
    const selectedType = availableLycanTypes[randomIndex];

    lastTwoLycanSelections.push(selectedType.LycanType);
    if (lastTwoLycanSelections.length > 2) {
        lastTwoLycanSelections.shift(); // Keep only the last two selections
    }

    return selectedType;
}

//PHOBIAS TYPE       

// Define the table as an array of objects
const PhobiaTypes = [
    { id: 1, PhobiaType: "Acrophobia  - <i>Fear of heights</i>" },
    { id: 2, PhobiaType: "Aerophobia  - <i>Fear of flying</i>" },
    { id: 3, PhobiaType: "Agoraphobia  - <i>Fear of open spaces</i>" },
    { id: 4, PhobiaType: "Ailurophobia  - <i>Fear of cats</i>" },
    { id: 5, PhobiaType: "Arachnophobia  - <i>Fear of spiders</i>" },
    { id: 6, PhobiaType: "Astraphobia  - <i>Fear of thunder and lightning</i>" },
    { id: 7, PhobiaType: "Automatonophobia  - <i>Fear of constructs or animated objects</i>" },
    { id: 8, PhobiaType: "Bibliophobia  - <i>Fear of books</i>" },
    { id: 9, PhobiaType: "Catoptrophobia  - <i>Fear of mirrors or reflections</i>" },
    { id: 10, PhobiaType: "Chionophobia  - <i>Fear of snow</i>" },
    { id: 11, PhobiaType: "Claustrophobia  - <i>Fear of confined spaces</i>" },
    { id: 12, PhobiaType: "Cynophobia  - <i>Fear of dogs</i>" },
    { id: 13, PhobiaType: "Dendrophobia  - <i>Fear of trees</i>" },
    { id: 14, PhobiaType: "Dracophobia  - <i>Fear of dragons</i>" },
    { id: 15, PhobiaType: "Entomophobia  - <i>Fear of insects</i>" },
    { id: 16, PhobiaType: "Hemophobia  - <i>Fear of blood</i>" },
    { id: 17, PhobiaType: "Hydrophobia  - <i>Fear of water</i>" },
    { id: 18, PhobiaType: "Kinemortophobia  - <i>Fear of zombies</i>" },
    { id: 19, PhobiaType: "Monophobia  - <i>Fear of being alone</i>" },
    { id: 20, PhobiaType: "Necrophobia  - <i>Fear of dead things or death-related things</i>" },
    { id: 21, PhobiaType: "Nyctophobia  - <i>Fear of darkness or night</i>" },
    { id: 22, PhobiaType: "Omphalophobia  - <i>Fear of belly buttons</i>" },
    { id: 23, PhobiaType: "Ophidiophobia  - <i>Fear of snakes</i>" },
    { id: 24, PhobiaType: "Phasmophobia  - <i>Fear of ghosts</i>" },
    { id: 25, PhobiaType: "Pogonophobia  - <i>Fear of beards</i>" },
    { id: 26, PhobiaType: "Sanguivoriphobia  - <i>Fear of vampires or bloodsuckers</i>" },
    { id: 27, PhobiaType: "Selenophobia  - <i>Fear of the moon</i>" },
    { id: 28, PhobiaType: "Vestiphobia  - <i>Fear of clothing</i>" },
    { id: 29, PhobiaType: "Zoophobia  - <i>Fear of animals</i>" }

];

let lastTwoPhobiaSelections = [];

function getRandomPhobiaType() {
    let availablePhobiaTypes = PhobiaTypes.filter(type => 
        !lastTwoPhobiaSelections.includes(type.PhobiaType)
    );

    if (availablePhobiaTypes.length === 0) {
        availablePhobiaTypes = PhobiaTypes;
    }

    const randomIndex = Math.floor(Math.random() * availablePhobiaTypes.length);
    const selectedType = availablePhobiaTypes[randomIndex];

    lastTwoPhobiaSelections.push(selectedType.PhobiaType);
    if (lastTwoPhobiaSelections.length > 2) {
        lastTwoPhobiaSelections.shift(); // Keep only the last two selections
    }

    return selectedType;
}

//BODY TYPE       

// Define the table as an array of objects
const bodyTypes = [
    { id: 1, bodyType: "Hair" },
    { id: 2, bodyType: "Eyes" },
    { id: 3, bodyType: "Skin" },
    { id: 4, bodyType: "Tongue" },
    { id: 5, bodyType: "Fingernails" },
  ];

    // Array to store the last two selected damage types
    let lastTwobodySelections = [];

    // Function to select a random damage type, avoiding the last two selections
    function getRandombodyType() {
        let availablebodyTypes = bodyTypes.filter(type => 
            !lastTwobodySelections.includes(type.bodyType)
        );

        // In case all damage types are excluded by the last two selections
        if (availablebodyTypes.length === 0) {
            availablebodyTypes =  bodyTypes;
        }

        const randomIndex = Math.floor(Math.random() * availablebodyTypes.length);
        const selectedType = availablebodyTypes[randomIndex];

        // Update the last two selections
        lastTwobodySelections.push(selectedType.bodyType);
        if (lastTwobodySelections.length > 2) {
            lastTwobodySelections.shift(); // Keep only the last two selections
        }

        return selectedType;
    }     

    //COLOR TYPE       

// Define the table as an array of objects
const huesTypes = [
    { id: 1, huesType: "Red" },
    { id: 2, huesType: "Orange" },
    { id: 3, huesType: "Yellow" },
    { id: 4, huesType: "Green" },
    { id: 5, huesType: "Blue" },
    { id: 6, huesType: "Purple" },
    { id: 7, huesType: "Brown" },
    { id: 8, huesType: "Black" },
    { id: 9, huesType: "White" },
    { id: 10, huesType: "Pink" },
    { id: 11, huesType: "Indigo" },
    { id: 12, huesType: "Violet" },
    { id: 13, huesType: "Turquoise" },
    { id: 14, huesType: "Teal" },
    { id: 15, huesType: "Maroon" },
    { id: 16, huesType: "Lavendar" },
    { id: 17, huesType: "Olive" },
    { id: 18, huesType: "Gold" },
    { id: 19, huesType: "Silver" },
    { id: 20, huesType: "Peach" },
    { id: 21, huesType: "Coral" },
    { id: 22, huesType: "Navy" },
    { id: 23, huesType: "Mint" },
    { id: 24, huesType: "Magenta" },
    { id: 25, huesType: "Lilac" },
    { id: 26, huesType: "Tan" },
];

    // Array to store the last two selected damage types
    let lastTwohuesSelections = [];

    // Function to select a random damage type, avoiding the last two selections
    function getRandomhuesType() {
        let availablehuesTypes = huesTypes.filter(type => 
            !lastTwohuesSelections.includes(type.huesType)
        );

        // In case all damage types are excluded by the last two selections
        if (availablehuesTypes.length === 0) {
            availablehuesTypes =  huesTypes;
        }

        const randomIndex = Math.floor(Math.random() * availablehuesTypes.length);
        const selectedType = availablehuesTypes[randomIndex];

        // Update the last two selections
        lastTwohuesSelections.push(selectedType.huesType);
        if (lastTwohuesSelections.length > 2) {
            lastTwohuesSelections.shift(); // Keep only the last two selections
        }

        return selectedType;
    }     
    
//LANGUAGE TYPE       

// Define the table as an array of objects
const languageTypes = [
    { id: 1, languageType: "Abyssal" },
    { id: 2, languageType: "Aquan" },
    { id: 3, languageType: "Auran" },
    { id: 4, languageType: "Celestial" },
    { id: 5, languageType: "Deep" },
    { id: 6, languageType: "Draconic" },
    { id: 7, languageType: "Dwarvish" },
    { id: 8, languageType: "Elvish" },
    { id: 9, languageType: "Giant" },
    { id: 10, languageType: "Gnomish" },
    { id: 11, languageType: "Goblin" },
    { id: 12, languageType: "Halfling" },
    { id: 13, languageType: "Ignan" },
    { id: 14, languageType: "Infernal" },
    { id: 15, languageType: "Loxodon" },
    { id: 16, languageType: "Merfolk" },
    { id: 17, languageType: "Minotaur" },
    { id: 18, languageType: "Orcish" },
    { id: 19, languageType: "Primodial" },
    { id: 20, languageType: "Sylvan" },
    { id: 21, languageType: "Terran" },
    { id: 22, languageType: "Undercommon" },
    { id: 23, languageType: "Vedalken" },
];

    // Array to store the last two selected damage types
    let lastTwoLSelections = [];

    // Function to select a random damage type, avoiding the last two selections
    function getRandomLanguageType() {
        let availableLanguageTypes = languageTypes.filter(type => 
            !lastTwoLSelections.includes(type.languageType)
        );

        // In case all damage types are excluded by the last two selections
        if (availableLanguageTypes.length === 0) {
            availableLanguageTypes =  languageTypes;
        }

        const randomIndex = Math.floor(Math.random() * availableLanguageTypes.length);
        const selectedType = availableLanguageTypes[randomIndex];

        // Update the last two selections
        lastTwoLSelections.push(selectedType.languageType);
        if (lastTwoLSelections.length > 2) {
            lastTwoLSelections.shift(); // Keep only the last two selections
        }

        return selectedType;
    }    

const tableDurations = {
  VBadChaosTable: [
    { time: "Until your next long rest", duration: "Long Rest", weight: 70 },
    { time: "Permanently", duration: "Permanent", weight: 30 },
  ],
  BadChaosTable: [
    { time: "For one minute", duration: "Minute", weight: 40 },
    { time: "For one hour", duration: "Hour", weight: 20 },
    { time: "Until your next short or long rest", duration: "Short Rest", weight: 20 },
    { time: "Until your next long rest", duration: "Long Rest", weight: 20 },
  ],
  ModChaosTable: [
    { time: "For one minute", duration: "Minute", weight: 40 },
    { time: "For one hour", duration: "Hour", weight: 20 },
    { time: "Until your next short or long rest", duration: "Short Rest", weight: 20 },
    { time: "Until your next long rest", duration: "Long Rest", weight: 20 },
  ],
  GoodChaosTable: [
    { time: "For one minute", duration: "Minute", weight: 40 },
    { time: "For one hour", duration: "Hour", weight: 20 },
    { time: "Until your next short or long rest", duration: "Short Rest", weight: 20 },
    { time: "Until your next long rest", duration: "Long Rest", weight: 20 },
  ],
  VGoodChaosTable: [
    { time: "Until your next long rest", duration: "Long Rest", weight: 70 },
    { time: "Permanently", duration: "Permanent", weight: 30 },
  ],
};

// -------------------------
// Existing helper function (unchanged)
function getWeightedRandomDuration(tableName) {
  const options = tableDurations[tableName] || [];
  const totalWeight = options.reduce((sum, opt) => sum + opt.weight, 0);
  const roll = Math.random() * totalWeight;

  let cumulative = 0;
  for (const option of options) {
    cumulative += option.weight;
    if (roll <= cumulative) return option;
  }
  return { time: "Unknown duration", duration: "Unknown" };
}

// -------------------------
// Returned effects array (unchanged)
let returnedEffects = [];

// -------------------------
// New: Load saved effects from backend on page load
async function loadReturnedEffects() {
  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/returned-effects');
    if (res.ok) {
      const data = await res.json();
      returnedEffects = data.returnedEffects || [];
      updateEffectTally();
    } else {
      console.error("Failed to load returned effects:", res.statusText);
    }
  } catch (err) {
    console.error("Error fetching returned effects:", err);
  }
}
loadReturnedEffects(); // Call on page load

// -------------------------
// Update the tally display (unchanged except saving is now backend)
function updateEffectTally() {
  const tallyContainer = document.getElementById("effectTally");
  const clearTallyWrapper = document.getElementById("clearTallyWrapper");

  if (returnedEffects.length === 0) {
    tallyContainer.classList.add("hidden");
    tallyContainer.innerHTML = "";
    if (clearTallyWrapper) clearTallyWrapper.classList.add("hidden");
    return;
  }

  tallyContainer.classList.remove("hidden");
  if (clearTallyWrapper) clearTallyWrapper.classList.remove("hidden");

  const groupedEffects = {};
  returnedEffects.forEach(e => {
    const duration = e.duration || "Unknown";
    if (!groupedEffects[duration]) groupedEffects[duration] = [];
    groupedEffects[duration].push(e);
  });

  const preferredOrder = ["Permanent", "Long Rest", "Short Rest", "Hour", "Minute", "Trigger", "Immediate", "Unknown"];
  const sortedDurations = Object.keys(groupedEffects).sort((a, b) => {
    const aIndex = preferredOrder.indexOf(a);
    const bIndex = preferredOrder.indexOf(b);
    return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex);
  });

  let output = `<p class="text-xl font-bold text-black mt-4 text-left mb-4">All Returned Effects (Grouped by Duration):</p>`;

  sortedDurations.forEach(duration => {
    const safeDuration = encodeURIComponent(duration);
    const isLongRestCombo = duration === "Long Rest";

    const durationDisplayNames = {
      "Immediate": "Instantaneous Effects",
      "Minute": "Minutely Effects",
      "Hour": "Hourly Effect",
      "Short Rest": "Short Rest Effects",
      "Long Rest": "Long Rest Effects",
      "Permanent": "Permanent Effects",
      "Trigger": "Triggered Effects",
      "Unknown": "Unknown Duration"
    };

    const durationButtonLabels = {
      "Immediate": "Clear Instantaneous",
      "Minute": "Clear Minutely",
      "Hour": "Clear Hourly",
      "Short Rest": "Clear Short Rest",
      "Long Rest": "Clear Short and Long Rest",
      "Permanent": "Clear Permanent",
      "Trigger": "Clear Triggered",
      "Unknown": "Clear Unknown"
    };

    const displayName = durationDisplayNames[duration] || `${duration} Effects`;
    const clearLabel = durationButtonLabels[duration] || `Clear ${duration}`;

    const clearFunction = isLongRestCombo
      ? `clearMultipleDurations(['Short Rest','Long Rest'])`
      : `clearDuration(decodeURIComponent('${safeDuration}'))`;

    output += `
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-1">
        <h3 class="text-black font-semibold text-left underline underline-offset-4 m-0">
          ${displayName}
        </h3>
          
        <button onclick="${clearFunction}"
                  class="text-xs bg-red-200 hover:bg-red-300 text-black font-medium px-2 py-1 rounded whitespace-nowrap">
            ${clearLabel}
        </button>

        </div>
<ul class="text-lg list-disc list-outside text-black text-left mb-2 ${duration.toLowerCase() === "trigger" ? "trigger-list" : ""}">
  ${groupedEffects[duration].map((e, index) => {
    if (duration.toLowerCase() === "trigger") {
      return `
    <li style="display: flex; align-items: baseline; gap: 0.5rem;">
  <button
    onclick="clearSingleEffect('${duration}', ${index})"
    class="text-red-600 font-bold hover:text-red-800 rounded px-1"
    aria-label="Clear this effect"
    title="Clear this effect"
    style="background:none; border:none; cursor:pointer; font-size:1rem; line-height:1; position: relative; top: 0px;">
    ✕
  </button>
  <span><strong>${e.name}:</strong> ${e.effect}</span>
</li>
      `;
    } else {
      return `<li><strong>${e.name}:</strong> ${e.effect}</li>`;
    }
  }).join("")}
</ul>
      </div>
    `;
  });

  tallyContainer.innerHTML = output;
}

// -------------------------
// Backend save helper
async function saveReturnedEffects() {
  try {
    const res = await fetch('https://feywildvault-backend.onrender.com/api/returned-effects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ returnedEffects })
    });
    if (!res.ok) console.error("Failed to save returned effects:", res.statusText);
  } catch (err) {
    console.error("Error saving returned effects:", err);
  }
}

// -------------------------
// Clear functions updated to use backend
async function clearSingleEffect(duration, index) {
  const effectsForDuration = returnedEffects.filter(e => e.duration === duration);
  if (index < 0 || index >= effectsForDuration.length) return;
  const effectToRemove = effectsForDuration[index];
  returnedEffects = returnedEffects.filter(e => e !== effectToRemove);
  await saveReturnedEffects();
  updateEffectTally();
}

async function clearMultipleDurations(durations) {
  returnedEffects = returnedEffects.filter(e => !durations.includes(e.duration));
  await saveReturnedEffects();
  updateEffectTally();
}

async function clearDuration(duration) {
  returnedEffects = returnedEffects.filter(e => e.duration !== duration);
  await saveReturnedEffects();
  updateEffectTally();
}

async function clearTally() {
  returnedEffects = [];
  await saveReturnedEffects();
  const tallyContainer = document.getElementById("effectTally");
  tallyContainer.innerHTML = "";
  tallyContainer.classList.add("hidden");
  document.getElementById("clearTallyWrapper").classList.add("hidden");
  const placeholder = document.getElementById('placeholder-text');
  if (placeholder) placeholder.style.display = 'block';
  const resultBox = document.getElementById("chaosResult");
  resultBox.innerHTML = `<p id="placeholder-text" class="text-gray-500 italic">- Click "Generate" to find chaos -</p>`;
}

function generateSingleEffect() {
  const chaosFilter = document.getElementById("chaosfilterButton").textContent.trim();
  const levelDropdown = document.getElementById("levelDropdown").value;

  const probabilitySets = {
    1: [
      { table: VBadChaosTable, weight: 2.5, color: "vbad-color" },
      { table: BadChaosTable, weight: 22.5, color: "bad-color" },
      { table: ModChaosTable, weight: 50, color: "mod-color" },
      { table: GoodChaosTable, weight: 22.5, color: "good-color" },
      { table: VGoodChaosTable, weight: 2.5, color: "vgood-color" },
    ],
    2: [ // Player 1–4
      { table: VBadChaosTable, weight: 0, color: "vbad-color" },
      { table: BadChaosTable, weight: 0, color: "bad-color" },
      { table: ModChaosTable, weight: 100, color: "mod-color" },
      { table: GoodChaosTable, weight: 0, color: "good-color" },
      { table: VGoodChaosTable, weight: 0, color: "vgood-color" },
    ],
    3: [ // Player 5–9
      { table: VBadChaosTable, weight: 0, color: "vbad-color" },
      { table: BadChaosTable, weight: 20, color: "bad-color" },
      { table: ModChaosTable, weight: 60, color: "mod-color" },
      { table: GoodChaosTable, weight: 20, color: "good-color" },
      { table: VGoodChaosTable, weight: 0, color: "vgood-color" },
    ],
    4: [ // Player 10–20
      { table: VBadChaosTable, weight: 2.5, color: "vbad-color" },
      { table: BadChaosTable, weight: 22.5, color: "bad-color" },
      { table: ModChaosTable, weight: 50, color: "mod-color" },
      { table: GoodChaosTable, weight: 22.5, color: "good-color" },
      { table: VGoodChaosTable, weight: 2.5, color: "vgood-color" },
    ],
    5: [ // Spell 1–2
      { table: VBadChaosTable, weight: 0, color: "vbad-color" },
      { table: BadChaosTable, weight: 0, color: "bad-color" },
      { table: ModChaosTable, weight: 100, color: "mod-color" },
      { table: GoodChaosTable, weight: 0, color: "good-color" },
      { table: VGoodChaosTable, weight: 0, color: "vgood-color" },
    ],
    6: [ // Spell 3–4
      { table: VBadChaosTable, weight: 0, color: "vbad-color" },
      { table: BadChaosTable, weight: 30, color: "bad-color" },
      { table: ModChaosTable, weight: 40, color: "mod-color" },
      { table: GoodChaosTable, weight: 30, color: "good-color" },
      { table: VGoodChaosTable, weight: 0, color: "vgood-color" },
    ],
    7: [ // Spell 5–9
      { table: VBadChaosTable, weight: 2.5, color: "vbad-color" },
      { table: BadChaosTable, weight: 37.5, color: "bad-color" },
      { table: ModChaosTable, weight: 20, color: "mod-color" },
      { table: GoodChaosTable, weight: 37.5, color: "good-color" },
      { table: VGoodChaosTable, weight: 2.5, color: "vgood-color" },
    ],
  };

  let setKey = null;

  if (chaosFilter === "True Chaos") {
    setKey = 1;
  } else if (chaosFilter === "Player Level Filter") {
    if (levelDropdown === "1-4") setKey = 2;
    else if (levelDropdown === "5-9") setKey = 3;
    else if (levelDropdown === "10-20") setKey = 4;
  } else if (chaosFilter === "Spell Level Filter") {
    if (levelDropdown === "1-2") setKey = 5;
    else if (levelDropdown === "3-4") setKey = 6;
    else if (levelDropdown === "5-9") setKey = 7;
  }

  if (!setKey) {
    alert("Please select a level range to generate chaos.");
    return null;
  }

  const selectedSet = probabilitySets[setKey];
  const totalWeight = selectedSet.reduce((sum, { weight }) => sum + weight, 0);
  const random = Math.random() * totalWeight;
  let cumulative = 0;
  let selectedTable;
  let colorClass;

  for (const { table, weight, color } of selectedSet) {
    cumulative += weight;
    if (random <= cumulative) {
      selectedTable = table;
      colorClass = color;
      break;
    }
  }

  if (!selectedTable || selectedTable.length === 0) {
    console.error("Chaos table not found or is empty.");
    return null;
  }

  const effectResult = selectedTable[Math.floor(Math.random() * selectedTable.length)];

  // Generate all random components
  const damageType = getRandomDamageType();
  const creature = getRandomCreatureType();
  const language = getRandomLanguageType();
  const ability = getRandomAbilityType();
  const lycans = getRandomLycanType();
  const phobias = getRandomPhobiaType();
  const dragoncolors = getRandomColorDragonType();
  const dragonchrome = getRandomChromeDragonType();
  const race = getRandomraceType();
  const hue = getRandomhuesType();
  const body = getRandombodyType();

  let chosenTime = { time: "", duration: effectResult.duration || "Unknown" };

  if (effectResult.duration === "Variable") {
    const tableKey = Object.entries({
      VBadChaosTable,
      BadChaosTable,
      ModChaosTable,
      GoodChaosTable,
      VGoodChaosTable,
    }).find(([_, table]) => table === selectedTable)?.[0];

    if (tableKey) {
      chosenTime = getWeightedRandomDuration(tableKey);
    }
  }

  const finalEffect = effectResult.chaoseffect
    .replace(/{element}/g, damageType.damageType)
    .replace(/{creature}/g, creature.creatureType)
    .replace(/{ability}/g, ability.AbilityType)
    .replace(/{lycan}/g, lycans.LycanType)
    .replace(/{phobia}/g, phobias.PhobiaType)
    .replace(/{DColor}/g, dragoncolors.ColorType)
    .replace(/{DChrome}/g, dragonchrome.ChromeType)
    .replace(/{language}/g, language.languageType)
    .replace(/{race}/g, race.raceType)
    .replace(/{color}/g, hue.huesType)
    .replace(/{body}/g, body.bodyType)
    .replace(/{time}/g, chosenTime.time);

  return {
    name: effectResult.name || "Unnamed Effect",
    effect: finalEffect,
    duration: chosenTime.duration || effectResult.duration || "Unknown",
    colorClass,
  };
}

// -------------------------
// Updated generatechaos
async function generatechaos() {
  const effectData = generateSingleEffect();
  if (!effectData) return;

  const resultBox = document.getElementById("chaosResult");
  resultBox.innerHTML = `
    <div id="chaosNameWrapper" class="inline-block relative">
      <strong id="chaosName" class="block ${effectData.colorClass}">${effectData.name}</strong>
      <div id="chaosUnderline"
           class="absolute h-[2px] bg-[rgb(165,112,42)] rounded"
           style="bottom: 18px; left: 50%; transform: translateX(-50%);"></div>
    </div>
    <p>${effectData.effect}</p>
  `;

  const nameEl = document.getElementById("chaosName");
  const underlineEl = document.getElementById("chaosUnderline");
  const nameWidth = nameEl.offsetWidth;
  underlineEl.style.width = `${nameWidth + 25}px`;

  const placeholder = document.getElementById('placeholder-text');
  if (placeholder) placeholder.style.display = 'none';

  returnedEffects.push({
    name: effectData.name,
    effect: effectData.effect,
    duration: effectData.duration,
  });
  await saveReturnedEffects();
  updateEffectTally();

  console.log("Chaos Result:", effectData.name, effectData.effect);
}

// -------------------------
// Updated generatecontrolledchaos
function generatecontrolledchaos() {
  const effect1 = generateSingleEffect();
  const effect2 = generateSingleEffect();

  if (!effect1 || !effect2) {
    alert("Error generating chaos effects.");
    return;
  }

  window.controlledChaosOptions = [effect1, effect2];

  const resultBox = document.getElementById("chaosResult");
  resultBox.innerHTML = `
    <div class="controlled-chaos-option" style="position: relative; margin-bottom: 1rem; padding: 1rem;">
      <div class="inline-block relative" style="margin-right: 1rem;">
        <strong class="block ${effect1.colorClass}" style="font-size: 3rem;">${effect1.name}</strong>
        <div class="absolute h-[2px] bg-[rgb(165,112,42)] rounded" style="bottom: 6px; left: 50%; transform: translateX(-50%); width: calc(100% + 20px);"></div>
      </div>
      <button style="
        position: absolute;
        right: 5rem;
        top: 1.5rem;
        font-size: 2rem;
        background-color: #d1d5db;
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        border: none;
        cursor: pointer;"
        onclick="chooseControlledChaos(0)">
        Choose
      </button>
      <p>${effect1.effect}</p>
    </div>
    <div class="controlled-chaos-option" style="position: relative; padding: 1rem;">
      <div class="inline-block relative" style="margin-right: 1rem;">
        <strong class="block ${effect2.colorClass}" style="font-size: 3rem;">${effect2.name}</strong>
        <div class="absolute h-[2px] bg-[rgb(165,112,42)] rounded" style="bottom: 6px; left: 50%; transform: translateX(-50%); width: calc(100% + 20px);"></div>
      </div>
      <button style="
        position: absolute;
        right: 5rem;
        top: 1.5rem;
        font-size: 2rem;
        background-color: #d1d5db;
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        border: none;
        cursor: pointer;"
        onclick="chooseControlledChaos(1)">
        Choose
      </button>
      <p>${effect2.effect}</p>
    </div>
  `;

  const placeholder = document.getElementById('placeholder-text');
  if (placeholder) placeholder.style.display = 'none';
}

// -------------------------
// Updated chooseControlledChaos
async function chooseControlledChaos(index) {
  if (!window.controlledChaosOptions || !window.controlledChaosOptions[index]) return;

  const chosenEffect = window.controlledChaosOptions[index];

  returnedEffects.push({
    name: chosenEffect.name,
    effect: chosenEffect.effect,
    duration: chosenEffect.duration,
  });
  await saveReturnedEffects();
  updateEffectTally();

  delete window.controlledChaosOptions;

  const resultBox = document.getElementById("chaosResult");
  resultBox.innerHTML = `<p>"<strong>${chosenEffect.name}</strong>" has been added to effects.</p>`;
}

// -------------------------
// Rest of your code (tables, helpers, getRandom... functions) remain unchanged

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String },
  profilePic: { type: String },
  password: { type: String, required: true, select: false },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  courier: [{
    id: String,
    from: String,
    html: String, // renamed from itemHtml
    subcategory: String, // optional: helps categorize the item
    category: String,
    timestamp: { type: Date, default: Date.now }
  }],
  inventory: [
  {
    id: String,
    subcategory: String,
    category: String,
    html: String
  }
  ],
  chaosEffects: [
  {
    name: String,
    effect: String,
    count: Number,
    duration: String,
    timestamp: { type: Date, default: Date.now }
  }
  ],
 deckHistory: [
  {
    cardName: String,
    effect: String,      // <-- add this
    deckType: String,
    drawnAt: { type: Date, default: Date.now }
  }
],
  patreon: {
      isLinked: {type: Boolean, default: false},                           // optional: your creator campaign id
      tierId: { type: String, default: null },
      tierName: { type: String, default: null }, 
      patreonName: { type: String, default: null }                              // optional: Patreon tier id
    }
});

module.exports = mongoose.model('User', userSchema);
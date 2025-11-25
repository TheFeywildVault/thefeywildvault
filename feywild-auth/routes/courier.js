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

  // ✅ Backfill IDs for any old items
  let changed = false;
  user.courier.forEach(item => {
    if (!item.id) {
      item.id = Date.now().toString() + Math.random().toString();
      changed = true;
    }
  });

  if (changed) await user.save();

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
    id: Date.now().toString() + Math.random().toString(), // <- Add this line
    html: item.html,
    classification: item.classification,
    from: req.session.user.username,
    timestamp: new Date()
  });

  await recipient.save();

  res.json({ success: true });
});

// DELETE /api/courier/delete
router.post('/delete', requireLogin, async (req, res) => {
  const { itemId } = req.body;
  const user = await User.findById(req.session.user.id);
  if (!user || !user.courier) return res.status(404).json({ message: 'Courier inbox not found.' });

  const originalLength = user.courier.length;
  user.courier = user.courier.filter(item => item.id !== itemId);

  if (user.courier.length === originalLength) {
    return res.status(404).json({ message: 'Item not found.' });
  }

  await user.save();
  res.json({ success: true });
});

module.exports = router;
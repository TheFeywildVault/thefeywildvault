const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to require login
function requireLogin(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: 'Not logged in' });
  next();
}

// Add a chaos effect
router.post('/add', requireLogin, async (req, res) => {
  const { name, effect, duration } = req.body;
  if (!name || !effect) return res.status(400).json({ error: 'Missing effect data' });

  try {
    const user = await User.findById(req.session.userId);
    user.chaosEffects.push({ name, effect, duration });
    await user.save();
    res.json({ success: true, chaosEffects: user.chaosEffects });
  } catch (err) {
    console.error('Add chaos effect error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all chaos effects for current user
router.get('/all', requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).select('chaosEffects');
    res.json({ chaosEffects: user.chaosEffects || [] });
  } catch (err) {
    console.error('Get chaos effects error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

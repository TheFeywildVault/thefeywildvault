// routes/inventory.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to ensure user is logged in
function requireLogin(req, res, next) {
  if (!req.session.user?.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

// GET /api/inventory - Load saved items from account
router.get('/', requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id);
    if (!user || !user.inventory) {
      return res.json({ items: [] });
    }
    res.json({ items: user.inventory });
  } catch (err) {
    console.error("Error loading inventory:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/inventory/add - Add item to account inventory
router.post('/add', requireLogin, async (req, res) => {
  const { html, classification, category } = req.body;

console.log("Received item:", req.body);

if (!html || !classification) {
  return res.status(400).json({ message: 'Missing item data' });
}

const itemId = Date.now().toString() + Math.random().toString(36).substring(2);


  try {
    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.inventory = user.inventory || [];
    user.inventory.push({ html, classification, category, id: itemId });
    await user.save();

    res.status(200).json({ success: true, itemId });
  } catch (err) {
    console.error("Error saving inventory item:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/inventory/delete - Remove item from account inventory
router.post('/delete', requireLogin, async (req, res) => {
  const { itemId } = req.body;

  if (!itemId) {
    return res.status(400).json({ message: 'Missing item ID' });
  }

  try {
    const user = await User.findById(req.session.user.id);
    if (!user || !user.inventory) return res.status(404).json({ message: 'Inventory not found' });

    const originalLength = user.inventory.length;
    user.inventory = user.inventory.filter(item => item.id !== itemId);

    if (user.inventory.length === originalLength) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await user.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error deleting inventory item:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

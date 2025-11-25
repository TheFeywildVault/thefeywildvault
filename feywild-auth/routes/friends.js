const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to ensure user is logged in
function requireLogin(req, res, next) {
  if (!req.session.user?.id) {
    return res.status(401).json({ message: 'Not logged in' });
  }
  next();
}

// GET /api/friends
router.get('/', requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id)
    .populate('friends', 'username displayName profilePic');
  
  console.log('Populated friends:', user.friends); // ✅ useful log
  
  res.json({
  friends: user.friends.map(friend => ({
    _id: friend._id, // ✅ Add this line
    username: friend.username,
    displayName: friend.displayName || friend.username,
    profilePic: friend.profilePic || '/img/default-avatar.jpg'
  }))
});

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/friends/add
// POST /api/friends/add (reciprocal add only)
router.post('/add', requireLogin, async (req, res) => {
  const { username } = req.body;

  try {
    if (!username) return res.status(400).json({ message: 'Username is required' });

    const currentUser = await User.findById(req.session.user.id);
    const friendToAdd = await User.findOne({ username });

    if (!friendToAdd) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (currentUser._id.equals(friendToAdd._id)) {
      return res.status(400).json({ message: 'You cannot add yourself as a friend' });
    }

    const alreadyFriends = currentUser.friends.includes(friendToAdd._id);
    if (alreadyFriends) {
      return res.status(400).json({ message: 'Already friends' });
    }

    // Add each other
    currentUser.friends.push(friendToAdd._id);
    if (!friendToAdd.friends.includes(currentUser._id)) {
      friendToAdd.friends.push(currentUser._id);
    }

    await currentUser.save();
    await friendToAdd.save();

    res.json({ message: 'Friend added successfully (reciprocal)' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// POST /api/friends/remove
router.post('/remove', requireLogin, async (req, res) => {
  const { username } = req.body;
  try {
    const currentUser = await User.findById(req.session.user.id);
    const friendToRemove = await User.findOne({ username });

    if (!friendToRemove) {
      return res.status(404).json({ message: 'User not found' });
    }

    currentUser.friends = currentUser.friends.filter(
      friendId => friendId.toString() !== friendToRemove._id.toString()
    );
    await currentUser.save();

    res.json({ message: 'Friend removed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

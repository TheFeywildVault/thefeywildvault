const express = require("express");
const router = express.Router();

const SiteStats = require("../models/SiteStats");

// GET current global item generation count
router.get("/items-generated", async (req, res) => {
  try {
    const stats = await SiteStats.findOneAndUpdate(
      { key: "global" },
      { $setOnInsert: { itemsGenerated: 0 } },
      {
        new: true,
        upsert: true
      }
    );

    res.json({
      success: true,
      itemsGenerated: stats.itemsGenerated
    });
  } catch (error) {
    console.error("Error fetching item generation count:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch item generation count"
    });
  }
});

// POST increment global item generation count
router.post("/items-generated/increment", async (req, res) => {
  try {
    const quantity = Math.max(1, parseInt(req.body.quantity, 10) || 1);

    const stats = await SiteStats.findOneAndUpdate(
      { key: "global" },
      { 
        $inc: { itemsGenerated: quantity },
        $setOnInsert: { key: "global" }
      },
      {
        new: true,
        upsert: true
      }
    );

    res.json({
      success: true,
      itemsGenerated: stats.itemsGenerated
    });
  } catch (error) {
    console.error("Error incrementing item generation count:", error);

    res.status(500).json({
      success: false,
      message: "Failed to increment item generation count"
    });
  }
});

module.exports = router;
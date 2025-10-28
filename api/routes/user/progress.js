const express = require("express");
const router = express.Router();
const db = require("../../config/mysql");

// Update user progress after session
router.post("/", async (req, res) => {
  const { userId, bookingId, progressNotes } = req.body;

  try {
    await db.query(
      `INSERT INTO progress (user_id, booking_id, notes)
       VALUES (?,?,?)`,
      [userId, bookingId, progressNotes]
    );

    res.json({ message: "Progress updated" });
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
});

// Fetch user progress
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const [rows] = await db.query(
      `SELECT p.*, b.topic, b.date
       FROM progress p
       JOIN bookings b ON b.id=p.booking_id
       WHERE p.user_id=? ORDER BY b.date DESC`,
      [userId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
});

module.exports = router;

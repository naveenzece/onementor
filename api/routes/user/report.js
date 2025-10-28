const express = require("express");
const router = express.Router();
const db = require("../../config/mysql");

// Submit feedback after session
router.post("/", async (req, res) => {
  const { bookingId, userId, coachId, rating, comments } = req.body;

  try {
    await db.query(
      `INSERT INTO session_reports (booking_id, user_id, coach_id, rating, comments)
       VALUES (?,?,?,?,?)`,
      [bookingId, userId, coachId, rating, comments]
    );

    res.json({ message: "Feedback submitted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error" });
  }
});

// Get feedback for a coach
router.get("/coach/:coachId", async (req, res) => {
  const { coachId } = req.params;

  try {
    const [rows] = await db.query(
      `SELECT r.*, u.name AS student
       FROM session_reports r
       JOIN users u ON u.id=r.user_id
       WHERE r.coach_id=?`,
      [coachId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
});

module.exports = router;

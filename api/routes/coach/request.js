const express = require("express");
const router = express.Router();
const db = require("../../config/mysql");

//  Get all incoming requests for a coach
router.get("/:coachId", async (req, res) => {
  const { coachId } = req.params;

  try {
const [rows] = await db.query(
  `SELECT 
      b.id, 
      u.name AS student, 
      DATE(b.created_at) AS date, 
      TIME(s.start_time) AS time
   FROM bookings b
   JOIN users1 u ON b.user_id = u.id
   JOIN managecoachslots s ON b.slot_id = s.id
   WHERE b.coach_id = ?
   ORDER BY b.created_at DESC
   LIMIT 0, 1000`,
  [coachId]
);


    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;

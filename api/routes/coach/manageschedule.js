const express = require("express");
const router = express.Router();
const slotsController = require("../../controller/coach/manageschedule");
const db = require('../../config/mysql'); // adjust path if needed


router.get("/:coachId", slotsController.getSlotsByCoach);
router.post("/", slotsController.createSlot);
router.delete("/:id", slotsController.deleteSlot);



// GET all slots (for dashboard)
// routes/manageschedules.js
router.get("/", async (req, res) => {
  const { coach_id } = req.query;

  if (!coach_id) {
    return res.status(400).json({ error: "coach_id is required" });
  }

  try {
    const [slots] = await db.query(
      "SELECT * FROM managecoachslots WHERE coach_id = ? ORDER BY date, start_time",
      [coach_id]
    );
    res.json(slots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});


module.exports = router;

const db = require("../../config/mysql");

// Get available slots for a coach
exports.getSlotsByCoach = async (req, res) => {
  const { coachId } = req.params;
  try {
    const [results] = await db.query(
      "SELECT id, date, start_time, end_time, is_booked FROM managecoachslots WHERE coach_id = ? AND is_booked = 0",
      [coachId]
    );
    res.json(results);
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
};

// Create a new slot
exports.createSlot = async (req, res) => {
  const { coach_id, date, start_time, end_time } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO managecoachslots (coach_id, date, start_time, end_time) VALUES (?, ?, ?, ?)",
      [coach_id, date, start_time, end_time]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
};

// Delete a slot
exports.deleteSlot = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM managecoachslots WHERE id = ?", [id]);
    res.json({ message: "Slot deleted" });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: "Database error" });
  }
};

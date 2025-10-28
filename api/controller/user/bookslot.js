const db = require("../../config/mysql");

exports.bookSlot = async (req, res) => {
  const { coachId, slotId, userId } = req.body;

  if (!coachId || !slotId || !userId) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // Atomic update
    const [updateResult] = await connection.query(
      "UPDATE managecoachslots SET is_booked = 1 WHERE id = ? AND is_booked = 0",
      [slotId]
    );

    if (updateResult.affectedRows === 0) {
      await connection.rollback();
      return res.status(400).json({ error: "Slot not found or already booked" });
    }

    const [bookingResult] = await connection.query(
      "INSERT INTO bookings (user_id, coach_id, slot_id) VALUES (?, ?, ?)",
      [userId, coachId, slotId]
    );

    await connection.commit();

    res.json({
      message: "Session booked successfully!",
      bookingId: bookingResult.insertId,
      slotId,
      coachId,
      userId,
    });
  } catch (err) {
    await connection.rollback();
    console.error(err);
    res.status(500).json({ error: "Database error" });
  } finally {
    connection.release();
  }
};




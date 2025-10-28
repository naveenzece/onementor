const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createCoachProfile } = require("../../controller/coach/profile");
const db = require("../../config/mysql");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// POST coach profile
router.post("/", upload.single("resume"), createCoachProfile);


// GET /coaches - Get list of all coaches
// GET /coaches - Get list of all coaches
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, name, category, skills FROM coachprofile");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});



module.exports = router;

const db = require("../../config/mysql");

exports.createCoachProfile = (req, res) => {
  const { name, category, bio, skills, slots } = req.body; // changed expertise → category
  const resume = req.file ? req.file.filename : null;

  const query = `
    INSERT INTO coachprofile (name, category, bio, skills, slots, resume)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, category, bio, skills, slots, resume], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Coach profile created!", id: result.insertId });
  });
};

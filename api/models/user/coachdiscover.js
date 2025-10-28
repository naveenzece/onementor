// File: models/user/Coach.js
const db = require("../../config/mysql");

const Coach = {
  getAll: async () => {
    try {
      const [rows] = await db.query("SELECT * FROM coachprofile"); // now works
      return rows;
    } catch (err) {
      console.error("Error fetching coaches from DB:", err);
      throw err;
    }
  },
};

module.exports = Coach;

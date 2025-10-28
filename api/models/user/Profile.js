const db = require('../../config/mysql.js');

const saveProfile = (skills, interests, resumePath, callback) => {
  const sql = "INSERT INTO profiles (skills, interests, resume) VALUES (?, ?, ?)";
  db.query(sql, [JSON.stringify(skills), JSON.stringify(interests), resumePath], callback);
};

module.exports = { saveProfile };

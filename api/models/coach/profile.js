
const db = require("../../config/mysql");

const Coach = {
  create: (data, callback) => {
    const { fullName, bio, experience, skills, profilePic } = data;
    const query = "INSERT INTO coachprofile  (fullName, bio, experience, skills, profilePic) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [fullName, bio, experience, JSON.stringify(skills), profilePic], callback);
  }
};

module.exports = Coach;

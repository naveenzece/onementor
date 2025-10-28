const db = require('../config/mysql.js');

// Create new user
const createUser = (data, callback) => {
  const { name, email, phone, role } = data;
  const query = "INSERT INTO users1 (name, email, phone, role) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, phone, role], callback);
};

// Find user by email
const findUserByEmail = (email, callback) => {
  const query = "SELECT * FROM users1 WHERE email = ?";
  db.query(query, [email], callback);
};

// Save OTP
const saveOTP = (email, otp, callback) => {
  const query = "UPDATE users1 SET otp = ?, otp_expiry = DATE_ADD(NOW(), INTERVAL 5 MINUTE) WHERE email = ?";
  db.query(query, [otp, email], callback);
};

// Verify OTP
const verifyOTP = (email, otp, callback) => {
  const query = "SELECT * FROM users1 WHERE email = ? AND otp = ? AND otp_expiry > NOW()";
  db.query(query, [email, otp], callback);
};

module.exports = {
  createUser,
  findUserByEmail,
  saveOTP,
  verifyOTP
};

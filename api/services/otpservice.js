const pool = require('../config/mysql');
const bcrypt = require('bcryptjs');
const { generateOtpSecure } = require('../util/otp');
const { sendOtpEmail } = require('./mailer');

const OTP_EXPIRES_MIN = parseInt(process.env.OTP_EXPIRES_MIN || '10', 10);

async function createAndSendOtp(email) {
  const otp = generateOtpSecure(6);
  const salt = await bcrypt.genSalt(10);
  const otpHash = await bcrypt.hash(otp, salt);
  const expiresAt = new Date(Date.now() + OTP_EXPIRES_MIN * 60 * 1000); // expiry

  const conn = await pool.getConnection();
  try {
    // store
    await conn.query(
      `INSERT INTO otps (email, otp_hash, expires_at, used) VALUES (?, ?, ?, 0)`,
      [email, otpHash, expiresAt]
    );
  } finally {
    conn.release();
  }

  // send email
  await sendOtpEmail(email, otp);
  return { message: 'OTP sent' };
}

async function verifyOtp(email, otpFromUser) {
  const conn = await pool.getConnection();
  try {
    // get most recent unused otp for email
    const [rows] = await conn.query(
      `SELECT id, otp_hash, expires_at, used FROM otps WHERE email = ? ORDER BY created_at DESC LIMIT 1`,
      [email]
    );
    if (!rows || rows.length === 0) return { error: 'No OTP found, request a new one' };

    const row = rows[0];
    if (row.used) return { error: 'OTP already used' };

    const now = new Date();
    if (now > new Date(row.expires_at)) return { error: 'OTP expired' };

    const valid = await bcrypt.compare(otpFromUser, row.otp_hash);
    if (!valid) return { error: 'Invalid OTP' };

    // mark as used
    await conn.query(`UPDATE otps SET used = 1 WHERE id = ?`, [row.id]);
    return { success: true };
  } finally {
    conn.release();
  }
}

module.exports = { createAndSendOtp, verifyOtp };

const express = require('express');
const router = express.Router();
const { createAndSendOtp, verifyOtp } = require('../services/otpservice');
const pool = require('../config/mysql');
const jwt = require('jsonwebtoken');

router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });

    // ✅ Check if email exists in users1 table
    const [rows] = await pool.query(`SELECT id, name, role FROM users1 WHERE email = ? LIMIT 1`, [email]);
    
    if (!rows.length) {
      // Email not found in DB
      return res.status(404).json({ error: 'Email not registered. Please signup first.' });
    }

    // Email exists → send OTP
    await createAndSendOtp(email);
    return res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('Error send-otp:', err);
    return res.status(500).json({ error: 'Unable to send OTP' });
  }
});



// Add this to your existing router (or create a new one)
router.post('/logout', (req, res) => {
  if (!req.session) return res.status(400).json({ error: 'No active session' });

  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Failed to logout' });
    }

    // Clear the session cookie
    res.clearCookie('connect.sid'); // adjust if you use a different cookie name
    return res.json({ message: 'Logged out successfully' });
  });
});




router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: 'email and otp required' });

    const result = await verifyOtp(email, otp);
    if (result.error) return res.status(400).json({ error: result.error });

    // Get user role from DB
    const [rows] = await pool.query(`SELECT role, id, name FROM users1 WHERE email = ? LIMIT 1`, [email]);
    const user = rows && rows.length ? rows[0] : { role: 'User', id: null, name: null };

    // ✅ Store user info in session
    req.session.user = {
      id: user.id,
      name: user.name,
      email,
      role: user.role
    };
     
console.log('Session after login:', req.session);
    // Optional: still issue JWT if needed
    const token = jwt.sign({ email, role: user.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '7d',
    });

    return res.json({
      token,
      message: 'Logged in',
      role: user.role,
      id:user.id,
      email
    });

  } catch (err) {
    console.error('Error verify-otp:', err);
    return res.status(500).json({ error: 'Unable to verify OTP' });
  }
});

module.exports = router;

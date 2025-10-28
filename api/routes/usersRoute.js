const express = require('express');
const router = express.Router();
const { createUser } = require('../services/userservices');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;
    if (!name || !email || !role) {
      return res.status(400).json({ message: 'Name, email, and role are required' });
    }

    const result = await createUser({ name, email, phone, role });
    return res.json(result);
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

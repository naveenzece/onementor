const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { saveProfile } = require('../../models/user/Profile');

const router = express.Router();

// Ensure uploads folder exists
const uploadFolder = 'uploads/';
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Profile submission route
router.post('/', upload.single('resume'), (req, res) => {
  try {
    const { skills, interests } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'Resume file is required.' });
    }

    if (!skills || !interests) {
      return res.status(400).json({ error: 'Skills and interests are required.' });
    }

    let skillsArray, interestsArray;
    try {
      skillsArray = JSON.parse(skills);
      interestsArray = JSON.parse(interests);
    } catch (err) {
      return res.status(400).json({ error: 'Skills and interests must be valid JSON arrays.' });
    }

    const resumePath = file.path;

    saveProfile(skillsArray, interestsArray, resumePath, (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Profile saved successfully', result });
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

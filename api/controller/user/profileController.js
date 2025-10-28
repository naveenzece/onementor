// api/controller/user/profileController.js
const { saveProfile } = require('../../models/user/Profile');

const submitProfile = (req, res) => {
  const { skills, interests } = req.body;
  const resumePath = req.file ? req.file.path : null;

  if (!skills || !interests || !resumePath) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  saveProfile(JSON.parse(skills), JSON.parse(interests), resumePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Profile submitted successfully!' });
  });
};

module.exports = { submitProfile };

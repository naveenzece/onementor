const pool = require('../../config/mysql');

const getCoaches = async (req, res) => {
  try {
    const { expertise, skill, date } = req.query;

    // Start query WITHOUT semicolon
let query = `
  SELECT 
    u.id,
    u.name,
    cp.category AS expertise,
    cp.skills,
    cm.date
  FROM users1 u
  LEFT JOIN coachprofile cp ON u.id = cp.id
  LEFT JOIN managecoachslots cm ON u.id = cm.coach_id
  WHERE u.role = 'coach'
`;

const params = [];

if (expertise) {
  query += ` AND cp.category LIKE ?`;
  params.push(`%${expertise}%`);
}

if (skill) {
  query += ` AND cp.skills LIKE ?`; // Or use JSON_CONTAINS if JSON
  params.push(`%${skill}%`);
}

if (date) {
  query += ` AND cm.date = ?`;
  params.push(date);
}

query += ` ORDER BY u.id`;


    const [rows] = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching coaches:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getCoaches };

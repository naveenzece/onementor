const pool = require('../config/mysql');

async function createUser({ name, email, phone, role }) {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO users1 (name, email, phone, role) VALUES (?, ?, ?, ?)`,
      [name, email, phone || null, role]
    );
    return { message: "User created successfully", id: result.insertId };
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return { message: 'Email already exists' };
    }
    throw err;
  } finally {
    conn.release();
  }
}

module.exports = { createUser };

// File: config/mysql.js
const mysql = require('mysql2/promise'); // ← use promise wrapper

// Create a connection pool (recommended)
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Suriya@333',
  database: 'onementor',
});

console.log('Connected to MySQL server');

module.exports = db;

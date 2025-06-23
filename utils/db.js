// utils/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // default is empty in XAMPP
  database: 'azalee_db', // change this to your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
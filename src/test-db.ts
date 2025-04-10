import pool from './config/db';

(async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS currentTime');
    console.log('Database connected:', rows);
  } catch (err) {
    console.error('Database connection error:', err);
  } finally {
    pool.end();
  }
})();
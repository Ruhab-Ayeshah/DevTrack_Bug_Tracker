import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Database connection failed:', err.message);
    } else {
        console.log('Database connected successfully:', res.rows[0]);
    }
});

export default pool;
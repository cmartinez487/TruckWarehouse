import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: '/home/crmm/Repositorios/Typescript/TruckWarehouse/dotenv.env' });

const pool = mysql.createPool({
  host: process.env.DB_HOST?.trim(), // Elimina espacios o comas adicionales
  user: process.env.DB_USER?.replace(/['"]+/g, '').trim(), // Elimina comillas
  password: process.env.DB_PASSWORD?.replace(/['"]+/g, '').trim(),
  database: process.env.DB_NAME?.replace(/['"]+/g, '').trim(),
  port: Number(process.env.DB_PORT) || 3306,
});

export default pool;
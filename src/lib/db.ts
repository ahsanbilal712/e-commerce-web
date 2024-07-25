// src/lib/db.ts
import postgres from 'postgres';

const sql = postgres({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '5432', 10),
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false }, // Ensures SSL is used, and avoids self-signed certificate issues
});

export default sql;

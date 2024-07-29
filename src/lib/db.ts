// src/lib/db.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize the connection using environment variables
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);

export default db;

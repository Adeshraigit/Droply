// reset-db.js
// for resetting the database
// This script drops all tables in the database and can be used to reset the database to a clean state.         
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function resetDatabase() {
  const sql = neon(process.env.DATABASE_URL);
  
  console.log('Dropping existing tables...');
  await sql`DROP TABLE IF EXISTS files CASCADE`;
  await sql`DROP TABLE IF EXISTS __drizzle_migrations CASCADE`;
  // Add other tables if needed
  
  console.log('Database reset successfully');
}

resetDatabase().catch(console.error);
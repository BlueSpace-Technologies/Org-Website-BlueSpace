import { Client } from 'pg';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const client = new Client({
    connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle(client);

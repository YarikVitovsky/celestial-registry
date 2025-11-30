import pool from './db'
import fs from 'fs'
import path from 'path'


async function initDb() {
    try {
        const client = await pool.connect();
        const result = await client.query("select count(*) from stars");
        const count = parseInt(result.rows[0].count, 10)
        
        if (count === 0) {
            console.log('database is empty')

            const dbScriptPath = path.join(process.cwd(), 'db-script.sql');
            const dbScript = fs.readFileSync(dbScriptPath, 'utf-8');

            await client.query(dbScript)

            console.log('data populated')
        } else {
            console.log('data base not empty')
        }

        client.release();
    } catch (error) {
        console.error('Error init database', error)
    }
}

export default initDb;
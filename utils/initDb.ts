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

            const initialStatePath = path.join(process.cwd(), 'initial_state.json');
            const initialState = JSON.parse(fs.readFileSync(initialStatePath, 'utf-8'));

            for (const item of initialState) {
                const query = `
                    INSERT INTO stars (id, name, type, distance, discoverydate, description, spectralcolor, magnitude, image)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                `;
                await client.query(query, [
                    item.id,
                    item.name,
                    item.type,
                    item.distance,
                    item.discoveryDate,
                    item.description,
                    item.spectralColor,
                    item.magnitude,
                    item.image,
                ]);
            }

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
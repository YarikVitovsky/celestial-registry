import { NextResponse } from 'next/server';
import pool from '../../../utils/db';

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM stars');
        const stars = result.rows; // Extract rows from the result
        return NextResponse.json(stars);
    } catch (error) {
        console.error('Error fetching stars:', error);
        return NextResponse.json({ error: 'Failed to fetch stars' }, { status: 500 });
    }
}
import { NextResponse } from 'next/server';
import queryDatabase from '../../../utils/db';

export async function GET() {
    try {
        const stars = await queryDatabase('SELECT * FROM stars', []);
        return NextResponse.json(stars);
    } catch (error) {
        console.error('Error fetching stars:', error);
        return NextResponse.json({ error: 'Failed to fetch stars' }, { status: 500 });
    }
}
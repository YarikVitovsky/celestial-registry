import pool from '../../../utils/db';
import { notFound } from 'next/navigation';

export default async function StarDetails({ params }: { params: { id: string } }) {
    const { id } = await params;

    // Use pool.query directly
    const result = await pool.query('SELECT * FROM stars WHERE id = $1', [id]);
    const star = result.rows[0];

    if (!star) {
        notFound(); // Handle the case where no star is found
    }

    return (
        <div className='star-page'>
            <div>
                <img className='star-image' src={star.image} alt={star.type} />
            </div>
            <div className='star-details'>
                <p style={{ color: star.spectralcolor }} className='text-4xl p-5'>{star.name}</p>
                <p>{star.distance} light-years</p>
                <p>Discovered on: {star.discoverydate}</p>
                <p>{star.description}</p>
                <p>Magnitude: {star.magnitude}</p>
            </div>
        </div>
    );
}
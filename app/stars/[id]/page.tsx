import queryDatabase from '../../../utils/db';
import { notFound } from 'next/navigation';

interface Star {
    id: string;
    name: string;
    image: string;
    type: string;
    spectralcolor: string;
    distance: number;
    discoverydate: string;
    description: string;
    magnitude: number;
}

export default async function StarDetails({ params }: { params: { id: string } }) {
    const { id } = await params;
    const result = await queryDatabase('select * from stars where id = $1', [id])
    const star: Star = result[0]

    if (!star) {
        notFound(); // Handle the case where no star is found
    }

    return (
        <div className='star-page'>
            <div>
                <img className='star-image' src={star.image} alt={star.type}/>
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
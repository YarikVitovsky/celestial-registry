import { queryDatabase } from '../../../utils/db';
import { notFound } from 'next/navigation';


export default async function StarDetails({ params }: { params: { id: string } }) {
    const { id } = await params;

    const stars = await queryDatabase('SELECT * FROM stars WHERE id = $1', [id]);
    const star = stars[0];

    if (!star) {
        return notFound();
    }

    return (
        <div className='p-text flex flex-col min-h-screen space-y-4 pb-10'>
            <img src={star.image} alt={star.type} className='rounded-4xl' />
            <p style={{ color: star.spectralcolor }}>{star.name}</p>
            <p>{star.distance} light-years</p>
            <p>Discovered on: {star.discoverydate}</p> {/* Render the formatted date */}
            <p className='max-w-xl'>{star.description}</p>
            <p>Magnitude: {star.magnitude}</p>
        </div>
    );
}
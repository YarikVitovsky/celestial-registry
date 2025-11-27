// import { queryDatabase } from '../../../utils/db';
import { notFound } from 'next/navigation';
import data from '../../../initial_state.json'


export default async function StarDetails({ params }: { params: { id: string } }) {
    const { id } = await params;
    const star = data.find(item => item.id === id)

    if (!star) {
        notFound(); // Handle the case where no star is found
    }

    return (
        <div className='p-text flex flex-col min-h-screen space-y-4 pb-10'>
            <img src={star.image} alt={star.type} className='rounded-4xl' />
            <p style={{ color: star.spectralColor }}>{star.name}</p>
            <p>{star.distance} light-years</p>
            <p>Discovered on: {star.discoveryDate}</p>
            <p className='max-w-xl'>{star.description}</p>
            <p>Magnitude: {star.magnitude}</p>
        </div>
    );
}
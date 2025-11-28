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
        <div className='star-page'>
            <div>
                <img className='star-image' src={star.image} alt={star.type}/>
            </div>
            <div className='star-details'>
                <p style={{ color: star.spectralColor }} className='text-4xl p-5'>{star.name}</p>
                <p>{star.distance} light-years</p>
                <p>Discovered on: {star.discoveryDate}</p>
                <p>{star.description}</p>
                <p>Magnitude: {star.magnitude}</p>
            </div>
        </div>
    );
}
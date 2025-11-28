'use client'

import Link from 'next/link'
import Image from 'next/image'



interface CardProps {
    id: string;
    title: string;
    image: string;
    type: string;
    color: string;
    description: string;
}

export default function Card({ id, title, image, type, color, description }: CardProps) {

    return (
        
        <Link href={`/stars/${id}`}>
            <div className='card'>
                <div>
                    <img src={image} alt={type} className='card-image' />
                </div>
                <div>
                    <h3 className='card-title' style={{color}}>
                        {title}
                    </h3>
                    <p className='card-description'>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
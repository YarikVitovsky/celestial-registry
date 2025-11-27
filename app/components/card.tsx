'use client'

import './card.css'
import Link from 'next/link'
import Image from 'next/image'


interface CardProps {
    id: string;
    title: string;
    image: string;
    type: string;
    color: string
}

export default function Card({ id, title, image, type, color }: CardProps) {

    return (
        
        <Link href={`/stars/${id}`}>
            <div className='card'>
                <div>
                    <img src={image} alt={type} className='card-image' />
                </div>
                <div>
                    <p className='p-text' style={{color}}>
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}
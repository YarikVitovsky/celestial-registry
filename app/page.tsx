'use client'

import Card from './components/card';
import { useState, useEffect } from 'react'


interface Star {
  id: string;
  name: string;
  image: string;
  type: string;
  spectralcolor: string;
  description: string;
}

export default function CardGrid() {

  const [viewMode, setViewMode] = useState('apps')
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('/api/stars')
        const data: Star[] = await response.json()
        setStars(data)
      } catch (error) {
        console.error('Error fetching stars:', error)
      }
    }

    fetchStars()
  }, [])


  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'apps' ? 'density_medium' : 'apps'))
  }

  const handleClick = () => {
    
  }

  return (
    <main>
      <button className='view-mode button' onClick={toggleViewMode}>
        <span className="material-symbols-outlined">
          {viewMode}
        </span>
      </button>
      <button className="add-new-star button" onClick={handleClick}>
        <span className="material-symbols-outlined">
          add
        </span>
      </button>
      <div className='h2-text'>
        <h2>click on a star to read more!</h2>
      </div>
      <div className={viewMode}>
        {stars.map(item => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.image}
            type={item.type}
            color={item.spectralcolor}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}

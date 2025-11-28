'use client'

// import { queryDatabase } from '../utils/db';
import Card from './components/card';
import { useState } from 'react'
import data from '../initial_state.json'


export default function CardGrid() {

  const [viewMode, setViewMode] = useState('apps')

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'apps' ? 'density_medium' : 'apps'))
  }

  return (
    <main>
      <button className='icon-button' onClick={toggleViewMode}>
        <span className="material-symbols-outlined">
          {viewMode}
        </span>
      </button>
      <div className='h2-text'>
        <h2>click on a star to read more!</h2>
      </div>
      <div className={viewMode}>
        {data.map(item => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.image}
            type={item.type}
            color={item.spectralColor}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}

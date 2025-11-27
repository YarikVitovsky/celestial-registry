'use client'

// import { queryDatabase } from '../utils/db';
import Card from './components/card';
import { useState } from 'react'
import data from '../initial_state.json'


export default function CardGrid() {



  return (
    <main>
      <button className='icon-button'>
        <span className="material-symbols-outlined flex">
          apps
        </span>
      </button>
      <div className='h2-text'>
        <h2>click on a star to read more!</h2>
      </div>
      <div className='grid'>
        {data.map(item => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.image}
            type={item.type}
            color={item.spectralColor}
          />
        ))}
      </div>
    </main>
  );
}

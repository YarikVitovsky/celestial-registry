import data from '../initial_state.json'
import Card from './components/card'


export default function CardGrid() {
  return (
    <main>
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
          />
        ))}
      </div>
    </main>
  );
}

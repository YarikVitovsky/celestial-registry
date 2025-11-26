
import Card from './components/card';
import { queryDatabase } from '../utils/db';

export default async function CardGrid() {
  const stars = await queryDatabase('SELECT * FROM stars');

  return (
    <main>
      <div className='h2-text'>
        <h2>click on a star to read more!</h2>
      </div>
      <div className='grid'>
        {stars.map(item => (
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

import { useState, useEffect } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';

const MainTVes = () => {
  const [tvdetail, setTVdetail] = useState([]);

  useEffect(() => {
    const tvDetailTemp = [];
    Movies_Data.filter((tvitem) => {
        if (tvitem.type === "TV") {
          tvDetailTemp.push(tvitem);
        }
        return setTVdetail([...tvDetailTemp]);
    });
  }, []);
  
  return (
    <div className='Main text-center overflow-hidden '>
      <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
        <div className='TVMoviesBox flex flex-wrap justify-center gap-10 p-5 '>
            {tvdetail.map((tvitem) => (
              <MovieItems
                key={tvitem.id}
                id={tvitem.id}
                title={tvitem.title}
                thumbnail={tvitem.thumbnail}
                rate={tvitem.rating}
              />
            ))}
        </div>
    </div>
  )
}

export default MainTVes;
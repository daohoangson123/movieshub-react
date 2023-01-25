import React, { useState, useEffect } from 'react';
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
        <div className='TVMoviesBox flex flex-wrap justify-center gap-5 p-5 '>
            {tvdetail.map((tvitem, id) => (
              <MovieItems
                key={id}
                id={tvitem.id}
                title={tvitem.title}
                thumbnail={tvitem.thumbnail}
              />
            ))}
        </div>
    </div>
  )
}

export default MainTVes;
import React, { useState, useEffect } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';

const MainMovies = () => {
  const [moviedetail, setMoviedetail] = useState([]);

  useEffect(() => {
    const movieDetailTemp = [];
      for (let i = 0; i < Movies_Data.length; i++) {
        if (Movies_Data[i].type === "movie") {
            movieDetailTemp.push(Movies_Data[i]);
            setMoviedetail([...movieDetailTemp]);
        }
      }
  }, []);
  
  return (
    <div className='Main text-center overflow-hidden '>
        <div className='MoviesBox flex flex-wrap justify-center gap-5 p-5 '>
            {moviedetail.map((movie, id) => (
              <MovieItems
                key={id}
                id={movie.id}
                title={movie.title}
                thumbnail={movie.thumbnail}
              />
            ))}
        </div>
    </div>
  )
}

export default MainMovies;
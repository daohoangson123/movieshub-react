import { useState, useEffect } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';

const MainMovies = () => {
  const [moviedetail, setMoviedetail] = useState([]);

  useEffect(() => {
    const movieDetailTemp = [];
    Movies_Data.filter((movie) => {
        if (movie.type === "movie") {
          movieDetailTemp.push(movie);
        }
        return setMoviedetail([...movieDetailTemp]);
    });
  }, []);
  
  return (
    <div className='MainMovies text-center overflow-hidden '>
      <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
      <div className='Main text-center overflow-hidden '>
          <div className='MoviesBox flex flex-wrap justify-center gap-10 p-5 '>
              {moviedetail.map((movie) => (
                <MovieItems
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  thumbnail={movie.thumbnail}
                  rate={movie.rating}
                />
              ))}
          </div>
      </div>
    </div>
  )
}

export default MainMovies;
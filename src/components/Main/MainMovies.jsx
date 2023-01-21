import React from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';

export default function MainMovies() {
  return (
    <div className='Main text-center overflow-hidden '>
        <div className='MoviesBox flex flex-wrap justify-center gap-5 p-5 '>
            {Movies_Data.map((movie) => (
              <MovieItems
                key={movie.id}
                id={movie.id}
                title={movie.title}
                thumbnail={movie.thumbnail}
              />
            ))}
        </div>
    </div>
  )
}

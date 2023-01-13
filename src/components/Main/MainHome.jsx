import React, { useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';
import style from './MainHome.module.css';

export default function MainHome() {
  const [flick, setFlick] = useState(style.Title);
  return (
    <div className='Main text-center '>
      <h2 className={[' inline-block text-[2rem] sm:text-[3rem] text-gray-800 ',`${flick}` ].join("")}
        onClick={() => {
          if(flick === style.Title) {
            setFlick('')} else {
              setFlick(style.Title)
            }
        }}
        >
        Pick your poisons
        <br />
        <span className=' text-[1rem]'>(click to turn off/on)</span>
      </h2>
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

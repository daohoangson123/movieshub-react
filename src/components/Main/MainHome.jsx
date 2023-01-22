import React, { useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';
import style from './MainHome.module.css';

function MainHome() {
  const [flick, setFlick] = useState(style.Title);
  return (
    <div className='Main text-center overflow-hidden '>
      <h2 className={[' inline-block text-[2rem] sm:text-[3rem] text-gray-800 ',`${flick}` ].join("")}
        onClick={() => {
          if(flick === style.Title) {
            setFlick('')} else {
              setFlick(style.Title)
            }
        }}
        >
        Running Ads
        <br />
        <span className=' text-[1rem]'>(click to stop)</span>
      </h2>
        <div className='MoviesBox flex flex-wrap justify-center gap-5 p-5 '>
            {Movies_Data.map((movie) => (
              <MovieItems
                key={movie.id}
                id={movie.id}
                title={movie.title}
                titlesub={movie.titlesub}
                thumbnail={movie.thumbnail}
              />
            ))}
        </div>
    </div>
  )
}

export default  MainHome;
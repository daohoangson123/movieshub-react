import React, { useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';
import style from './MainHome.module.css';

const MainHome = () => {
  const [runningAd, setRunningAd] = useState(style.Title);
  return (
    <div className='Main text-center overflow-hidden '>
      <h2 className={[' inline-block text-[2rem] sm:text-[3rem] text-gray-800 ',`${runningAd}` ].join("")}
        onClick={() => {
          if(runningAd === style.Title) {
            setRunningAd('')} else {
              setRunningAd(style.Title)
            }
        }}
        >(Running Ads)
        <span className=' text-[1rem]'>(click to stop)</span>
      </h2>
        <div className='MoviesBox flex flex-wrap justify-center gap-10 p-5 '>
            {Movies_Data.map((movie, id) => (
              <MovieItems
                key={id}
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

export default MainHome;
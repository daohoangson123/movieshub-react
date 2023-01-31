import React, {} from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';
import './MainHome.css'
// import style from './MainHome.module.css';

const MainHome = () => {
  // const [runningAd, setRunningAd] = useState(style.Title);
  return (
    <div className='MainHome text-center overflow-hidden '>
      {/* <h2 className={[' inline-block text-[2rem] sm:text-[3rem] text-gray-800 ',`${runningAd}` ].join("")}
        onClick={() => {
          if(runningAd === style.Title) {
            setRunningAd('')
          } else {
              setRunningAd(style.Title)
            }
        }}
        >(Running Ads)/(click to stop)
      </h2> */}
      <h2 className=' text-6xl '>
        Home
      </h2>
      <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
        <div className='MoviesBox flex flex-wrap justify-center gap-10 p-5 '>
            {Movies_Data.map((movie) => (
              <MovieItems className='MovieItems '
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

export default MainHome;
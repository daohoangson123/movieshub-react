import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import style from './MovieDetail.module.css'

const MovieDetail = () => {
    const { id } = useParams();
    const [moviedetail, setMoviedetail] = useState('');

    useEffect(() => {
        const movieDetailTemp = Movies_Data.find((movie) => movie.id === id);
          setMoviedetail(movieDetailTemp);
    }, [id]);

    const handleClick = () => {
      window.history.back();
    }

  return (
    <div className='MovieDetailItems mx-10 '>
        <div className=' text-5xl text-yellow-300 text-center font-black py-2'>{moviedetail.title}</div>
        <div className=' flex flex-wrap gap-5 '>
          <div className='relative mx-auto '>
            <img className='MovieDetailImg max-w-[300px] sm:max-h-[450px]
              border-solid border-2 '
              src={moviedetail.thumbnail} alt={moviedetail.title} />
              <div className=' flex justify-evenly text-black font-semibold '>
                <button type='button' className='TrailerBtn mt-2 p-3 rounded-md bg-green-500 hover:bg-emerald-700 hover:scale-105 hover:text-white
                    transition-all duration-500  '>
                  Trailer
                </button>
                <button type='button' className='WatchBtn mt-2 p-3 rounded-md bg-red-500 hover:bg-red-700 hover:scale-105 hover:text-white
                    transition-all duration-500  '>
                  Watch Now!
                </button>
                <button type='button' className='WatchBtn mt-2 p-3 rounded-md bg-gray-200 hover:bg-gray-700 hover:scale-105 hover:text-white
                    transition-all duration-500  '>
                  DownLoad
                </button>
              </div>
          </div>
          <div className='MovieDetailDescript mx-auto sm:basis-[70%] '>
            {moviedetail.descript}
          </div>
        </div>
        <span className={['BackHomeBtn fixed bottom-2 right-2 inline-block p-1 z-50 ', style.BackHome].join("")}>
          <button onClick={handleClick}>Go Back</button>
        </span>
    </div>
  );
};

export default MovieDetail;
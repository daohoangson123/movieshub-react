import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movies_Data } from '../../data/MoviesData/MoviesData';
import style from './MovieDetail.module.css'

const MovieDetail = () => {
    const { id } = useParams();
    const [moviedetail, setMoviedetail] = useState('');

    useEffect(() => {
        const movieDetailTemp = movies_Data.find((movie) => movie.id.toString() === id);
          setMoviedetail(movieDetailTemp);
    }, [id]);

    const handleClick = () => {
      window.history.back();
    }

  return (
    <div className='MovieDetailItems mx-3 '>
        <div className=' text-3xl sm:text-5xl text-yellow-300 text-center font-black mb-2 '>
          {moviedetail.title}
        </div>
        <div className=' flex flex-wrap gap-5 '>
          <div className='relative mx-auto '>
            <img className='MovieDetailImg max-w-[250px] sm:max-w-[350px] max-h-[400px] 
              border-solid border-2 '
              src={moviedetail.thumbnail} alt={moviedetail.title} />
              <div className=' flex justify-between text-black font-semibold '>
                <button type='button' className='TrailerBtn mt-2 p-1 rounded-md bg-green-500 hover:bg-emerald-700 hover:text-white
                    transition-all duration-500  '>
                  Trailer
                </button>
                <button type='button' className='WatchBtn mt-2 p-2 rounded-md bg-red-500 hover:bg-red-700 hover:text-white
                    transition-all duration-500  '>
                  Watch Now!
                </button>
                <button type='button' className='WatchBtn mt-2 p-1 rounded-md bg-gray-200 hover:bg-gray-700 hover:text-white
                    transition-all duration-500  '>
                  DownLoad
                </button>
              </div>
          </div>
          <div className='MovieDetailDescript mx-auto sm:basis-[70%] '>
            {moviedetail.descript}
          </div>
        </div>
        <span className={['BackHomeBtn fixed top-[80px] right-2 inline-block p-1 z-10 text-black bg-white bg-opacity-50 ', style.BackHome].join("")}>
          <button onClick={handleClick}>Go Back</button>
        </span>
    </div>
  );
};

export default MovieDetail;
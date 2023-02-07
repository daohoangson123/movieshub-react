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
          <img className='MovieDetailImg sm:max-w-[300px] min-h-[400px] sm:max-h-[450px]
            border-solid border-[1px] '
            src={moviedetail.thumbnail} alt={moviedetail.title} />
          <div className='MovieDetailDescript mx-auto sm:basis-[70%] '>
            {moviedetail.descript}
            <br />
            <button type='button' className='WatchBtn mt-5 p-5 rounded-md bg-pink-800 hover:bg-pink-500
                transition-all duration-500  '>
              Watch Now!
            </button>
          </div>
        </div>
        <span className={['BackHomeBtn fixed bottom-2 right-2 inline-block p-1 z-50 ', style.BackHome].join("")}>
          <button onClick={handleClick}>Go Back</button>
        </span>
    </div>
  );
};

export default MovieDetail;
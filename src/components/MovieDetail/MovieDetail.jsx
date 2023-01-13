import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import { AiOutlineRollback } from 'react-icons/ai'
import style from './MovieDetail.module.css'
// import style from './MovieDetail.module.css'

const MovieDetail = () => {
    const { id } = useParams();
    const [moviedetail, setMoviedetail] = useState('');

    useEffect(() => {
        const movieDetailTemp = Movies_Data.find((movie) => movie.id === id);
            setMoviedetail(movieDetailTemp);
        }, [id]);

  return (
    <div className=' mx-5 mb-5 '>
      <span className={[' fixed bottom-2 right-2 inline-block p-1 z-50 ', style.BackHome].join(" ")}>
        <Link to='/' className=' flex gap-2 ' >
          <AiOutlineRollback className=' text-[25px] ' />
          Get back Home
        </Link>
      </span>
        <div className=' text-5xl text-yellow-300 text-center font-black py-5'>{moviedetail.title}</div>
        <div className=' flex flex-wrap gap-5 '>
          {/* <div className=' m-auto max-w-[45rem] min-w-[20rem] max-h-[50rem] min-h-[55rem] bg-center bg-no-repeat bg-contain sm:bg-cover basis-[65%] ' style={{ backgroundImage: `url("${moviedetail.thumbnail}")` }}></div> */}
          <img className=' m-auto sm:max-w-[20rem] sm:max-h-[25rem] border-solid border-[1px] ' src={moviedetail.thumbnail} alt={moviedetail.title} />
          <div className=' mx-auto sm:basis-[70%] '>
            {moviedetail.descrip}
            <br />
            {moviedetail.direct}
            <br />
            {moviedetail.writer}
            <br />
            {moviedetail.cast}
            <br />
            <button type='button' className=' bg-pink-800 hover:bg-pink-500 p-2 rounded-md '>Watch Now!</button>
          </div>
        </div>
    </div>
  );
};

export default MovieDetail;
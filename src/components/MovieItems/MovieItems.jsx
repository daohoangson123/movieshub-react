import React from 'react';
import { Link } from 'react-router-dom';

const MovieItems = ({ id, title, thumbnail}) => {
  return (
    <div className='MovieItems w-[250px] h-[500px] sm:w-[300px] sm:h-[666px] '>
        <div className='MovieThumbCtrl w-full h-[70%] border-solid border-[2px]'
            style={{backgroundImage: `url("${thumbnail}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"}}>
        </div>
        <div className='MovieTextsCtrl text-center p-2 '>
            <div className='MovieTitle text-[20px] font-bold '>
                {title}
            </div>
            <div className='Rating m-2 '>
              Rating:
            </div>
            <button className='MovieDetailLink font-semibold p-2 rounded-sm hover:text-black hover:bg-gray-300'>
                <Link to={`/movies/${id}`}>
                    Watch Now!
                </Link>
            </button>
        </div>
    </div>
  )
}

export default MovieItems;
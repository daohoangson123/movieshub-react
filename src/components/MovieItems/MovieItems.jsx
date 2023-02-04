import React from 'react';
import { Link } from 'react-router-dom';

const MovieItems = ({ id, title, thumbnail, rate}) => {
  return (
    <div className='MovieItems w-[250px] h-[500px] '>
        <div className='MovieThumbCtrl overflow-hidden h-[75%] opacity-80 hover:opacity-100
          border-solid border-[2px] border-b-0 border-gray-300 rounded-t-lg '>
          <img src={thumbnail} alt={title} className=' transition-all ease-in-out duration-700 hover:scale-110 ' />
        </div>
        <div className='MovieTextsCtrl h-[140px] text-center p-2
        border-solid border-[2px] border-t-0 border-gray-300 rounded-b-lg '>
            <div className='MovieTitle text-[16px] font-bold '>
                {title}
            </div>
            <div className='Rating m-2 '>
              Rating: {rate}/10
            </div>
            <button className='MovieDetailLink font-semibold p-2 rounded-sm hover:text-black hover:bg-gray-300'>
                <Link to={`/watch/${id}`}>
                    More info...
                </Link>
            </button>
        </div>
    </div>
  )
}

export default MovieItems;
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItems = ({ id, title, thumbnail}) => {
  return (
    <div className='MovieItems w-[300px] h-[600px] '>
        <div className='MovieThumbCtrl h-[75%] border-solid border-[2px] border-gray-300'
            style={{backgroundImage: `url("${thumbnail}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"}}>
        </div>
        <div className='MovieTextsCtrl h-[160px] text-center p-2 '>
            <div className='MovieTitle text-[20px] font-bold '>
                {title}
            </div>
            <div className='Rating m-2 '>
              Rating: ...
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
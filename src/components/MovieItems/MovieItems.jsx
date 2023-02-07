import React from 'react';
import { Link } from 'react-router-dom';

const MovieItems = ({id, title, thumbnail, rate, ...props}) => {
  return (
    <div className='MovieItems group w-[250px] h-[500px] border-2 rounded-xl
      hover:scale-105 hover:brightness-110
        transition-all ease-in-out duration-500 '
        style={{width: props.width, height: props.height, fontSize: props.text}}>
        <div className='MovieThumbCtrl overflow-hidden h-[70%] rounded-t-lg '>
          <img src={thumbnail} alt={title} className='' />
        </div>
        <div className='MovieTextsCtrl h-[32%] text-center p-2 rounded-b-2xl '>
            <div className='MovieTitle text-[16px] font-bold'>
                {title}
            </div>
            <hr />
            <div className='Rating m-1 '>
              Rating: {rate}/10
            </div>
            <button className='MovieDetailLink font-semibold p-1 
              group-hover:text-black group-hover:bg-gray-300 group-hover:animate-bounce
                  transition-all ease-in-out duration-1000 delay-500 '>
                <Link to={`/watch/${id}`}>
                    More info
                </Link>
            </button>
        </div>
    </div>
  )
}

export default MovieItems;
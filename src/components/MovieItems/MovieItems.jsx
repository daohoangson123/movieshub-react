import React from 'react'
import { Link } from 'react-router-dom'

const MovieItems = ({ id, title, thumbnail}) => {
  return (
    <div className='MovieItems w-[250px] h-[500px]
                                sm:w-[300px] sm:h-[600px] '>
        <div className='MovieThumbCtrl
                        w-full h-[75%]
                        border-solid border-[2px]'
            style={{backgroundImage: `url("${thumbnail}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"}}>
        </div>
        <div className='MovieTextsCtrl
                        text-center h-[25%] bg-white bg-opacity-10 '>
            <div className='MovieTitle text-[20px] p-2 font-bold '>
                {title}
            </div>
            <button className='MovieDetailLink
                                font-semibold p-2 rounded-sm mt-1
                                hover:text-black hover:bg-gray-300'>
                <Link to={`/movies/${id}`}>
                    Watch Now!
                </Link>
            </button>
        </div>
    </div>
  )
}

export default MovieItems;
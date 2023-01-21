import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieItems({ id, title, thumbnail}) {
  return (
    <div className='MovieItems '>
        <div className='MovieThumbCtrl w-[200px] sm:w-[250px] h-[300px] sm:h-[350px] border-solid border-[1px] '
            style={{
                background: `url("${thumbnail}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"}}
            >
        </div>
        <div className=' w-[200px] sm:w-[250px] h-[120px] text-center bg-white bg-opacity-10 '>
            <div className=' text-[20px] font-bold '>
                {title}
            </div>
            <br />
            <button className=' font-semibold hover:text-black hover:bg-gray-300'>
                <Link to={`/movies/${id}`}>
                    More Details...
                </Link>
            </button>
        </div>
    </div>
  )
}

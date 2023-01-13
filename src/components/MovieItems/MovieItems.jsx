import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieItems({ id, title, thumbnail}) {
  return (
    <div className='MovieItems '>
        <div className='MovieThumbCtrl w-[280px] h-[400px] border-solid border-[1px] '
            style={{
                background: `url("${thumbnail}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"}}
            >
        </div>
        <div className=' text-center py-2 bg-white bg-opacity-10 '>
            <div className=' text-[24px] font-bold '>
                {title}
            </div>
            <button className=' hover:text-black hover:bg-gray-300'>
                <Link to={`/movies/${id}`}>
                    More Details...
                </Link>
            </button>
        </div>
    </div>
  )
}

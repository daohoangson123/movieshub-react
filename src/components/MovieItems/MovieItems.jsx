import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieItems({ id, title, titlesub, thumbnail}) {
  return (
    <div className='MovieItems '>
        <div className='MovieThumbCtrl w-[250px] h-[400px] border-solid border-[1px] '
            style={{
                background: `url("${thumbnail}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"}}
            >
        </div>
        <div className=' h-[140px] text-center p-5 bg-white bg-opacity-10 '>
            <div className=' text-[22px] font-bold '>
                {title}
                <br />
                {titlesub}
            </div>
            <br />
            <button className=' hover:text-black hover:bg-gray-300'>
                <Link to={`/movies/${id}`}>
                    More Details...
                </Link>
            </button>
        </div>
    </div>
  )
}

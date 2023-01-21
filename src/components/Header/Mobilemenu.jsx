import React from 'react';
import { Link } from 'react-router-dom';

export default function Mobilemenu() {
  return (
    <div>
        <ul className=' absolute top-[72px] right-0 grid sm:hidden bg-black bg-opacity-90 '>
                <li className=' px-5 p-2 hover:bg-white hover:text-black '>
                    <Link to='/'>Home</Link>
                </li>
                <li className=' px-5 p-2 hover:bg-white hover:text-black '>
                    <Link to='/trending'>Trending</Link>
                </li>
                <li className=' px-5 p-2 hover:bg-white hover:text-black '>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className=' px-5 p-2 hover:bg-white hover:text-black '>
                    <Link to='/tvseries'>TV Series</Link>
                </li>
                <button type='button' className=' px-5 p-2 hover:bg-white hover:text-black '>
                    <Link to='/search'>
                        Search
                    </Link>
                </button>
            </ul>
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Mobilemenu() {
  return (
    <div>
        <ul className=' absolute top-[104px] right-0 grid gap-3 bg-black bg-opacity-90 sm:hidden '>
                <li className=' px-5 hover:bg-white hover:text-black '>
                    <Link to='/'>Home</Link>
                </li>
                <li className=' px-5 hover:bg-white hover:text-black '>
                    <Link to='/trending'>Trending</Link>
                </li>
                <li className=' px-5 hover:bg-white hover:text-black '>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className=' px-5 hover:bg-white hover:text-black '>
                    <Link to='/tvseries'>TV Series</Link>
                </li>
                <button type='button' className=' px-5 hover:bg-white hover:text-black '>Search</button>
            </ul>
    </div>
  )
}

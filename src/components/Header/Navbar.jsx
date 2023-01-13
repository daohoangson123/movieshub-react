import React from 'react';
import { BiHome } from 'react-icons/bi';
import { ImFilm } from 'react-icons/im';
import { FaFireAlt, FaSearch, FaTv } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <ul className=' hidden sm:flex flex-wrap gap-5 '>
                <li>
                    <Link to='/' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded-sm p-2 '>
                        <BiHome className=' text-[1.3rem] text-emerald-600 ' />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/trending' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded-sm p-2 '>
                        <FaFireAlt className=' text-[1.3rem] text-red-600 ' />
                        Trending
                    </Link>
                </li>
                <li>
                    <Link to='/movies' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded-sm p-2 '>
                        <ImFilm className=' text-[1.3rem] text-sky-600 ' />
                        Movies
                    </Link>
                </li>
                <li>
                    <Link to='/tvseries' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded-sm p-2 '>
                        <FaTv className=' text-[1.3rem] text-purple-600 ' />
                        TV Series
                    </Link>
                </li>
                <button type='button' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded-sm p-2 '>
                    <FaSearch className=' text-[1.3rem] text-green-600 ' />
                    Search
                </button>
            </ul>
    </div>
  )
}

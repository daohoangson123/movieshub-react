import React, { useState } from 'react';
import { FaFilm } from 'react-icons/fa';
import Mobilemenu from './Mobilemenu';
import Navbar from './Navbar';

export default function Header() {

const [mobilemenu, setMobilemenu] = useState("none")

const handleOnclick = () => {
    if(mobilemenu === "none"){
        setMobilemenu("block")
    } else {
        setMobilemenu("none")
    }
}

  return (
    <div className='Header items-center justify-between sm:justify-start flex gap-2 p-2 w-full bg-zinc-900 '>
        <div className='Logo font-black flex gap-2 p-2 '>
            <FaFilm className=' text-[2rem] text-orange-500 translate-y-[-3px] ' />
            MoviesHub
        </div>
        <nav className='Navbar font-medium '>
            <Navbar />
        <button className=' sm:hidden p-4 hover:bg-white hover:text-black '
            onClick={handleOnclick}
        >
            Menu
        </button>
        <div style={{display: mobilemenu}}>
            <Mobilemenu />
        </div>
        </nav>
    </div>
  )
}

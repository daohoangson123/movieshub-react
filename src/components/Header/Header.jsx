import React, { useState, useEffect } from 'react';
import { FaFilm } from 'react-icons/fa';
import Mobilemenu from './Mobilemenu';
import Navbar from './Navbar';

export default function Header() {

const [mobilemenuvisible, setMobilemenuvisible] = useState('none');

const handleOnclick = () => {
    if(mobilemenuvisible === "none"){
        setMobilemenuvisible("grid");
    } else {
        setMobilemenuvisible("none");
    }
}

const mq = window.matchMedia('(min-width: 640px)');

  useEffect(() => {
    // initial check to toggle something on or off
    toggle();

    // returns true when window is => 640px
    mq.addListener(toggle);

    // unmount cleanup handler
    return () => mq.removeListener(toggle);
  }, );

  // toggle something based on matchMedia event
  const toggle = () => {
    if (mq.matches) {
        setMobilemenuvisible("none")
    }
  };

  return (
    <div className='Header flex items-center justify-between sm:justify-start gap-2 p-2 bg-zinc-700 '>
        <div className='Logo font-black flex gap-2 p-2 '>
            <FaFilm className=' text-[30px] text-orange-500 translate-y-[-3px] ' />
            MoviesHub
        </div>
        <nav className='Navbar '>
            <Navbar />
            <button className='MenuBtn sm:hidden p-4 hover:bg-white hover:text-black '
                onClick={handleOnclick}
            >
                Menu
            </button>
            <div className='MenuItems ' style={{display: mobilemenuvisible}}>
                <Mobilemenu />
            </div>
        </nav>
    </div>
  )
}

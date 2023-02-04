import React, { useState, useEffect } from 'react';
import Mobilemenu from './Mobilemenu';
import Navbar from './Navbar';

export default function Header() {

const [menubg, setMenubg] = useState("");
const [menutext, setMenetext] = useState("");
const [mobilemenuvisible, setMobilemenuvisible] = useState("none");

const handleOnclick = () => {
    if(mobilemenuvisible === "none"){
        setMobilemenuvisible("grid");
    } else {
        setMobilemenuvisible("none");
    }

    if(menubg === "") {
        setMenubg("white");
        setMenetext("black");
    } else {
        setMenubg("");
        setMenetext("");
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
        setMobilemenuvisible("none");
        setMenubg("");
        setMenetext("");
    }
    };

    return (
        <div className='Header flex items-center justify-between sm:justify-start gap-2 p-2 bg-zinc-700 '>
            <div className='Logo flex items-baseline gap-2 p-2 text-[30px] font-black '>
                <i className=' text-orange-500 
                    fa-solid fa-film '>
                </i>
                <h1 className=''>
                    MoviesHub
                </h1>
            </div>
            <nav className='Navbar '>
                <Navbar />
                <button className='MenuBtn sm:hidden text-[20px] p-4 hover:bg-white hover:text-black rounded-sm '
                    onClick={handleOnclick} style={{background: menubg, color: menutext}}
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

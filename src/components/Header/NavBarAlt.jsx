import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarLi = styled.li`
    cursor: pointer;
`
const NavbarAlt = () => {

    const [isClicked, setIsClicked] = useState(false)
    const [isClicked1, setIsClicked1] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    const [isClicked3, setIsClicked3] = useState(false)

    const checkClick = {
        backgroundColor: isClicked ? 'white' : null,
        color: isClicked ? 'black' : 'white',
        borderRadius: '4px',
    };
    
    const checkClick1 = {
        backgroundColor: isClicked1 ? 'white' : null,
        color: isClicked1 ? 'black' : 'white',
        borderRadius: '4px',
    };
    
    const checkClick2 = {
        backgroundColor: isClicked2 ? 'white' : null,
        color: isClicked2 ? 'black' : 'white',
        borderRadius: '4px',
    };

    const checkClick3 = {
        backgroundColor: isClicked3 ? 'white' : null,
        color: isClicked3 ? 'black' : 'white',
        borderRadius: '4px',
    };

    function handleClick() {
        if(!isClicked) {
            setIsClicked(true)
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(false)
        }
    }
    
    function handleClick1() {
        if(!isClicked1) {
            setIsClicked1(true)
            setIsClicked(false)
            setIsClicked2(false)
            setIsClicked3(false)
        }
    }
    
    function handleClick2() {
        if(!isClicked2) {
            setIsClicked2(true)
            setIsClicked(false)
            setIsClicked1(false)
            setIsClicked3(false)
        }
    }

    function handleClick3() {
        if(!isClicked3) {
            setIsClicked3(true)
            setIsClicked(false)
            setIsClicked1(false)
            setIsClicked2(false)
        }
    }

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
        setMenetext("purple");
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
    <div>
        <ul className='NavBarUl hidden sm:flex flex-wrap gap-5 '>
            <NavbarLi onClick={handleClick} style={checkClick}>
                <Link to="/trending" className=' group flex items-baseline gap-1 rounded p-2
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] group-hover:text-red-400 ' >
                        <i className="fa-solid fa-fire "></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        Trending
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick1} style={checkClick1}>
                <Link to="/movies" className=' group flex items-baseline gap-1 rounded p-2
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] group-hover:text-yellow-400 ' >
                        <i className="fa-solid fa-clapperboard"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        Movies
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick2} style={checkClick2}>
                <Link to="/TVseries" className=' group flex items-baseline gap-1 rounded p-2
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] group-hover:text-green-400 ' >
                        <i className="fa-solid fa-tv"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        TV Series
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick3} style={checkClick3}>
                <Link to="/search" className=' group flex items-baseline gap-1 rounded p-2
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] group-hover:text-blue-400 ' >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        Search
                    </div>
                </Link>
            </NavbarLi>
        </ul>

        <div className='MobileMenu'>
            <button className='MenuBtn sm:hidden text-[18px] font-bold p-3 hover:bg-white hover:text-black rounded-sm
                transition-all ease-in-out duration-500 '
                onClick={handleOnclick} style={{background: menubg, color: menutext}}
            >
                Menu
            </button>
            <div className='MenuItems ' style={{display: mobilemenuvisible}}>
                <ul className=' absolute top-[77px] right-0 w-[100vw] grid sm:hidden '>
                    <NavbarLi onClick={handleClick} style={checkClick}
                        className='group p-3 hover:pr-[50px] bg-stone-800 bg-opacity-70
                            hover:bg-white hover:bg-opacity-90
                                transition-all ease-in-out duration-500'>
                        <Link to="/trending" className=' flex justify-end items-baseline gap-2 ' >
                            <div className=' group-hover:text-red-600 transition-all ease-in-out duration-300 ' >
                                <i className="fa-solid fa-fire "></i>
                            </div>
                            <div className=' font-semibold group-hover:text-black group-hover:font-black
                                transition-all ease-in-out duration-300 '>
                                Trending
                            </div>
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick1} style={checkClick1}
                        className='group p-3 hover:px-[50px] bg-stone-800 bg-opacity-70
                        hover:bg-white hover:bg-opacity-90
                            transition-all ease-in-out duration-500'>
                        <Link to="/movies" className=' flex justify-end items-baseline gap-2 ' >
                            <div className=' group-hover:text-yellow-600 transition-all ease-in-out duration-300 ' >
                                <i className="fa-solid fa-clapperboard"></i>
                            </div>
                            <div className=' font-semibold group-hover:text-black group-hover:font-black transition-all ease-in-out duration-300 '>
                                Movies
                            </div>
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick2} style={checkClick2}
                        className='group p-3 hover:px-[50px] bg-stone-800 bg-opacity-70
                        hover:bg-white hover:bg-opacity-90
                            transition-all ease-in-out duration-500'>
                        <Link to="/TVseries" className=' flex justify-end items-baseline gap-2 ' >
                            <div className=' group-hover:text-emerald-600 transition-all ease-in-out duration-300 ' >
                                <i className="fa-solid fa-tv"></i>
                            </div>
                            <div className=' font-semibold group-hover:text-black group-hover:font-black transition-all ease-in-out duration-300 '>
                                TV Series
                            </div>
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick3} style={checkClick3}
                        className='group p-3 hover:px-[50px] bg-stone-800 bg-opacity-70
                        hover:bg-white hover:bg-opacity-90
                            transition-all ease-in-out duration-500'>
                        <Link to="/search" className=' flex justify-end items-baseline gap-2 ' >
                            <div className=' group-hover:text-sky-600 transition-all ease-in-out duration-300 ' >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className=' font-semibold group-hover:text-black group-hover:font-black transition-all ease-in-out duration-300 '>
                                Search
                            </div>
                        </Link>
                    </NavbarLi>
                </ul>
            </div>
        </div>
</div>

    )
}

export default NavbarAlt;
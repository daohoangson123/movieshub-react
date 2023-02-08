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
    const [isClicked4, setIsClicked4] = useState(false)

    const checkClick = {
        backgroundColor: isClicked ? 'rgba(255 , 255 , 255, .7)' : null,
        color: isClicked ? 'black' : 'white',
        borderRadius: '4px',
        textDecoration: isClicked ? 'underline' : null,
    };
    
    const checkClick1 = {
        backgroundColor: isClicked1 ? 'rgba(255 , 255 , 255, .7)' : null,
        color: isClicked1 ? 'black' : 'white',
        borderRadius: '4px',
        textDecoration: isClicked1 ? 'underline' : null,
    };
    
    const checkClick2 = {
        backgroundColor: isClicked2 ? 'rgba(255 , 255 , 255, .7)' : null,
        color: isClicked2 ? 'black' : 'white',
        borderRadius: '4px',
        textDecoration: isClicked2 ? 'underline' : null,
    };

    const checkClick3 = {
        backgroundColor: isClicked3 ? 'rgba(255 , 255 , 255, .7)' : null,
        color: isClicked3 ? 'black' : 'white',
        borderRadius: '4px',
        textDecoration: isClicked3 ? 'underline' : null,
    };

    const checkClick4 = {
        backgroundColor: isClicked4 ? 'rgba(255 , 255 , 255, .7)' : null,
        color: isClicked4 ? 'black' : 'white',
        borderRadius: '4px',
        textDecoration: isClicked4 ? 'underline' : null,
    };

    function handleClick() {
        if(!isClicked) {
            setIsClicked(true)
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(false)
            setIsClicked4(false)
        }
    }
    
    function handleClick1() {
        if(!isClicked1) {
            setIsClicked1(true)
            setIsClicked(false)
            setIsClicked2(false)
            setIsClicked4(false)
            setIsClicked3(false)
        }
    }
    
    function handleClick2() {
        if(!isClicked2) {
            setIsClicked2(true)
            setIsClicked(false)
            setIsClicked1(false)
            setIsClicked4(false)
            setIsClicked3(false)
        }
    }

    function handleClick3() {
        if(!isClicked3) {
            setIsClicked3(true)
            setIsClicked(false)
            setIsClicked1(false)
            setIsClicked4(false)
            setIsClicked2(false)
        }
    }

    function handleClick4() {
        if(!isClicked4) {
            setIsClicked4(true)
            setIsClicked(false)
            setIsClicked1(false)
            setIsClicked2(false)
            setIsClicked3(false)
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
        <ul className='NavBarUl hidden sm:flex flex-wrap gap-2 '>
            <NavbarLi onClick={handleClick} style={checkClick}>
                <Link to="/trending" className=' group flex items-baseline gap-1 rounded p-1
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] ' >
                        <i className="fa-solid fa-fire "></i>
                    </div>
                    <div className=' text-[20px] font-semibold ' >
                        Trending
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick1} style={checkClick1}>
                <Link to="/movies" className=' group flex items-baseline gap-1 rounded p-1
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] ' >
                        <i className="fa-solid fa-clapperboard"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        Movies
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick2} style={checkClick2}>
                <Link to="/TVseries" className=' group flex items-baseline gap-1 rounded p-1
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] ' >
                        <i className="fa-solid fa-tv"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        TV Series
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick3} style={checkClick3}>
                <Link to="/search" className=' group flex items-baseline gap-1 rounded p-1
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] ' >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        Search
                    </div>
                </Link>
            </NavbarLi>
            <NavbarLi onClick={handleClick4} style={checkClick4}>
                <Link to="/API" className=' group flex items-baseline gap-1 rounded p-1
                    transition-all ease-in-out duration-500 
                    hover:bg-white hover:bg-opacity-30 ' >
                    <div className=' text-[24px] ' >
                        <i className="fa-solid fa-link"></i>
                    </div>
                    <div className=' text-[20px] font-semibold '>
                        API
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
                <ul className=' absolute top-[77px] left-0 w-full grid sm:hidden '>
                    <NavbarLi onClick={handleClick} style={checkClick}
                        className='group bg-stone-800 bg-opacity-70
                            hover:bg-white hover:bg-opacity-90
                                transition-all ease-in-out duration-500'>
                        <Link to="/trending" className=' p-3 inline-block w-full
                                hover:pr-[50px] text-right group-hover:text-black
                                    transition-all ease-in-out duration-500 ' >
                                <i className="fa-solid fa-fire mx-3 "></i>
                                Trending
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick1} style={checkClick1}
                        className='group bg-stone-800 bg-opacity-70
                            hover:bg-white hover:bg-opacity-90
                                transition-all ease-in-out duration-500'>
                        <Link to="/movies" className=' p-3 inline-block w-full
                                hover:pr-[50px] text-right group-hover:text-black
                                    transition-all ease-in-out duration-500 ' >
                                <i className="fa-solid fa-clapperboard mx-3 "></i>
                                Movies
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick2} style={checkClick2}
                        className='group bg-stone-800 bg-opacity-70
                            hover:bg-white hover:bg-opacity-90
                                transition-all ease-in-out duration-500'>
                        <Link to="/TVseries" className=' p-3 inline-block w-full
                                hover:pr-[50px] text-right group-hover:text-black
                                    transition-all ease-in-out duration-500 ' >
                                <i className="fa-solid fa-tv mx-3 "></i>
                                TV Series
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick3} style={checkClick3}
                        className='group bg-stone-800 bg-opacity-70
                            hover:bg-white hover:bg-opacity-90
                                transition-all ease-in-out duration-500'>
                        <Link to="/search" className=' p-3 inline-block w-full
                                hover:pr-[50px] text-right group-hover:text-black
                                    transition-all ease-in-out duration-500 ' >
                                <i className="fa-solid fa-magnifying-glass mx-3 "></i>
                                Search
                        </Link>
                    </NavbarLi>
                    <NavbarLi onClick={handleClick4} style={checkClick4}
                        className='group bg-stone-800 bg-opacity-70
                            hover:bg-white hover:bg-opacity-90
                                transition-all ease-in-out duration-500'>
                        <Link to="/API" className=' p-3 inline-block w-full
                                hover:pr-[50px] text-right group-hover:text-black
                                    transition-all ease-in-out duration-500 ' >
                                <i className="fa-solid fa-link mx-3 "></i>
                                API
                        </Link>
                    </NavbarLi>
                </ul>
            </div>
        </div>
</div>

    )
}

export default NavbarAlt;
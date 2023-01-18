import React, { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { ImFilm } from 'react-icons/im';
import { FaFireAlt, FaSearch, FaTv } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [searchbox, setSearchbox] = useState("hidden");

    const [searchValue, setSearchValue] = useState({
        searchkw: "nothing yet",
    });

    const handleOnchange = (event) => {
        setSearchValue({
            [event.target.searchkw] : event.target.value,
        });
    }

    const handleOnclick = (event) => {
        setSearchbox("block");
        if((Object.values(searchValue)[0] === "nothing yet" || Object.values(searchValue)[0] === "") && searchbox === "block") {
            setSearchbox("hidden");
        } else {
            console.log(Object.values(searchValue)[0].toUpperCase().replace(/\s+/g, ''));
        }
    }

    const handleOnkeyUp = (event) => {
        // if((event.key === "Enter") && ((Object.values(searchValue)[0] !== "nothing yet") || (Object.values(searchValue)[0] !== ""))) {
        //     console.log(Object.values(searchValue)[0].toUpperCase().replace(/\s+/g, ''));
        // } else if ((event.key === "Enter") && (Object.values(searchValue)[0] === "")) {
        //     console.log("nothingyet");
        // }
        if ((event.key === "Enter") && (Object.values(searchValue)[0] === "")) {
            console.log("nothingyet");
        } else if ((event.key === "Enter") && ((Object.values(searchValue)[0] !== "nothing yet") || (Object.values(searchValue)[0] !== ""))) {
                console.log(Object.values(searchValue)[0].toUpperCase().replace(/\s+/g, ''));
            }
        }

    const handleOnsubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div>
        <ul className=' hidden sm:flex flex-wrap gap-5 '>
                <li>
                    <Link to='/' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '>
                        <BiHome className=' text-[1.3rem] text-emerald-600 ' />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/trending' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '>
                        <FaFireAlt className=' text-[1.3rem] text-red-600 ' />
                        Trending
                    </Link>
                </li>
                <li>
                    <Link to='/movies' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '>
                        <ImFilm className=' text-[1.3rem] text-sky-600 ' />
                        Movies
                    </Link>
                </li>
                <li>
                    <Link to='/tvseries' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '>
                        <FaTv className=' text-[1.3rem] text-purple-600 ' />
                        TV Series
                    </Link>
                </li>
                <form className=' flex gap-5 items-baseline '
                action="" autoComplete='off'
                onSubmit={handleOnsubmit}    >
                    <button type='button' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '
                    onClick={handleOnclick}>
                        <FaSearch className=' text-[1.3rem] text-green-600 ' />
                        Search
                    </button>
                    <input type="text" name="searchkw" id="searchkw" placeholder='Search here' onChange={handleOnchange}
                    className={[' px-3 w-[200px] h-[30px] text-black rounded ', `${searchbox}`].join("")}
                    onKeyUp={handleOnkeyUp}    />
                </form>
            </ul>
    </div>
  )
}

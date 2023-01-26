import React from 'react';
import { BiHome } from 'react-icons/bi';
import { ImFilm } from 'react-icons/im';
import { FaFireAlt, FaTv, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MobilemenuItems = [
    {
        page: "Home",
        linkto: "/",
        logo: <BiHome />
    },
    {
        page: "Trending",
        linkto: "/trending",
        logo: <FaFireAlt />
    },
    {
        page: "Movies",
        linkto: "/movies",
        logo: <ImFilm />
    },
    {
        page: "TV Series",
        linkto: "/tvseries",
        logo: <FaTv />
    },
    {
        page: "Search",
        linkto: "/search",
        logo: <FaSearch />
    },
]

const MobileMenu = () => {
  return (
    <div>
        <ul className=' absolute top-[73px] right-0 grid sm:hidden bg-black bg-opacity-70 '>
            {MobilemenuItems.map((item) => (
            <li key={item.page} className=' p-3 hover:bg-white hover:text-black '>
                <Link to={item.linkto} className=' flex '>
                    {item.logo}
                    {item.page}
                </Link>
            </li>    
            ))}
        </ul>
    </div>
  )
}

export default MobileMenu;
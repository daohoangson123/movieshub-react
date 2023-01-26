import React from 'react';
import { BiHome } from 'react-icons/bi';
import { ImFilm } from 'react-icons/im';
import { FaFireAlt, FaSearch, FaTv } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBarItems = [
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

const Navbar = () => {

  return (
    <div>
        <ul className='NavBarUl hidden sm:flex flex-wrap gap-5 '>
            {NavBarItems.map((item) => (
                <li className='NavBarLi '>
                    <Link to={item.linkto} className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 ' >
                        <div className=' text-[24px] '>
                            {item.logo}
                        </div>
                        <div className=' font-semibold '>
                            {item.page}
                        </div>
                    </Link>
                </li>
            ))}
            </ul>
    </div>
  )
}

export default Navbar;
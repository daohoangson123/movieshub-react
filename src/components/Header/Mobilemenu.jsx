import React from 'react';
import { Link } from 'react-router-dom';

const MobilemenuItems = [
    {
        page: "Home",
        linkto: "/"
    },{
        page: "Trending",
        linkto: "/trending"
    },{
        page: "Movies",
        linkto: "/movies"
    },{
        page: "TV Series",
        linkto: "/tvseries"
    },{
        page: "Search",
        linkto: "/search"
    },
]

const MobileMenu = () => {
  return (
    <div>
        <ul className=' absolute top-[72px] right-0 grid sm:hidden bg-black bg-opacity-90 '>
            {MobilemenuItems.map((item) => (
            <li key={item.page} className=' px-5 p-2 hover:bg-white hover:text-black '>
                <Link to={item.linkto}>{item.page}</Link>
            </li>    
            ))}
        </ul>
    </div>
  )
}

export default MobileMenu;
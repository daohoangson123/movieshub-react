import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarData } from '../../data/NavbarData/NavBarData';

const Navbar = () => {

  return (
    <div>
        <ul className='NavBarUl hidden sm:flex flex-wrap gap-5 '>
            {NavBarData.map((item) => (
                <li className='NavBarLi '>
                    <Link to={item.linkto} className=' flex items-baseline gap-2 rounded p-2 hover:bg-white hover:bg-opacity-10 ' >
                        <div className=' text-[24px] ' >
                            {item.logo}
                        </div>
                        <div className=' text-[20px] font-semibold '>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarData } from '../../data/NavbarData/NavBarData';

const MobileMenu = () => {
  return (
    <div>
        <ul className=' absolute top-[80px] right-0 grid sm:hidden bg-black bg-opacity-80 '>
            {NavBarData.map((item) => (
            <li key={item.page} className=' p-3 hover:bg-white hover:text-black '>
                <Link to={item.linkto} className=' flex items-baseline gap-2 '>
                  <>
                    {item.logo}
                  </>
                  <>
                    {item.page}
                  </>
                </Link>
            </li>    
            ))}
        </ul>
    </div>
  )
}

export default MobileMenu;
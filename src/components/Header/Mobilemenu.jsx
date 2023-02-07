import { Link } from 'react-router-dom';
import { NavBarData } from '../../data/NavbarData/NavBarData';

const MobileMenu = () => {
  return (
    <div className='MobileMenu'>
        <ul className=' absolute top-[77px] right-0 w-[100vw] grid sm:hidden '>
            {NavBarData.map((item) => (
            <li key={item.page} className=' p-3 hover:px-[50px] bg-stone-800 bg-opacity-70
            hover:bg-white hover:text-black hover:font-black 
              transition-all ease-in-out duration-500 '>
                <Link to={item.linkto} className=' flex justify-end items-baseline gap-2 '>
                  <div className=''>
                    {item.logo}
                  </div>
                  <div className=''>
                    {item.page}
                  </div>
                </Link>
            </li>    
            ))}
        </ul>
    </div>
  )
}

export default MobileMenu;
import { Link } from 'react-router-dom';
import { navBar_Data } from '../../data/NavbarData/NavBarData';

const Navbar = () => {
    
    return (
        <div>
            <ul className='NavBarUl hidden sm:flex flex-wrap gap-5 '>
                {navBar_Data.map((item) => (
                    <li key={item.page} className='NavBarLi '>
                        <Link to={item.linkto} className=' flex items-baseline gap-1 rounded p-2 hover:bg-white hover:bg-opacity-10 ' >
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
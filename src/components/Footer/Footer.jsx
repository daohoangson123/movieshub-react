import React from 'react';
import { Link } from 'react-router-dom';

const FooterTopItems = [
  {
    title: "About Us",
    linkto: "/about"
  },
  {
    title: "Terms of Use",
    linkto: "/terms"
  },
  {
    title: "Privacy Policy",
    linkto: "/policy"
  },
  {
    title: "Contact Us",
    linkto: "/contact"
  },
]


export default function Footer() {
  return (
    <div className='Footer '>
        <div className='FooterTop flex flex-wrap justify-around items-baseline m-5 '>
            <div className=' text-3xl font-black text-orange-500 '>
              MoviesHub
            </div>
            <ul className=' flex gap-5 '>
              {FooterTopItems.map((item, id) => (
                <Link to={item.linkto} key={id} className=' hover:underline '>
                  {item.title}
                </Link>
              ))}
            </ul>
        </div>
        <hr className=' mx-20 ' />
        <div className='FooterBot flex justify-center gap-1 p-5 '>
          <i className=' text-[20px] translate-y-[2px] 
            fa-regular fa-copyright '>
          </i>
          CopyRight by ...
        </div>
    </div>
  )
}

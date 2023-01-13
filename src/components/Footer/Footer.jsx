import React from 'react'
import { BiCopyright } from 'react-icons/bi'


export default function Footer() {
  return (
    <div className='Footer '>
        <div className=' flex flex-wrap justify-around items-baseline m-5 '>
            <div className=' text-3xl font-black '>
              MoviesHub
            </div>
            <ul className=' flex gap-5 '>
              <li>Content Here</li>
              <li>Content Here</li>
              <li>Content Here</li>
              <li>Content Here</li>
            </ul>
        </div>
        <hr className=' mx-20 ' />
        <div className=' flex justify-center gap-1 p-5 '>
          <BiCopyright className=' text-[20px] translate-y-[2px] ' />
          CopyRight by ...
        </div>
    </div>
  )
}

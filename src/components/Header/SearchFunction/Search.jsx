import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Search() {

  const handleOnsubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className=''>
      <form className=' flex gap-5 items-baseline '
        action="" autoComplete='off'
        onSubmit={handleOnsubmit}    >
          <button type='button' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '>
              <FaSearch className=' text-[1.3rem] text-green-600 ' />
              <Link to="/search">
                SearchPage
              </Link>
          </button>
      </form>
    </div>
  )
}

export default Search;
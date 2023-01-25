import React from 'react';
// import React, { useState } from 'react';
// import { Movies_Data } from '../../../data/MoviesData/MoviesData';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Search() {
  // const HandleOnSubmit = (event) => {
  //   event.preventDefault();
  // }

  // const [searchValue, setSearchValue] = useState({
  //     searchkw: "",
  // });

  // const [res, Setres] = useState([]);

  // const HandleOnChange = (event) => {
  //     setSearchValue({
  //         [event.target.searchkw] : event.target.value,
  //     });
      
  //     if ((Object.values(searchValue) === "")
  //             || (Object.values(searchValue)[0] !== res)) {
  //                 Setres([]);
  //     }
  // }

  // const HandleOnKeyUp = (event) => {
  //     for (let i = 0; i < Movies_Data.length; i++) {
  //         if (Object.values(searchValue)[0] === "") {
  //                 Setres([
  //                     ...Movies_Data
  //                 ]);
  //             } else if ((event.key !== "Enter")
  //                     &&
  //                     (Movies_Data[i].title
  //                     .replace(/\s+/g, '')
  //                     .toLocaleLowerCase()

  //                     .includes(Object.values(searchValue)[0]
  //                     .replace(/\s+/g, '')
  //                     .toLocaleLowerCase()))) {
  //                         res.push(Movies_Data[i]);
  //                         Setres([...res])
  //                     }
  //     };
  // }

  // const HandleOnClick = () => {
  //     for (let i = 0; i < Movies_Data.length; i++) {
  //         if((Object.values(searchValue)[0] === "")) {
  //                 alert("please enter letters of movie name");
  //                 break;
  //             } else if (
  //                     !(Movies_Data[i].title
  //                     .replace(/\s+/g, '')
  //                     .toLocaleLowerCase()
                      
  //                     .includes(Object.values(searchValue)[0]
  //                     .replace(/\s+/g, '')
  //                     .toLocaleLowerCase()))) {
  //                     alert("404! NOTHING FOUND");
  //                     break;
  //             }
  //         }
  // }

  // useEffect(() => {
  //     Setres([...Movies_Data])
  // }, [])


return (
    <div className='search-result'>
        <form className='SearchForm flex gap-5 justify-center items-baseline '
            action="" autoComplete='off'
            // onSubmit={handleOnsubmit}
            >
                <input
                  type="text"
                  name="searchkw"
                  id="searchkw"
                  placeholder="Movie's name"
                  required
                  // onChange={handleOnchange}
                  className={['SearchInp hidden px-3 w-[180px] h-[30px] text-black rounded placeholder-stone-500 ',
                // `${searchbox}`
                            ].join("")}
                // onKeyUp={handleOnkeyUp}
                />
                <button type='button' className='SearchBtn flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '
                // onClick={handleOnclick}
                >
                    <FaSearch className=' text-[1.3rem] text-green-600 ' />
                    <Link to='/search'>
                      Search
                    </Link>
                </button>
        </form>
    </div>
)
}

export default Search;
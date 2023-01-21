import React, { useState } from 'react';
import { Movies_Data } from '../../../data/MoviesData/MoviesData';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Search() {
//   const handleOnsubmit = (event) => {
//     event.preventDefault();
// }

// const [searchbox, setSearchbox] = useState("hidden");

// const [searchValue, setSearchValue] = useState({
//     searchkw: "",
// });

// const [res, Setres] = useState([]);

// const handleOnchange = (event) => {
//     setSearchValue({
//         [event.target.searchkw] : event.target.value,
//     });
    
//     if ((Object.values(searchValue)[0] === "")
//             || (Object.values(searchValue)[0] !== res)) {
//                 Setres([]);
//     }
// }

// const handleOnclick = (event) => {
//     setSearchbox("block");
//     if((Object.values(searchValue)[0] === "")
//         && searchbox === "block"
//         ) {
//             // alert("please enter letters of movie name");
//             setSearchbox("hidden");
//         } else {
            
//         }
// }

// const handleOnkeyUp = (event) => {
//     for (let i = 0; i < Movies_Data.length; i++) {
//         if ((event.key === "Enter")
//                 && (Object.values(searchValue)[0] === "")) {
//                     // alert("please enter letters of movie name");
//                         break;
//         } else if ((Movies_Data[i].searchname
//                     .includes(Object.values(searchValue)[0]
//                     .replace(/\s+/g, '')
//                     .toLocaleLowerCase()))
//                         && (Object.values(searchValue)[0] !== "")) {
//                             res.push(Movies_Data[i]);
//                             Setres([...res]);
//                             console.log("res", res);
//         }
//     }
// }


return (
    <div className='search-result'>
        <form className=' flex gap-5 justify-center items-baseline '
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
                  className={[' hidden px-3 w-[180px] h-[30px] text-black rounded placeholder-stone-500 ',
                // `${searchbox}`
                            ].join("")}
                // onKeyUp={handleOnkeyUp}
                />
                <button type='button' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '
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
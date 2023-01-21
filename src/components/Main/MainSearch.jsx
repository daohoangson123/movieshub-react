import React, { useEffect, useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import { FaSearch } from 'react-icons/fa';
import MovieItems from '../MovieItems/MovieItems';

export default function MainSearch() {
    const handleOnsubmit = (event) => {
        event.preventDefault();
    }

    const [searchValue, setSearchValue] = useState({
        searchkw: "",
    });
    
    const [res, Setres] = useState([]);
    
    const handleOnchange = (event) => {
        setSearchValue({
            [event.target.searchkw] : event.target.value,
        });
        
        if ((Object.values(searchValue)[0] === "")
                || (Object.values(searchValue)[0] !== res)) {
                    Setres([]);
        }
    }

    const handleOnkeyup = (event) => {
        for (let i = 0; i < Movies_Data.length; i++) {
            if ((Object.values(searchValue)[0] === "")) {
                    Setres([
                        ...Movies_Data
                    ]);
                            break;
            } else if ((event.key !== "Enter")
                        && (Movies_Data[i].searchname
                        .includes(Object.values(searchValue)[0]
                        .replace(/\s+/g, '')
                        .toLocaleLowerCase()))
                        ) {
                            res.push(Movies_Data[i]);
                            Setres([...res]);
                            // console.log("res", res);
            } else {
                
            }
        }
    }
    
    const handleOnclick = () => {
        for (let i = 0; i < Movies_Data.length; i++) {
        if((Object.values(searchValue)[0] === "")
            ) {
                alert("please enter letters of movie name");
                break;
            } else if (!(Movies_Data[i].searchname
                .includes(Object.values(searchValue)[0]
                .replace(/\s+/g, '')
                .toLocaleLowerCase()))) {
                alert("#404 no movie found");
                break;
            }
        }
    }

    useEffect(() => {
        Setres([...Movies_Data])
    }, [])

    // console.log("resout", res);
    
    return (
        <div className='search-result min-h-[70vh] '>
            <form className=' m-2 flex gap-5 justify-center items-baseline '
                action="" autoComplete='off'
                onSubmit={handleOnsubmit}    >
                    <input type="text" name="searchkw" id="searchkw" placeholder="Movie's name" required onChange={handleOnchange}
                    className=' px-3 min-w-[180px] w-[280px] h-[30px] text-black rounded placeholder-stone-500 '
                    // onKeyDown={handleOnkeydown}
                    onKeyUp={handleOnkeyup}
                    />
                    <button type='button' className=' flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '
                    onClick={handleOnclick}
                    >
                        <FaSearch className=' text-[1.3rem] text-green-600 ' />
                        Search
                    </button>
            </form>
            <div className=' text-center '>
                Just type some letters of movie' name, the results will be show below
            </div>
            <hr className=' mx-auto my-2 w-[70%] border-orange-300 ' />
            <div className='result flex flex-wrap justify-center gap-5 p-5 '>
                {res.map((item, id) => (
                    <MovieItems
                    key={id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    />
                ))}
            </div>
        </div>
    )
}

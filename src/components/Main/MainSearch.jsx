import React, { useEffect, useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import { FaSearch } from 'react-icons/fa';
import MovieItems from '../MovieItems/MovieItems';

const MainSearch = () => {
    const HandleOnSubmit = (event) => {
        event.preventDefault();
    }

    const [searchValue, setSearchValue] = useState({
        searchkw: "",
    });
    
    const [res, Setres] = useState([]);
    
    const HandleOnChange = (event) => {
        setSearchValue({
            [event.target.searchkw] : event.target.value,
        });
        
        if ((Object.values(searchValue) === "")
                || (Object.values(searchValue)[0] !== res)) {
                    Setres([]);
        }
    }

    const HandleOnKeyUp = (event) => {
        for (let i = 0; i < Movies_Data.length; i++) {
            if (Object.values(searchValue) === "") {
                    Setres([
                        ...Movies_Data
                    ]);
                    break; 
                    } else if ((event.key !== "Enter" && event.key !== "Shift")
                        &&
                            (Movies_Data[i].title
                            .replace(/\s+/g, '')
                            .toLocaleLowerCase()
        
                            .includes(Object.values(searchValue)[0]
                            .replace(/\s+/g, '')
                            .toLocaleLowerCase()))) {
                                res.push(Movies_Data[i]);
                                Setres([...res]);
                        }
        };
    }

    const HandleOnClick = () => {
        for (let i = 0; i < Movies_Data.length; i++) {
            if (Object.values(searchValue)[0] === "") {
                    alert("please enter letters of movie name");
                    break;
                } else if((Movies_Data[i].title
                    .replace(/\s+/g, '')
                    .toLocaleLowerCase()
                    
                    .includes(Object.values(searchValue)[0]
                    .replace(/\s+/g, '')
                    .toLocaleLowerCase()))) {
                        // res.push(Movies_Data[i]);
                        // Setres([...res])
                    }
        }
    }

    useEffect(() => {
        Setres([...Movies_Data])
    }, [])

    return (
        <div className='MainSearch min-h-[70vh] '>
            <form className='SearchForm m-2 flex gap-5 justify-center items-baseline '
                action="" autoComplete='off'
                onSubmit={HandleOnSubmit}    >
                    <input type="text" name="searchkw" id="searchkw" placeholder="Movie's name" required onChange={HandleOnChange}
                    className='MainSearchInp px-3 min-w-[180px] w-[280px] h-[30px] text-black rounded placeholder-stone-500 '
                    onKeyUp={HandleOnKeyUp}
                    />
                    <button type='button' className='MainSearchBtn flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '
                    onClick={HandleOnClick}
                    >
                        <FaSearch className=' text-[1.3rem] text-green-600 ' />
                        Search
                    </button>
            </form>
            <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
            <div className='MainSearchItems flex flex-wrap justify-center gap-10 p-5 '>
                {res.map((item) => (
                    <MovieItems
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainSearch;
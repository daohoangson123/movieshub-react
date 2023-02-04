import React, { useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import { FaSearch } from 'react-icons/fa';
import MovieItems from '../MovieItems/MovieItems';

const MainSearch = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // const [searchValue, setSearchValue] = useState({
    //     searchkw: "",
    // });
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState(Movies_Data);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue)
        
        if (searchValue !== result) {
            setResult([]);
        }
    }

    const handleKeyUp = (event) => {
        for (let i = 0; i < Movies_Data.length; i++) {
            if (searchValue === "") {
                    setResult(Movies_Data);
                    break; 
                    } else if ((event.key !== "Enter" && event.key !== "Shift")
                        &&
                            (Movies_Data[i].title
                            .replace(/\s+/g, '')
                            .toLocaleLowerCase()
                            .includes(searchValue
                            .replace(/\s+/g, '')
                            .toLocaleLowerCase()))) {
                                result.push(Movies_Data[i]);
                                setResult([...result]);
                        }
        };
    }

    const handleClick = () => {
        for (let i = 0; i < Movies_Data.length; i++) {
            if (searchValue === "") {
                    alert("please enter letters of movie's name");
                    break;
                } 
                else if((Movies_Data[i].title
                    .replace(/\s+/g, '')
                    .toLocaleLowerCase()
                    .includes(searchValue
                    .replace(/\s+/g, '')
                    .toLocaleLowerCase()))) {
                        result.push(Movies_Data[i]);
                        setResult(result);
                    }
        }
    }

    return (
        <div className='MainSearch min-h-[70vh] '>
            <form className='SearchForm m-2 flex gap-5 justify-center items-baseline '
                action="" autoComplete='off'
                onSubmit={handleSubmit}    >
                    <input type="text" name="searchkw" id="searchkw" placeholder="Movie's name" required
                    className='MainSearchInp px-3 min-w-[180px] w-[280px] h-[30px]
                    text-black rounded placeholder-stone-500 focus:invalid:outline-red-500 outline-green-600 '
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    />
                    <button type='button' className='MainSearchBtn flex gap-2 text-green-400 bg-white bg-opacity-20 
                    hover:bg-white hover:bg-opacity-40 rounded p-2 '
                    onClick={handleClick}
                    >
                        <FaSearch className=' text-[1.3rem] text-green-600 ' />
                        Search
                    </button>
            </form>
            <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
            <div className='MainSearchItems flex flex-wrap justify-center gap-10 p-5 '>
                {result.map((item) => (
                    <MovieItems
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    rate={item.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainSearch;
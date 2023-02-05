import React, { useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';

const MiniItems = {
        width: "220px",
        height: "440px",
        text: "12px"
    }

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
        
        if (searchValue !== result) {
            setResult([]);
        }
    }

    const handleKeyUp = (event) => {
        const serchTemp = []
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
                                serchTemp.push(Movies_Data[i]);
                                setResult(serchTemp);
                        }
        };
    }

    return (
        <div className='MainSearch min-h-[70vh] '>
            <form className='SearchForm m-2 flex justify-center '
                action="" autoComplete='off'
                onSubmit={handleSubmit}    >
                <span className=' text-[20px]'>
                    Type
                    <i className="fa-solid fa-caret-right hidden sm:inline"></i>
                </span>
                <input type="text" name="searchkw" id="searchkw" placeholder="Movie's name you want" required
                    className='MainSearchInp px-3 min-w-[180px] w-[280px] h-[30px] border-none
                    text-black rounded placeholder-stone-500 text-center 
                    focus:invalid:outline-red-400 outline-green-400 '
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                />
                <span className=' text-[20px]'>
                    <i className="fa-solid fa-caret-left hidden sm:inline "></i>
                    here
                </span>
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
                    width={MiniItems.width}
                    height={MiniItems.height}
                    text={MiniItems.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainSearch;
import React, { useEffect, useState } from 'react';
import { Movies_Data } from '../../data/MoviesData/MoviesData';
import { FaSearch } from 'react-icons/fa';
import MovieItems from '../MovieItems/MovieItems';

const MainTrending = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const [searchValue, setSearchValue] = useState({
      searchkw: "",
  });

  const [result, setResult] = useState([]);

  const handleChange = (event) => {
      setSearchValue({
          [event.target.searchkw] : event.target.value,
      });
      
      if (Object.values(searchValue)[0] !== result) {
            setResult([]);
      }
  }

  const handleKeyUp = (event) => {
      for (let i = 0; i < Movies_Data.length; i++) {
          if ((Object.values(searchValue)[0] === "")) {
                    setResult([
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
                              result.push(Movies_Data[i]);
                              setResult([...result]);
                      }
    };
  }

  const handleClick = () => {
      for (let i = 0; i < Movies_Data.length; i++) {
          if (Object.values(searchValue)[0] === "") {
                  alert("please enter letters of movie's name");
                  break;
              } 
              else if((Movies_Data[i].title
                  .replace(/\s+/g, '')
                  .toLocaleLowerCase()
                  
                  .includes(Object.values(searchValue)[0]
                  .replace(/\s+/g, '')
                  .toLocaleLowerCase()))) {
                    result.pop(Movies_Data[i]);
                    result.push(Movies_Data[i]);
                    setResult([...result]);
                  }
      }
  }

  useEffect(() => {
      setResult([...Movies_Data]);
  }, [])

  return (
    <div className='MainTrending min-h-[70vh] '>
        <form className='SearchForm m-2 flex justify-center sm:justify-end items-baseline gap-5 '
                action="" autoComplete='off'
                onSubmit={handleSubmit}    >
                    <input type="text" name="searchkw" id="searchkw" placeholder="Movie's name" required
                    className='MainSearchInp px-3 min-w-[180px] w-[280px] h-[30px] text-black rounded placeholder-stone-500 '
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    />
                    <button type='button' className='MainSearchBtn flex gap-2 hover:bg-white hover:bg-opacity-10 rounded p-2 '
                    onClick={handleClick}
                    >
                        <FaSearch className=' text-[1.3rem] text-green-600 ' />
                        Search
                    </button>
            </form>
            <h2 className=' text-6xl text-center '>
              Trending
            </h2>
            <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
            <div className='MainSearchItems flex flex-wrap justify-center gap-10 p-5 '>
                {result.length !== 0
                    ?   <>{result.map((item) => (
                            <MovieItems
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            thumbnail={item.thumbnail}
                            />
                        ))}
                        </>
                    :   <div className=' text-7xl '>
                            NOTHING FOUND!
                        </div>
                }
            </div>
    </div>
  )
}

export default MainTrending;
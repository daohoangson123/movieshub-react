import { useEffect, useState } from "react";
import APIMovieItems from '../MovieItems/APIMovieItems';

const MainAPI = () => {
    const [api, setApi] = useState([]);
    
    useEffect(() => {
        (async function () {
            let fetchAPI = await fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&page=1");
            let fetchedAPI = await fetchAPI.json();
            let results = fetchedAPI.results;
            setApi(results);
        })();
    }, [])

    return (
        <div className='MainAPI '>
            <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
            <div className='MoviesBox flex flex-wrap justify-center gap-10 p-5 '>
                {api.map((movie) => (
                    <APIMovieItems className='MovieItems '
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        thumbnail={movie.poster_path}
                        rate={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainAPI;
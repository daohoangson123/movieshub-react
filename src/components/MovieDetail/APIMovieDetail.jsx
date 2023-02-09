import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './MovieDetail.module.css'

const APImovieDetail = () => {
    const { id } = useParams();
    const [apimoviedetail, setApimoviedetail] = useState('');
    const [api, setApi] = useState([]);

    useEffect(() => {
      (async function () {
          let fetchAPI = await fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US&page=1");
          let fetchedAPI = await fetchAPI.json();
          let results = fetchedAPI.results;
          const apimovieDetailTemp = results.find((movie) => movie.id.toString() === id);
          setApimoviedetail(apimovieDetailTemp);
          setApi(results);
        })();
    }, [id])
    console.log(api)
    console.log(apimoviedetail)

    const handleClick = () => {
      window.history.back();
    }

  return (
    <div className='MovieDetailItems mx-3 '>
        <div className=' text-3xl sm:text-5xl text-yellow-300 text-center font-black mb-2 '>
          {apimoviedetail.title}
        </div>
        <div className=' flex flex-wrap gap-5 '>
          <div className='relative mx-auto '>
            <img className='MovieDetailImg max-w-[250px] sm:max-w-[350px] max-h-[400px] 
              border-solid border-2 '
              src={["https://image.tmdb.org/t/p/original",`${apimoviedetail.poster_path}`].join("")} alt={apimoviedetail.title} />
              <div className=' flex justify-between text-black font-semibold '>
                <button type='button' className='TrailerBtn mt-2 p-1 rounded-md 
                bg-green-500 hover:bg-emerald-700 hover:text-white
                    transition-all duration-500  '>
                  Trailer
                </button>
                <button type='button' className='WatchBtn mt-2 p-2 rounded-md 
                bg-red-500 hover:bg-red-700 hover:text-white
                    transition-all duration-500  '>
                  Watch Now!
                </button>
                <button type='button' className='WatchBtn mt-2 p-1 rounded-md 
                bg-gray-200 hover:bg-gray-700 hover:text-white
                    transition-all duration-500  '>
                  DownLoad
                </button>
              </div>
          </div>
          <div className='MovieDetailDescript mx-auto sm:basis-[70%] '>
            {apimoviedetail.overview}
          </div>
        </div>
        <span className={['BackHomeBtn fixed top-[80px] right-2 inline-block p-1 z-10 text-black bg-white bg-opacity-50 ',
        style.BackHome].join("")}>
          <button onClick={handleClick}>Go Back</button>
        </span>
    </div>
  );
};

export default APImovieDetail;
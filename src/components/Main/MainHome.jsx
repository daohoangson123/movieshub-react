import { movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';
import './MainHome.css'

const MainHome = () => {
  return (
    <div className='MainHome '>
      <div className='HeroSect text-center '>
        Carousel
      </div>
      <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
        <div className='MoviesBox flex flex-wrap justify-center gap-10 p-5 '>
            {movies_Data.map((movie) => (
              <MovieItems className='MovieItems '
                key={movie.id}
                id={movie.id}
                title={movie.title}
                thumbnail={movie.thumbnail}
                rate={movie.rating}
              />
            ))}
        </div>
    </div>
  )
}

export default MainHome;
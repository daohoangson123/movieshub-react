
import { Link } from 'react-router-dom';

const APIMovieItems = ({id, title, thumbnail, rate, ...props}) => {
  return (
    <div className='MovieItems group w-[250px] h-[500px] border-2 rounded-xl
      opacity-80 hover:opacity-100 hover:scale-105 hover:brightness-110
        transition ease-in-out duration-500 '
        style={{width: props.width, height: props.height, fontSize: props.text}}>
        <div className='MovieThumbCtrl overflow-hidden h-[70%] rounded-t-lg '>
            <img src={["https://image.tmdb.org/t/p/original",`${thumbnail}`].join("")} alt={title} />
        </div>
        <div className='MovieTextsCtrl h-[30.3%] text-center p-2 rounded-b-xl '>
            <div className='MovieTitle font-bold text-yellow-500 '>
                {title}
            </div>
            <hr />
            <div className='Rating m-1 '>
              Rating: {rate}/10
            </div>
            <button className='MovieDetailLink font-semibold p-1 rounded-sm
              group-hover:text-black group-hover:bg-white duration-500 delay-300 '>
                <Link to={`/watchapi/${id}`}>
                    More info
                </Link>
            </button>
        </div>
    </div>
  )
}

export default APIMovieItems;
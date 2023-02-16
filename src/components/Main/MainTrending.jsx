import { useEffect, useState } from 'react';
import { movies_Data } from '../../data/MoviesData/MoviesData';
import MovieItems from '../MovieItems/MovieItems';

const MainTrending = () => {
  const [namesort, setNamesort] = useState(movies_Data);
  const [yearsort, setYearsort] = useState();
  const [sort, setSort] = useState("A-Z");

  useEffect(() => {
    const NameSort = movies_Data.map((item, index) => {
      return {index, value: item.title}
    });

    NameSort.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    const SortedName = NameSort.map((value) => movies_Data[value.index]);

    setNamesort(SortedName);

//

    const YearSort = movies_Data.map((item, index) => {
      return {index, value: item.trending}
    });

    YearSort.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    const SortedYear = YearSort.map((value) => movies_Data[value.index]);
    setYearsort(SortedYear);

  }, [])
  
  return (
    <div className='MainTrending '>
      <button className=' m-3 p-1 bg-gray-700 hover:bg-gray-500 '
        onClick={() => {
          sort === "A-Z"
            ? setSort("Year")
              : setSort("A-Z")}}>
            Currently sorting by: &nbsp;
            {sort === "A-Z"
              ? <i className="fa-solid fa-arrow-up-z-a">Name</i>
                : <i className="fa-solid fa-arrow-up-9-1">Year</i>
            }
      </button>
      <hr className=' mx-auto my-2 w-[80%] border-orange-300 ' />
      <div className='MainSearchItems flex flex-wrap justify-center gap-10 p-5 '>
          {sort === "A-Z"
          ? namesort.map((item) => (
              <MovieItems
              key={item.id}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              rate={item.rating}
              />
            ))
          : yearsort.map((item) => (
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

export default MainTrending;
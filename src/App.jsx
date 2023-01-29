import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import MainHome from './components/Main/MainHome';
import MainTrending from './components/Main/MainTrending';
import MainMovies from './components/Main/MainMovies';
import MainTVes from './components/Main/MainTVs';
import MainSearch from './components/Main/MainSearch';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App relative min-h-[100vh] bg-black text-white '>
      <div className='Header sticky top-0 z-50 row-span-1 '>
        <Header />
      </div>
      <div className='Main my-[30px] '>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/trending' element={<MainTrending />} />
          <Route path='/movies' element={<MainMovies />} />
          <Route path='/tvseries' element={<MainTVes />} />
          <Route path='/search' element={<MainSearch />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
        </Routes>
      </div>
      <div className='Footer '>
        <Footer />
      </div>
    </div>
  );
}

export default App;

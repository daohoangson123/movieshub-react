// import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import MainHome from './components/Main/MainHome';
import MainTrending from './components/Main/MainTrending';
import MainMovies from './components/Main/MainMovies';
import MainTVes from './components/Main/MainTVs';
import MainSearch from './components/Main/MainSearch';
import MainAPI from './components/Main/MainAPI';
import Footer from './components/Footer/Footer';
import BackTopBtn from './components/BackToTop/BackTopBtn';
import MovieDetail from './components/MovieDetail/MovieDetail';
import APImovieDetail from './components/MovieDetail/APIMovieDetail';
import { useEffect } from "react";
import BackTopWrapper from "./components/BackToTop/BackTopWrapper";


const App = () => {

useEffect(() => {
  //disable right-click
  const handleContextmenu = e => {
    e.preventDefault()
  }
  document.addEventListener('contextmenu', handleContextmenu)
  return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
  }
}, [])

  return (
    <div className='App relative min-h-[100vh] bg-black text-white '>
      <div className='Header sticky top-0 z-50 row-span-1 '>
        <Header />
      </div>
      <div className='Main my-[30px] '>
        <BackTopWrapper>
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/trending' element={<MainTrending />} />
            <Route path='/movies' element={<MainMovies />} />
            <Route path='/tvseries' element={<MainTVes />} />
            <Route path='/search' element={<MainSearch />} />
            <Route path='/API' element={<MainAPI />} />
            <Route path='/watch/:id' element={<MovieDetail />} />
            <Route path='/watchapi/:id' element={<APImovieDetail />} />
          </Routes>
        </BackTopWrapper>
      </div>
      <div className='Footer '>
        <Footer />
      </div>
      <BackTopBtn />
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import MainHome from './components/Main/MainHome';
import MainTrending from './components/Main/MainTrending';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className='App bg-black text-white '>
      <div className='Header sticky top-0 z-50 '>
        <Header />
      </div>
      <div className='Main '>
        <Routes>
          <Route path='/' element={
            <>
              <MainHome />
            </>
          } />
          <Route path='/trending' element={
            <>
              <MainTrending />
            </>
          } />
          <Route path='/movies' element={
            <>
              movies
            </>
          } />
          <Route path='/tvseries' element={
            <>
              tv
            </>
          } />
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

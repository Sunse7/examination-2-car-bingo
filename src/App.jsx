import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import SplashPage from './pages/SplashPage';
import StartPage from './pages/StartPage';
import EditPage from './pages/EditPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fillBingoItems, fillCounter } from './app/bingoInfoSquaresSlice';

function App() {
  const [bingoItems, setBingoItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;
    fetch('./json-files/bingo-items.json')
    .then(response => response.json())
    .then(data => {
      if(!ignore) {
        setBingoItems(data);
      }
    })
    .catch(err => console.log(err))
    return () => {
      ignore = true;
    }
  }, [])

  useEffect(() => {
    if (bingoItems.length > 0) {
      dispatch(fillBingoItems(bingoItems))
      dispatch(fillCounter(bingoItems.length))
    }
  }, [bingoItems])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/startpage' element={<StartPage />} />
        <Route path='/editpage' element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

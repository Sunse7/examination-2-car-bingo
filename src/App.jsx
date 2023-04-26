import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import SplashPage from './pages/SplashPage';
import StartPage from './pages/StartPage';
import EditPage from './pages/EditPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fillBingoItems } from './app/bingoSquaresSlice';

function App() {
  const [bingoItems, setBingoItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./json-files/bingo-items.json')
    .then(response => response.json())
    .then(data => setBingoItems(data))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (bingoItems.length > 0) {
      dispatch(fillBingoItems(bingoItems))
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

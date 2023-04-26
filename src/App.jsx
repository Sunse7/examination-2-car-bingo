import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import SplashPage from './pages/SplashPage';
import StartPage from './pages/StartPage';
import EditPage from './pages/EditPage';

function App() {

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

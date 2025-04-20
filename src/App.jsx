import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { router } from '../MyRouter';
import ConstrucaCivilDetalhamento from './pages/ConstrucaCivilDetalhamento';
import HidraulicaBasicaDetalhamento from './pages/HidraulicaBasicaDetalhamento';
import PinturaIndustrialDetalhamento from './pages/PinturaIndustrialDetalhamento';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ConstrucaCivilDetalhamento' element={<ConstrucaCivilDetalhamento/>}/>
          <Route path='/HidraulicaBasicaDetalhamento' element={<HidraulicaBasicaDetalhamento/>}/>
          <Route path='/PinturaIndustrialDetalhamento' element={<PinturaIndustrialDetalhamento/>}/>
         </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

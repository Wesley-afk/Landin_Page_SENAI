import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { router } from '../MyRouter';
import ConstrucaCivilDetalhamento from './pages/ConstrucaCivilDetalhamento';
import HidraulicaBasicaDetalhamento from './pages/HidraulicaBasicaDetalhamento';
import PinturaIndustrialDetalhamento from './pages/PinturaIndustrialDetalhamento';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import HistoriaSENAI from './pages/HistoriaSENAI';

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
          <Route path='Login' element={<Login/>}/>
          <Route path='Cadastro' element={<Cadastro/>}/>
          <Route path='Historia' element={<HistoriaSENAI/>}/>
          {/* Quando clicar no incone do usuário o formulário de login
          tem que aparecer na mesma página como um componenete */}
         </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

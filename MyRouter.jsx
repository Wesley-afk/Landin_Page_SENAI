import { createBrowserRouter } from "react-router-dom";
import Home from './src/pages/Home';
import CCD from './src/pages/ConstrucaCivilDetalhamento'
import HBD from './src/pages/HidraulicaBasicaDetalhamento'
import PID from './src/pages/PinturaIndustrialDetalhamento'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: 'Construção civil',
                element: <CCD/>
            },
            {
                path: 'Hidráulica básica',
                element: <HBD/>
            },
            {
                path: 'Pintura industral',
                element: <PID/>
            }
        ]
    }
]);
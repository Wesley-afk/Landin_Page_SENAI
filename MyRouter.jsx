import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './src/pages/Home';
import ConstrucaCivilDetalhamento from './src/pages/ConstrucaCivilDetalhamento'
import HidraulicaBasicaDetalhamento from './src/pages/HidraulicaBasicaDetalhamento'
import PinturaIndustrialDetalhamento from './src/pages/PinturaIndustrialDetalhamento'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: 'Construcao-civil',
                element: <ConstrucaCivilDetalhamento/>
            },
            {
                path: 'Hidraulica-basica',
                element: <HidraulicaBasicaDetalhamento/>
            },
            {
                path: 'Pintura-industral',
                element: <PinturaIndustrialDetalhamento/>
            }
        ]
    }
]);
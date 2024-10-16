import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom"; import "./index.css";

// import './index.css'

import  {Home} from './pages/Home/Home'

import {Contato} from './pages/Contato/Contato'

import {Sobre} from './pages/Sobre/Sobre'

import { Pagina404 } from './pages/Pagina404/Pagina404' 

import { Layout } from './pages/Layout';

import { SemEstado } from './pages/estado/SemEstado';

import { ComEstado } from "./pages/estado/ComEstado";


// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// import { Layout } from './pages/Layout'

// import { ComEstado } from './pages/estado/ComEstado'

import { CampoTexto } from './pages/estado/CampoTexto'

import { Contador } from './pages/estado/Contador'

import { ComunicacaoDireta } from "./pages/comunicacao/ComunicacaoDireta"; //ARRUMAR
import { ComunicacaoIndireta } from "./pages/comunicacao/ComunicacaoIndireta"; //ARRUMAR
import { UseRef } from "./pages/hooks-basicos/UseRef"; //ARRUMAR
import { UseEffect } from "./pages/hooks-basicos/UseEffect"; //ARRUMAR

import { Tradutor } from './pages/tradutor/tradutor';




// const rotas = createBrowserRouter ([
//   {path:"/", element: <Home/>},
//   {path: "/home", element:<Home/>},
//   {path: "/contato", element:<Contato/>},
//   {path: "/sobre", element:<Sobre/>},
//   {path: "*", element:<Pagina404/>} 
// ])

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='home' element={<Home/>} />
    <Route path='contato' element={<Contato/>} />
    <Route path='sobre' element={<Sobre/>} />
    <Route path="semEstado" element={<SemEstado/>} />
    <Route path="comEstado" element={<ComEstado/>} />
    <Route path="campoTexto" element={<CampoTexto/>} />,
    <Route path="contador" element={<Contador/>} />
  
    <Route path="comunicacao-direta" element={<ComunicacaoDireta/>} />
    <Route path="comunicacao-indireta" element={<ComunicacaoIndireta/>} />
    <Route path="useRef" element={<UseRef/>} />
    <Route path="useEffect" element={<UseEffect/>} />
    <Route path="tradutor" element={<Tradutor/>} />
    
    <Route path="*" element={<Pagina404 />} />
  </Route>

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)

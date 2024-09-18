import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import  {Home} from './pages/Home/Home'

import {Contato} from './pages/Contato/Contato'

import {Sobre} from './pages/Sobre/Sobre'

import { Pagina404 } from './pages/Pagina404/Pagina404' 

import { Estado1 } from './pages/Estado1'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Layout } from './pages/Layout'


// const rotas = createBrowserRouter ([


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
    {/* <Route path='*' element={<Pagina404/>} /> */}
    <Route path="*" element={<Estado1/>} />
  </Route>

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import PreguntaDinamica from './components/PreguntaDinamica'
import Home from './components/Home'
import RutaProtegida from './components/RutaProtegida'
import Logout from './components/Logout'
import NavBar from './components/NavBar' // 👈 Barra de navegación

export default function App () {
  return (
    <BrowserRouter>
      <NavBar /> {/* Barra visible en todas las rutas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route
          path='/preguntas'
          element={
            <RutaProtegida>
              <PreguntaDinamica />
            </RutaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

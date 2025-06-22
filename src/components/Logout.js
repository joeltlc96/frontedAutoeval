import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Logout () {
  const navigate = useNavigate()

  useEffect(() => {
    const cerrarSesion = async () => {
      try {
        // Opcional: notificar al backend para borrar cookie
        await axios.post('http://localhost:3001/api/auth/logout', {}, {
          withCredentials: true
        })
      } catch (error) {
        console.warn('Error al cerrar sesión (opcional):', error)
      }

      localStorage.removeItem('token')
      navigate('/login')
    }

    cerrarSesion()
  }, [navigate])

  return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cerrando sesión...</p>
}

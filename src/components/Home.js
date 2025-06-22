import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logoISTLC.png'

export default function Home () {
  const navigate = useNavigate()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          padding: '2rem 3rem',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          color: '#fff',
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <img
          src={logo}
          alt='ISTLC Logo'
          style={{
            width: '90px',
            borderRadius: '50%',
            background: '#fff',
            padding: '6px',
            position: 'absolute',
            top: '-45px',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 12px rgba(255,255,255,0.7)'
          }}
        />

        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#ffd700', marginTop: '50px' }}>
          AutoEval ISTLC
        </h1>

        <p style={{ fontSize: '1rem', color: '#ccc', marginTop: '0.5rem' }}>
          Plataforma de autoevaluación académica ✨
        </p>
        <p style={{ fontSize: '0.95rem', color: '#bbb', marginBottom: '2rem' }}>
          Aprende y progresa con cada intento 📘🚀
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/register')}
            style={{
              backgroundColor: '#ffd700',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            REGISTRARSE
          </button>

          <button
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: '#1e88e5',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            INICIAR SESIÓN
          </button>
        </div>
      </div>
    </div>
  )
}

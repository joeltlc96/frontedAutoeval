import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logoISTLC.png'

export default function Home () {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 10,
        background: 'linear-gradient(to bottom right, #e3f2fd, #fff)'
      }}
    >
      <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
        <Box component='img' src={logo} alt='ISTLC Logo' sx={{ width: 90, mb: 2 }} />
        <Typography variant='h3' gutterBottom>
          AutoEval ISTLC
        </Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          Plataforma de autoevaluación académica
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant='contained' onClick={() => navigate('/register')}>
            Registrarse
          </Button>
          <Button variant='outlined' onClick={() => navigate('/login')}>
            Iniciar Sesión
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

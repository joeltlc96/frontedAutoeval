import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Bienvenido a AutoEval ✨
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Mejora tus conocimientos respondiendo preguntas generadas con inteligencia artificial.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/preguntas')}
        >
          ¡Empezar ahora!
        </Button>
      </Box>
    </Container>
  )
}

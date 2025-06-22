import React from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function PreguntaGenerador () {
  const generarPregunta = () => {
    alert('⚡ Aquí se generaría una pregunta con ChatGPT!')
  }

  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom>Generador de Preguntas</Typography>
      <Typography variant="body1" mb={3}>
        Haz clic para generar una nueva pregunta basada en el tema seleccionado.
      </Typography>
      <Button variant="contained" color="secondary" onClick={generarPregunta}>
        Generar Pregunta
      </Button>
    </Box>
  )
}

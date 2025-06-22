import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { generarPregunta } from '../../api'

export default function PreguntaGenerador () {
  const [tema, setTema] = useState('')
  const [pregunta, setPregunta] = useState('')

  const handleGenerar = async () => {
    if (!tema) return
    const respuesta = await generarPregunta(tema)
    setPregunta(respuesta.pregunta || 'No se pudo generar una pregunta.')
  }

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        Escribe un tema y genera una pregunta
      </Typography>
      <TextField
        fullWidth
        label='Tema'
        variant='outlined'
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant='contained' color='primary' onClick={handleGenerar}>
        Generar Pregunta
      </Button>
      {pregunta && (
        <Box mt={3}>
          <Typography variant='subtitle1'>Pregunta generada:</Typography>
          <Typography variant='body1'>{pregunta}</Typography>
        </Box>
      )}
    </Box>
  )
}

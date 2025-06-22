import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'

export default function RespuestaForm () {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Responder Pregunta</Typography>
      <Typography variant="body1" mb={2}>
        Escribe tu respuesta y obtén retroalimentación al instante.
      </Typography>
      <TextField
        label="Tu respuesta"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary">Enviar Respuesta</Button>
    </Box>
  )
}

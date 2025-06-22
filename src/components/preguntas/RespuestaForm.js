import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { enviarRespuesta } from '../../api'

export default function RespuestaForm () {
  const [respuesta, setRespuesta] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleEnviar = async () => {
    const result = await enviarRespuesta(respuesta)
    setFeedback(result.mensaje || 'Sin retroalimentación.')
  }

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        Envía tu respuesta
      </Typography>
      <TextField
        fullWidth
        label='Tu respuesta'
        variant='outlined'
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant='contained' color='secondary' onClick={handleEnviar}>
        Enviar Respuesta
      </Button>
      {feedback && (
        <Box mt={3}>
          <Typography variant='subtitle1'>Feedback:</Typography>
          <Typography variant='body1'>{feedback}</Typography>
        </Box>
      )}
    </Box>
  )
}

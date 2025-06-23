import React, { useState } from 'react'
import { Box, Tabs, Tab, Paper } from '@mui/material'
import PreguntaGenerador from './preguntas/PreguntaGenerador'
import RespuestaForm from './preguntas/RespuestaForm'
import HistorialPreguntas from './preguntas/HistorialPreguntas'

export default function PreguntaDinamica () {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: 4 }}>
      <Paper elevation={6} sx={{ maxWidth: 800, mx: 'auto', p: 3, borderRadius: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor='primary'
          indicatorColor='primary'
        >
          <Tab label='Generar Pregunta' />
          <Tab label='Responder' />
          <Tab label='Historial' />
        </Tabs>

        <Box sx={{ mt: 3 }}>
          {value === 0 && <PreguntaGenerador />}
          {value === 1 && <RespuestaForm />}
          {value === 2 && <HistorialPreguntas />}
        </Box>
      </Paper>
    </Box>
  )
}

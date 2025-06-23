import React, { useState } from 'react'
import { Box, Tabs, Tab, Paper } from '@mui/material'
import PreguntaGenerador from './preguntas/PreguntaGenerador'
import RespuestaForm from './preguntas/RespuestaForm'
import HistorialPreguntas from './preguntas/HistorialPreguntas'

export default function Register () {
  const [tab, setTab] = useState(0)

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: 4 }}>
      <Paper sx={{ mb: 3 }} elevation={6}>
        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          textColor='primary'
          indicatorColor='primary'
        >
          <Tab label='Generar Pregunta' />
          <Tab label='Responder' />
          <Tab label='Historial' />
        </Tabs>
      </Paper>

      {tab === 0 && <PreguntaGenerador />}
      {tab === 1 && <RespuestaForm />}
      {tab === 2 && <HistorialPreguntas />}
    </Box>
  )
}

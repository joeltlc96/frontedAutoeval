import React, { useState } from 'react'
import { Box, Tabs, Tab, Paper } from '@mui/material'
import PreguntaGenerador from './preguntas/PreguntaGenerador'
import RespuestaForm from './preguntas/RespuestaForm'
import HistorialPreguntas from './preguntas/HistorialPreguntas'

export default function PreguntaDinamica () {
  const [tab, setTab] = useState(0)

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #003366, #001f3f)',
        minHeight: '100vh',
        padding: 4,
        color: 'white'
      }}
    >
      <Paper
        sx={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(6px)',
          mb: 3
        }}
        elevation={6}
      >
        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Generar Pregunta" sx={{ color: 'white' }} />
          <Tab label="Responder" sx={{ color: 'white' }} />
          <Tab label="Historial" sx={{ color: 'white' }} />
        </Tabs>
      </Paper>

      {tab === 0 && <PreguntaGenerador />}
      {tab === 1 && <RespuestaForm />}
      {tab === 2 && <HistorialPreguntas />}
    </Box>
  )
}

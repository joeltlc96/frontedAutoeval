import React, { useEffect, useState } from 'react'
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'
import { obtenerHistorial } from '../../api'

export default function HistorialPreguntas () {
  const [historial, setHistorial] = useState([])

  useEffect(() => {
    const fetchHistorial = async () => {
      const data = await obtenerHistorial()
      setHistorial(data)
    }
    fetchHistorial()
  }, [])

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        Historial de Preguntas
      </Typography>
      <List>
        {historial.map((item, index) => (
          <Box key={index}>
            <ListItem alignItems='flex-start'>
              <ListItemText
                primary={`Pregunta: ${item.pregunta}`}
                secondary={`Respuesta: ${item.respuesta}`}
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  )
}

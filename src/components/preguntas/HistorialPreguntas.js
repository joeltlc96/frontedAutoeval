import React from 'react'
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

export default function HistorialPreguntas () {
  const historial = [
    { pregunta: '¿Qué es una variable en JavaScript?', respuesta: 'Una caja donde guardas datos.' },
    { pregunta: '¿Para qué sirve React?', respuesta: 'Para construir interfaces web modernas.' }
  ]

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Historial de Preguntas</Typography>
      <List>
        {historial.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`🧠 ${item.pregunta}`}
              secondary={`📌 Respuesta: ${item.respuesta}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

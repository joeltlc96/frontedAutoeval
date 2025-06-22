// src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true
})

// Generar una pregunta
export const generarPregunta = async (tema) => {
  const res = await api.post('/pregunta', { tema })
  return res.data
}

// Enviar respuesta y obtener feedback
export const enviarRespuesta = async (respuesta) => {
  const res = await api.post('/feedback', { respuesta })
  return res.data
}

// Obtener historial
export const obtenerHistorial = async () => {
  const res = await api.get('/historial')
  return res.data
}

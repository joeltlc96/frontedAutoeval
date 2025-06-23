import React, { useState } from 'react'
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login () {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [mensaje, setMensaje] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        formData,
        { withCredentials: true }
      )

      const token = response.data.token
      localStorage.setItem('token', token) // 👈 Guarda el token
      setMensaje('✅ Inicio de sesión exitoso, redirigiendo...')

      setTimeout(() => {
        navigate('/preguntas') // 👈 Redirige a preguntas
      }, 1500)
    } catch (error) {
      console.error(error)
      setMensaje(error.response?.data?.mensaje || 'Error al iniciar sesión')
    }
  }

  return (
    <Container maxWidth='sm' sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant='h5' gutterBottom>
          Iniciar Sesión
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label='Usuario' name='username' onChange={handleChange} required />
            <TextField label='Contraseña' type='password' name='password' onChange={handleChange} required />
            <Button type='submit' variant='contained'>Entrar</Button>
          </Box>
        </form>

        {mensaje && (
          <Typography sx={{ mt: 2 }} color={mensaje.startsWith('✅') ? 'green' : 'error'}>
            {mensaje}
          </Typography>
        )}
      </Paper>
    </Container>
  )
}

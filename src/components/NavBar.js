import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar () {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    navigate('/logout')
  }

  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }} component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            AutoEval ✍️
          </Typography>

          {!token ? (
            <>
              <Button color='inherit' component={Link} to='/login'>
                Iniciar sesión
              </Button>
              <Button color='inherit' component={Link} to='/register'>
                Registrarse
              </Button>
            </>
          ) : (
            <>
              <Button color='inherit' component={Link} to='/preguntas'>
                Preguntas
              </Button>
              <Button color='inherit' onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

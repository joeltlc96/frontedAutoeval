import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

export default function NavBar () {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleLogout = () => {
    navigate('/logout')
  }

  const navItems = !token
    ? [
        { label: 'Iniciar sesión', to: '/login' },
        { label: 'Registrarse', to: '/register' }
      ]
    : [
        { label: 'Preguntas', to: '/preguntas' },
        { label: 'Cerrar sesión', onClick: handleLogout }
      ]

  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
          {isMobile && (
            <IconButton
              color='inherit'
              edge='start'
              onClick={() => setOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            <Button
              color='inherit'
              component={Link}
              to='/'
              sx={{ textTransform: 'none' }}
            >
              AutoEval ✍️
            </Button>
          </Typography>

          {!isMobile &&
            navItems.map((item) =>
              item.to ? (
                <Button
                  color='inherit'
                  component={Link}
                  to={item.to}
                  key={item.label}
                  sx={{ textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  color='inherit'
                  onClick={item.onClick}
                  key={item.label}
                  sx={{ textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              )
            )}
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpen(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to='/'>
                <ListItemText primary='Inicio' />
              </ListItemButton>
            </ListItem>
            {navItems.map((item) =>
              item.to ? (
                <ListItem disablePadding key={item.label}>
                  <ListItemButton component={Link} to={item.to}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem disablePadding key={item.label}>
                  <ListItemButton onClick={item.onClick}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

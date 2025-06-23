import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d47a1'
    },
    secondary: {
      main: '#d32f2f'
    },
    background: {
      default: '#f5f5f5'
    }
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif'
<<<<<<< HEAD
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    }
=======
>>>>>>> 6132b72939e3ff1cb146e10c9eacf589269788ea
  }
})

export default theme

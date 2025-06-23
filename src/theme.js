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
  }
})

export default theme

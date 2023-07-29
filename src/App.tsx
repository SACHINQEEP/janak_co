import './App.css'

import { StyledEngineProvider } from '@mui/joy/styles'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { ThemeProvider, createTheme } from '@mui/material'
import AppRouters from './routes'




const defalutTheme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    h1: {
      fontFamily: 'satoshi-regular',
    },
    h2: {
      fontFamily: 'satoshi-regular', // Font family for h2
    },
    h3: {
      fontFamily: 'satoshi-regular',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'satoshi-regular', // Font family for h2
      fontWeight: 'bold'
    },
    h5: {
      fontFamily: 'satoshi-regular',
      fontWeight: 'bold'
    },
    h6: {
      fontFamily: 'satoshi-regular', // Font family for h2
      fontWeight: 'bold'
    },
    body2: {
      fontFamily: 'satoshi-regular'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'satoshi-regular',
          textTransform: 'none',
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'satoshi-regular',
          padding: '8px 10px',
          fontSize: '15px',
          border: '2px solid white',
          color: 'white'
        }
      }
    },
  },
})

const App = () => {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={defalutTheme}>
          {/* <BrowserRouter > */}
          <AppRouters />
          {/* </BrowserRouter> */}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App


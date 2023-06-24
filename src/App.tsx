import './App.css'

import { StyledEngineProvider } from '@mui/joy/styles'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import LandingPage from './features/landingPage'
import NavBar from './features/shared/components/navbar'
import { ThemeProvider, createTheme } from '@mui/material'

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
          padding: '10px 50px',
          textTransform: 'none',
        }
      }
    }
  }
})


const App = () => {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={defalutTheme}>
          <NavBar />
          <LandingPage />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App


import './App.css'

import { StyledEngineProvider } from '@mui/joy/styles'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { ThemeProvider, createTheme } from '@mui/material'
// import AppRouters from './routes'

// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './main-store/store'

// import { HistoryRouter as Router } from 'redux-first-history/rr6';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import ErrorPage from "../src/components/error";
import AboutUsComponent from '../src/features/AboutUs/aboutUs.component'
const LandingPage = React.lazy(() => import('../src/features/landingPage'))




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
  }
})


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about-us",
    element: <AboutUsComponent />,
  },
]);

const App = () => {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={defalutTheme}>
          <Provider store={store}>
            {/* <Router history={history}> */}
            <RouterProvider router={router} />
            {/* <AppRouters /> */}
            {/* </Router> */}
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App


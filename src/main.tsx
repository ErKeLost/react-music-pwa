import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import App from './App'

import 'normalize.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback="loading">
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </ThemeProvider>
  </Suspense>
)

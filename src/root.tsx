import React, { ComponentType, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '@/theme/provider'
import CssBaseline from '@mui/material/CssBaseline'
import 'normalize.css'
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <Suspense fallback="loading">
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </Suspense>
  )
}

export default render

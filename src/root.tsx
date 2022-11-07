import React, { ComponentType, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { ThemeProvider } from '@mui/material/styles'
import ThemeProvider from '@/theme/provider'
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline'
import 'normalize.css'
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <Suspense fallback="loading">
      <CssBaseline>
        {/* <ThemeProvider theme={theme}> */}
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
        {/* </ThemeProvider> */}
      </CssBaseline>
    </Suspense>
  )
}

export default render

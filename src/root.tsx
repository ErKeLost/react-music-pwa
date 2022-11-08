import React, { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '@/theme/provider'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import 'normalize.css'
import store from '~/store'
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default render

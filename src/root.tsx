import React, { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '@/theme/provider'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import '@/assets/index.css'
import store from '~/store'
import ThemeProviderStyle from '@/theme/style-component'
import { RootWrapper } from './theme/root-wrapper'
import SW from '@/components/pwa/SW'
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <Provider store={store}>
      <ThemeProviderStyle>
        <RootWrapper>
          <ThemeProvider>
            <BrowserRouter>
              <CssBaseline />
              {/* <SW /> */}
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </RootWrapper>
      </ThemeProviderStyle>
    </Provider>
  )
}

export default render

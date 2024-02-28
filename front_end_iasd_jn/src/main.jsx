import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Home } from './pages/home'

import GlobalStyles from "./Styles/global"
import theme from './Styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Home />
      
    </ThemeProvider>
  </React.StrictMode>,
)
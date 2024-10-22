import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';

import { Home } from "./pages/Home"

import { AuthProvider } from "./hooks/auth.jsx"

import GlobalStyles  from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Home />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

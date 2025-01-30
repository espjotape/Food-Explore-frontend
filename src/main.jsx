import React from "react";
import ReactDOM from "react-dom/client";

import { CartProvider } from "./hooks/cartContext.jsx";
import { AuthProvider } from "./hooks/auth.jsx"
import { Routes } from "./routes";

import GlobalStyles  from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);

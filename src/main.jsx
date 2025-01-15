import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context api/photoContext.jsx';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
      <AuthProvider>
      <App/>
      </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)

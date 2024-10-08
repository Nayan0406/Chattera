import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'; 
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <CssBaseline />
    <div onContextMenu={(e) => e.preventDefault()}>
      <App />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)

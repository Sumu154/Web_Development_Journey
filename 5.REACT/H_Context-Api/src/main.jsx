import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import UserProvider from './Contexts/UserContext.jsx'
import ThemeProvider from './Contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> <ThemeProvider>
      <App />
    </ThemeProvider></UserProvider>
  </StrictMode>,
)

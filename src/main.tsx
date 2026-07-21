import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/reset.css'
import './app/styles/tokens.css'
import './app/styles/typography.css'
import './app/styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

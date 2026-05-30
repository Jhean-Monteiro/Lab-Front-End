import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Saudacao from './components/Saudacao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br /> 
    <Saudacao />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/header.jsx'
import { Start } from './components/Start.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Start/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/header.jsx'
import { Start } from './components/Start.jsx'
import { Tecnologies } from './components/Tecnologies.jsx'
import { Projects } from './components/Projects.jsx'
import GradientCursor from './components/GradientCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Start/>
    <Tecnologies/>
    <Projects/>
    <GradientCursor/>
  </StrictMode>,
)

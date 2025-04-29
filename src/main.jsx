import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/header.jsx'
import { Start } from './components/Start.jsx'
import { Tecnologies } from './components/Tecnologies.jsx'
import { Projects } from './components/Projects.jsx'
import { About } from './components/About.jsx'
import { Training } from './components/Training.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import GradientCursor from './components/GradientCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Start/>
    <Tecnologies/>
    <Projects/>
    <About/>
    <Training/>
    <Contact/>
    <Footer/>
    <GradientCursor/>
  </StrictMode>,
)

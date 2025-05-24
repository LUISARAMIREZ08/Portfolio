import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GradientCursor from './components/utils/GradientCursor.jsx'
import { ThemeProvider } from './components/utils/ThemeContext'
import FrontPage from './components/pages/FrontPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FrontPage/>
      <GradientCursor/>
    </ThemeProvider>
  </StrictMode>,
)

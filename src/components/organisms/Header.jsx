import { useState } from 'react'
import '../../styles/organisms/header.css'
import moonIcon from '../../assets/utilsIcons/moon.svg'
import sunIcon from '../../assets/utilsIcons/light.svg'
import menuIcon from '../../assets/utilsIcons/menu.svg' 
import menuWhite from '../../assets/utilsIcons/menuWhite.svg'
import closeIcon from '../../assets/utilsIcons/close.svg' 
import { useTheme } from '../utils/ThemeContext'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <>
        <div className="Header" id='header'>
            <div className='Container-name-menu'>
                <div className='Name'>
                <a className='nameLink' href='#start'>Luisa Ramirez</a>
                </div>
                <div className={`Menu ${menuOpen ? 'open' : ''}`}>
                  <a href="#start" onClick={() => setMenuOpen(false)}>Inicio</a>
                  <a href="#tecnologies" onClick={() => setMenuOpen(false)}>Tecnologías</a>
                  <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
                  <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
                  <a href="#training" onClick={() => setMenuOpen(false)}>Formación</a>
                </div>
            </div>
            <div className="Header-icons">
              <img
                src={theme === 'dark' ? moonIcon : sunIcon}
                alt="Cambiar tema"
                className="Icon"
                onClick={toggleTheme}
              />
              <img
                src={menuOpen
                  ? closeIcon
                  : theme === 'dark'
                    ? menuWhite
                    : menuIcon}
                alt="Menú"
                className="MenuIcon"
                onClick={toggleMenu}
              />
          </div>
        </div>
    </>
  )
}
export default Header
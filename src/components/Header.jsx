import React from 'react'
import '../styles/header.css'
import moonIcon from '../assets/moon.svg'
import sunIcon from '../assets/light.svg'
import { useTheme } from './ThemeContext'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
        <div className="Header" id='header'>
            <div className='Container-name-menu'>
                <div className='Name'>
                <a className='nameLink' href='#start'>Luisa Ramirez</a>
                </div>
                <div className='Menu'>
                <a href='#start'>Inicio</a>
                <a href='#tecnologies'>Tecnologías</a>
                <a href='#projects'>Proyectos</a>
                <a href='#about'>Sobre mí</a>
                <a href='#training'>Formación</a>
                </div>
            </div>
            <img
                src={theme === 'dark' ? moonIcon : sunIcon}
                alt="Cambiar tema"
                className='Icon'
                onClick={toggleTheme}
                style={{ cursor: 'pointer' }}
            />
        </div>
    </>
  )
}

export default Header
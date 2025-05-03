import React from 'react'
import '../styles/header.css'
import moonIcon from '../assets/moon.svg'

export const Header = () => {
  return (
    <>
        <div className='Header'>
            <div className='Container-name-menu'>
                <div className='Name'>
                <span>Luisa Ramirez</span>
                </div>
                <div className='Menu'>
                <a href='#start'>Inicio</a>
                <a href='#tecnologies'>Tecnologías</a>
                <a href='#projects'>Proyectos</a>
                <a href='#about'>Sobre mí</a>
                <a href='#training'>Formación</a>
                </div>
            </div>
            
            <img src={moonIcon} alt="Modo oscuro" className='Icon'/>
        </div>
    </>
  )
}

export default Header
import React from 'react'
import '../styles/header.css'
import moonIcon from '../assets/moon.svg'

export const Header = () => {
  return (
    <>
        <div className='Header'>
            <div className='Container-name-menu '>
                <div className='Name'>
                    <span>Luisa Ramirez</span>
                </div>
                <div className='Menu'>
                    <a>Inicio</a>
                    <a>Tecnologías</a>
                    <a>Proyectos</a>
                    <a>Sobre mí</a>
                    <a>Formación</a>
                </div>
            </div>
            <div>
            <img src={moonIcon} alt="Modo oscuro" className='Icon '/>
            </div>
        </div>
    </>
  )
}

export default Header
import React from 'react'
import '../styles/about.css'
import Project from '../assets/Info.svg?react'   
export const About = () => {
  return (
    <>
        <div className='container-about' id='about'>
            <div className='container-projects-text'>
                <Project className='Icon-title'/>
                <h2 className='tittle-projects'>Sobre mí</h2>
            </div>
            <p className='text-about'>
                ¡Hola! Soy Luisa, estudiante de Ingeniería de Sistemas en la Universidad Tecnológica de Pereira y con formación en desarrollo Full-Stack.  Me encanta crear soluciones con código,  desarrollar paginas web con interfaces llamativas y funcionales.  Soy una persona organizada, creativa y autidacta, me encanta aprender y estar actualizada de los avances de la tecnológia cada dia. 
            </p>
        </div>
    </>
  )
}

export default About
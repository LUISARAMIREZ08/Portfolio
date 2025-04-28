import React from 'react'
import IconButton from './IconButton'
import '../styles/start.css'
import imgPerson from '../assets/person.svg'
import mail from '../assets/mail.svg'
import github from '../assets/git.svg'
import CV from '../assets/cv.svg'

export const Start = () => {
  return (
    <>
        <div className='container-start'>
            <div className='container-start-text'>
                <h1 className='tittle-hello'>Hola!, Soy Luisa</h1>
                <h1 className='tittle-dw animated-gradient'>Desarrolladora Web</h1>
                <p>Me apasiona crear sitios web funcionales y atractivos, enfocados en ofrecer una experiencia única a los usuarios.</p>
                <div className='container-start-btn'>
                    <IconButton
                        iconSrc={mail} 
                        label="Contáctame"
                        onClick={() => alert('Curriculum')}
                    />
                    <IconButton
                        iconSrc={CV} 
                        label="CV"
                        onClick={() => alert('Curriculum')}
                    />
                    <IconButton
                        iconSrc={github} 
                        label="GitHub"
                        onClick={() => alert('Curriculum')}
                    />
                </div>
            </div>
            <div className='container-start-img '>
                <img src={imgPerson} alt="Luisa Ramirez" className='img-person '/>
            </div>
        </div>
    </>
  )
}

export default Start

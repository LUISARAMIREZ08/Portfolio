import React from 'react'
import project from '../assets/project.svg'  
import '../styles/contact.css'
import Github from '../assets/github2.svg?react'
import Cv2 from '../assets/cv2.svg?react'

export const Contact = () => {
  return (
    <>
        <div className='container-contact'>
            <div className='container-projects-text'>
                <img src={project} alt="vector" className='Icon'/>
                <h2 className='tittle-projects'>Contáctame</h2>
            </div>
            <p className='text-contact'>
                Si deseas ponerte en contacto conmigo, puedes escribirme a mi correo electronico.
            </p>
            <div className='container-contact-form'>
                <form className='form-contact'>
                    <input type="text" placeholder='Nombre' className='input-contact'/>
                    <input type="email" placeholder='User@mail.com' className='input-contact'/>
                    <textarea placeholder='Me interesa trabajar contigo!!' className='textarea-contact'></textarea>
                    <button type="submit" className='btn-submit'>Enviar</button>
                </form>
            </div>
        </div>
        
    </>
  )
}

export default Contact
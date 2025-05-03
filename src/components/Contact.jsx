import React, { useRef } from 'react'
import project from '../assets/project.svg'  
import '../styles/contact.css'
import emailjs from '@emailjs/browser'
import Github from '../assets/github2.svg?react'
import Cv2 from '../assets/cv2.svg?react'

export const Contact = () => {
    const form = useRef()
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm(
        'service_w1xsb9h',       // <-- Reemplaza con tu Service ID
        'template_pdqxub7',      // <-- Reemplaza con tu Template ID
        form.current,
        'EU0Q0nmhSDI5adb-d'       // <-- Tu public key de EmailJS
      )
      .then((result) => {
          console.log(result.text)
          alert('Mensaje enviado con éxito ✉️')
          form.current.reset()
      }, (error) => {
          console.log(error.text)
          alert('Error al enviar mensaje 😞')
      })
    }
  
    return (
      <div className='container-contact' id='contact'>
        <div className='container-projects-text'>
          <img src={project} alt="vector" className='Icon'/>
          <h2 className='tittle-projects'>Contáctame</h2>
        </div>
        <p className='text-contact'>
          Si deseas ponerte en contacto conmigo, puedes escribirme a mi correo electrónico.
        </p>
        <div className='container-contact-form'>
          <form ref={form} onSubmit={sendEmail} className='form-contact'>
            <input type="text" name="name" placeholder="Nombre" className="input-contact" required />
            <input type="email" name="email" placeholder="User@mail.com" className="input-contact" required />
            <textarea name="message" placeholder="Me interesa trabajar contigo!!" className="textarea-contact" required></textarea>
            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact
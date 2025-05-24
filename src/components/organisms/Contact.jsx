import { useRef } from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Mail from '../../assets/titleIcons/contact.svg?react'  
import '../../styles/organisms/contact.css'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef()
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm(
        'service_w1xsb9h',       // <-- Service ID
        'template_pdqxub7',      // <-- Template ID
        form.current,
        'EU0Q0nmhSDI5adb-d'      // <-- Public key de EmailJS
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
      <SectionTitle Icon={Mail} title="Contáctame" />
      <p className='text-contact'>
        Si deseas ponerte en contacto conmigo, puedes escribirme a mi correo electrónico.
      </p>
      <div className='container-contact-form'>
        <form ref={form} onSubmit={sendEmail} className='form-contact'>
          <input type="text" name="name" placeholder="Nombre" className="input-contact" required />
          <input type="email" name="email" placeholder="Correo Electrónico" className="input-contact" required />
          <textarea name="message" placeholder="Me interesa trabajar contigo!!" className="textarea-contact" required></textarea>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
export default Contact
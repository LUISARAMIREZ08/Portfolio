import { useRef, useState } from 'react'
import { Alert, Collapse } from '@mui/material'
import SectionTitle from '../molecules/SectionTitle'
import Mail from '../../assets/titleIcons/contact.svg?react'  
import '../../styles/organisms/contact.css'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef()
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertType, setAlertType] = useState('success') 
    const [alertMessage, setAlertMessage] = useState('')
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
        setAlertType('success')
        setAlertMessage('Mensaje enviado con éxito')
        setAlertOpen(true)
        form.current.reset()
        setTimeout(() => {
          setAlertOpen(false)
        }, 3000)
      }, (error) => {
        console.log(error.text)
        setAlertType('error')
        setAlertMessage('Error al enviar mensaje')
        setAlertOpen(true)
        setTimeout(() => {
          setAlertOpen(false)
        }, 3000)
      })
    }
  
  return (
    <div className='container-contact' id='contact'>
      <SectionTitle Icon={Mail} title="Contáctame" />
      <p className='text-contact'>
        Si deseas ponerte en contacto conmigo, puedes escribirme a mi correo electrónico.
      </p>
      <div className='container-contact-form'>
        <Collapse in={alertOpen}>
          <Alert severity={alertType} sx={{ mb: 2 }}>
            {alertMessage}
          </Alert>
        </Collapse>
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
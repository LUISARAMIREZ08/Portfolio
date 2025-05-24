import { useEffect, useState } from 'react'
import IconButton from '../molecules/IconButton'
import '../../styles/organisms/start.css'
import imgPerson from '../../assets/person/person.svg'
import imgPersonPhone from '../../assets/person/PersonPhone.svg'
import mail from '../../assets/contactIcons/mail.svg'
import github from '../../assets/contactIcons/GitHub.svg'
import CV from '../../assets/contactIcons/cv.svg'
import linkedin from '../../assets/contactIcons/linkedin.svg'

export const Start = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024)
    }

    handleResize() 
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    }, [])

  return (
    <>
        <div className="container-start" id='start'>
            <div className='container-start-text'>
                <h1 className='tittle-hello'>Hola! Soy Luisa</h1>
                <h1 className='tittle-dw animated-gradient'>Desarrolladora Web</h1>
                <p>Me encanta crear sitios web funcionales y atractivos, enfocados en ofrecer una experiencia única a los usuarios.</p>
                <div className='container-start-btn'>
                    <IconButton
                        iconSrc={CV} 
                        label="CV"
                        onClick={() => window.open('/CV_LuisaRamirez.pdf', '_blank')}
                    />
                    <IconButton
                        iconSrc={github} 
                        label="GitHub"
                        onClick={() => window.open('https://github.com/LUISARAMIREZ08', '_blank')}
                    />
                    <IconButton
                        iconSrc={linkedin} 
                        label="Linkedin"
                        onClick={() => window.open('https://www.linkedin.com/in/luisa-fernanda-ramirez-velasco-9455a1322/', '_blank')}
                    />
                    <IconButton
                        iconSrc={mail} 
                        label="Contáctame"
                        onClick={() => {
                            const section = document.getElementById('contact')
                            if (section) {
                              section.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                    />
                </div>
            </div>
            <div className='container-start-img '>
                <img
                    src={isMobile ? imgPersonPhone : imgPerson}
                    alt="Luisa Ramirez"
                    className='img-person'
                />
            </div>
        </div>
    </>
  )
}

export default Start

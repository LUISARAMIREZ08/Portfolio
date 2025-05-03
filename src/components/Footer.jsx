import React from 'react'
import '../styles/footer.css'
import Github from '../assets/github2.svg?react'
import Cv2 from '../assets/cv2.svg?react'

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='container-footer'>
                <div className='container-contact-links'>
                <div className="icon-container">
                    <a href='https://github.com/LUISARAMIREZ08' target="_blank" rel="noopener noreferrer">
                        <Github className="img-link" />
                        <span className="tooltip">GitHub</span>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="/CV_LuisaRamirez.pdf" target="_blank" rel="noopener noreferrer">
                        <Cv2 className="img-link" />
                        <span className="tooltip">CV</span>
                    </a>
                </div>
                </div>
                <div className='container-footer-text'>
                    <p className='text-footer-by'>Developed by</p>
                    <p className='text-footer-name'>Luisa Ramirez</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
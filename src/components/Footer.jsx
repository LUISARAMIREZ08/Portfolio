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
                <div class="icon-container">
                    <Github className="img-link" />
                    <span class="tooltip">GitHub</span>
                </div>
                <div class="icon-container">
                    <Cv2 className="img-link" />
                    <span class="tooltip">CV</span>
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
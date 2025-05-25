import '../../styles/organisms/footer.css'
import '../../styles/molecules/SocialIcon.css'
import SocialIcon from '../molecules/SocialIcon'
import Github from '../../assets/contactIcons/github2.svg?react'
import Cv2 from '../../assets/contactIcons/cv2.svg?react'
import LinkedinSmall from '../../assets/contactIcons/linkedinSmall.svg?react'

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='container-footer'>
                <div className='container-contact-links'>
                <SocialIcon 
                    href="https://github.com/LUISARAMIREZ08" 
                    IconComponent={Github} 
                    label="GitHub" 
                />
                <SocialIcon
                    href="/CV_LuisaRamirez.pdf" 
                    IconComponent={Cv2} 
                    label="CV"
                />
                <SocialIcon
                    href="https://www.linkedin.com/in/luisa-fernanda-ramirez-velasco-9455a1322/" 
                    IconComponent={LinkedinSmall} 
                    label="Linkedin"
                />
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
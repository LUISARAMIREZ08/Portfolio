import '../../styles/organisms/about.css'
import SectionTitle from '../molecules/SectionTitle'
import AboutMe from '../../assets/titleIcons/Info.svg?react'   
import PersonAbout from '../../assets/person/PersonAbout.svg'
export const About = () => {
  return (
    <>
        <div className='container-about' id='about'>
            <SectionTitle Icon={AboutMe} title="Sobre mí" />
            <div className='container-text-img-about'>
                <p className='text-about'>
                  ¡Hola! Soy Luisa, estudiante de Ingeniería de Sistemas en la Universidad Tecnológica de Pereira y con formación en desarrollo Full-Stack.  Me encanta crear soluciones con código,  desarrollar paginas web con interfaces llamativas y funcionales.  Soy una persona organizada, creativa y autidacta, me encanta aprender y estar actualizada de los avances de la tecnológia cada dia. 
                </p>
                <div className='container-img-about'>
                    <img src={PersonAbout} alt="person" className='img-about'/>
                </div>
            </div>
        </div>
    </>
  )
}
export default About
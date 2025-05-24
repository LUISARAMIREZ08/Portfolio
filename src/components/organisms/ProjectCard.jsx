import { useState } from 'react'
import ArrowIcon from '../../assets/utilsIcons/arrow.svg?react'
import ButtonTech from '../atoms/ButtonTech'

const ProjectCard = ({ title, description, image, stack, stack2, href, container, reverse = false}) => {
  const [showText, setShowText] = useState(false)
  const toggleText = () => setShowText(!showText)
  return (
    <div className='container-projects-card'>
        <a href={href} target="_blank" rel="noopener noreferrer" className={`card-link ${reverse ? 'reverse' : ''}`}>
      <div className={container}>
        <img src={image} alt="preview" className='img-card' />
      </div>
      <div className='container-text-card'>
        <div className='container-text-img-card'>
          <h3 className='title-card'>{title}</h3>
          <ArrowIcon className='img-arrow' />
          <button
            className='btn-toggle-text'
            onClick={(e) => {
              e.preventDefault() // evita navegación del enlace
              toggleText()
            }}
          >
            {showText ? 'Ocultar' : 'Ver descripción'}
          </button>
        </div>

        {/* Botón que solo se muestra en pantallas pequeñas */}
          

          {/* Texto condicional */}
          <p className={`text-card ${showText ? 'show' : 'hide'}`}>
            <small>{description}</small>
          </p>

          <div className='container-btn-card'>
            {stack.map((tech, i) => <ButtonTech key={i} label={tech} />)}
          </div>

          <div className='container-btn-card-2'>
            {stack2.map((tech, i) => <ButtonTech key={i} label={tech} />)}
          </div>
          
      </div>
      </a>
    </div>
  )
}
export default ProjectCard

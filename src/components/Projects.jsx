import React from 'react'
import '../styles/projects.css'
import project from '../assets/project.svg'
import card from '../assets/card.svg'
import ArrowIcon from '../assets/arrow.svg?react'

export const Projects = () => {
  return (
    <>
        <div className='container-projects' id='projects'>
            <div className='container-projects-text'>
                <img src={project} alt="vector" className='Icon'/>
                <h2 className='tittle-projects'>Proyectos</h2>
            </div>
            <div className='container-projects-card'>
                <img src={card} alt="vector" className='img-card'/>
                <div className='container-text-card'>
                    <div className='container-text-img-card'>
                        <h3 className='tittle-card'>Proyecto 1</h3>
                        <ArrowIcon className='img-arrow'/>
                    </div>
                    <p className='text-card'>
                        <small>
                            Descripcion del poryecto, este proyecto se trata de un computador con forma de gato y tiene un raton con forma de perro.
                        </small>
                    </p>
                    <div className='container-btn-card'>
                        <button className='btn-card'>React</button>
                        <button className='btn-card'>JavaScript</button>
                    </div>
                </div>
            </div>
            <div className='container-projects-card'>
                <img src={card} alt="vector" className='img-card'/>
                <div className='container-text-card'>
                    <div className='container-text-img-card'>
                        <h3 className='tittle-card'>Proyecto 1</h3>
                        <ArrowIcon className='img-arrow'/>
                    </div>
                    <p className='text-card'>
                        <small>
                            Descripcion del proyecto, este proyecto se trata de un computador con forma de gato y tiene un raton con forma de perro.
                        </small>
                    </p>
                    <div className='container-btn-card'>
                        <button className='btn-card'>Java</button>
                        <button className='btn-card'>Spring</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects
import React from 'react'
import '../styles/tecnologies.css'
import Vector from '../assets/vector.svg?react'
import reactIcon from '../assets/React.svg'
import cssIcon from '../assets/CSS.svg'
import jsIcon from '../assets/JS.svg'
import htmlIcon from '../assets/HTML.svg'
import gitIcon from '../assets/Git.svg'
import javaIcon from '../assets/Java.svg'
import pythonIcon from '../assets/Python.svg'
import mysqlIcon from '../assets/MySql.svg'
import figmaIcon from '../assets/Figma.svg'
import csharpIcon from '../assets/Csharp.svg'


export const Tecnologies = () => {
  return (
    <> 
        <div className='container-tecnologies' id='tecnologies'>
            <div className='line'></div>
            <div className='container-tecnologies-text'>
                <Vector className='Icon-title'/>
                <h2 className='tittle-tecnologies'>Tecnologías</h2>
            </div>
            <div className='container-tecnologies-icons'>
              <div className='container-tecnologies-icons-text'>
                <img src={reactIcon} alt="reactIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>React</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={jsIcon} alt="jsIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>JavaScript</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={csharpIcon} alt="csharpIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>C#</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={pythonIcon} alt="pythonIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>Python</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={javaIcon} alt="javaIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>Java</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={cssIcon} alt="cssIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>CSS</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={htmlIcon} alt="htmlIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>HTML</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={gitIcon} alt="gitIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>Git</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={mysqlIcon} alt="mysqlIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>MySQL</h4>
              </div>
              <div className='container-tecnologies-icons-text'>
                <img src={figmaIcon} alt="figmaIcon" className='Icon'/>
                <h4 className='tittle-tecnologies-icons'>Figma</h4>
              </div>
            </div>
            <div className='line'></div>
        </div>
    </>
  )
}

export default Tecnologies
import React from 'react'
import '../styles/tecnologies.css'
import vector from '../assets/vector.svg'
import reactIcon from '../assets/reactIcon.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/js.svg'
import htmlIcon from '../assets/html.svg'
import gitIcon from '../assets/gitV.svg'
import javaIcon from '../assets/java.svg'
import pythonIcon from '../assets/python.svg'
import mysqlIcon from '../assets/mysql.svg'
import figmaIcon from '../assets/Figma.svg'
import csharpIcon from '../assets/csharp.svg'


export const Tecnologies = () => {
  return (
    <> 
        <div className='container-tecnologies' id='tecnologies'>
            <div className='line'></div>
            <div className='container-tecnologies-text'>
                <img src={vector} alt="vector" className='Icon'/>
                <h2 className='tittle-tecnologies'>Tecnologías</h2>
            </div>
            <div className='container-tecnologies-icons'>
                <img src={reactIcon} alt="reactIcon" className='Icon'/>
                <img src={jsIcon} alt="jsIcon" className='Icon'/>
                <img src={csharpIcon} alt="csharpIcon" className='Icon'/>
                <img src={pythonIcon} alt="pythonIcon" className='Icon'/>
                <img src={javaIcon} alt="javaIcon" className='Icon'/>
                <img src={cssIcon} alt="cssIcon" className='Icon'/>
                <img src={htmlIcon} alt="htmlIcon" className='Icon'/>
                <img src={gitIcon} alt="gitIcon" className='Icon'/>
                <img src={mysqlIcon} alt="mysqlIcon" className='Icon'/>
                <img src={figmaIcon} alt="figmaIcon" className='Icon'/>
            </div>
            <div className='line'></div>
        </div>
    </>
  )
}

export default Tecnologies
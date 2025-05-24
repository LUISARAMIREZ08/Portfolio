import '../../styles/organisms/tecnologies.css'
import SectionTitle from '../molecules/SectionTitle'
import IconsName from '../molecules/IconsName'
import Vector from '../../assets/titleIcons/vector.svg?react'
import reactIcon from '../../assets/tecnologiesIcons/React.svg'
import cssIcon from '../../assets/tecnologiesIcons/CSS.svg'
import jsIcon from '../../assets/tecnologiesIcons/JS.svg'
import htmlIcon from '../../assets/tecnologiesIcons/HTML.svg'
import gitIcon from '../../assets/tecnologiesIcons/Git.svg'
import javaIcon from '../../assets/tecnologiesIcons/Java.svg'
import pythonIcon from '../../assets/tecnologiesIcons/Python.svg'
import mysqlIcon from '../../assets/tecnologiesIcons/MySql.svg'
import figmaIcon from '../../assets/tecnologiesIcons/Figma.svg'
import csharpIcon from '../../assets/tecnologiesIcons/Csharp.svg'

export const Tecnologies = () => {
  return (
    <> 
        <div className='container-tecnologies' id='tecnologies'>
            <div className='line'></div>
            <SectionTitle Icon={Vector} title="Tecnologías" />
            <div className='container-tecnologies-icons'>
              <IconsName src={reactIcon} alt="reactIcon" text="React" />
              <IconsName src={jsIcon} alt="jsIcon" text="JavaScript" />
              <IconsName src={csharpIcon} alt="csharpIcon" text="C#" />
              <IconsName src={pythonIcon} alt="pythonIcon" text="Python" />
              <IconsName src={javaIcon} alt="javaIcon" text="Java" />
              <IconsName src={cssIcon} alt="cssIcon" text="CSS" />
              <IconsName src={htmlIcon} alt="htmlIcon" text="HTML" />
              <IconsName src={gitIcon} alt="gitIcon" text="Git" />
              <IconsName src={mysqlIcon} alt="mysqlIcon" text="MySQL" />
              <IconsName src={figmaIcon} alt="figmaIcon" text="Figma" />
            </div>
            <div className='line'></div>
        </div>
    </>
  )
}
export default Tecnologies
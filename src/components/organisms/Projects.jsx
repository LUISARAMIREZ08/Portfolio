import '../../styles/organisms/projects.css'
import '../../styles/organisms/projectCard.css'
import '../../styles/molecules/sectionTitle.css'
import SectionTitle from '../molecules/SectionTitle'
import ProjectCard from './ProjectCard'
import task from '../../assets/images/task.png'
import VitalFood from '../../assets/images/VitalFood.png'
import HumanEase from '../../assets/images/HumanEase.png'
import Project from '../../assets/titleIcons/Projects.svg?react'

export const Projects = () => {
  return (
    <section className='container-projects' id='projects'>
      <SectionTitle Icon={Project} title="Proyectos" />
        <ProjectCard
            href="https://github.com/LUISARAMIREZ08/Human_Ease"
            title="HumanEase"
            description="Human Ease es una app web para gestionar empleados y procesos de contratación. Mi trabajo fue desarrollar todo el backend con Spring Boot y MySQL, además de integrar el registro e inicio de sesión en Angular usando JWT. Aunque fue un reto porque era mi primera vez usando Spring Boot, fue una gran oportunidad para aprender y mejorar mis habilidades full stack. El proyecto lo trabajamos en equipo, aplicando el marco de trabajo Scrum."
            image={HumanEase}
            stack={['Java', 'Spring Boot','MySQL', 'Angular', 'TypeScript']}
            stack2={['Backend', 'Frontend']}
            container="container-card-img-project-3"
            reverse={true}
        />
        <ProjectCard
            href="https://github.com/LUISARAMIREZ08/app_to_do"
            title="DayLu"
            description="DayLu es una aplicación web de lista de tareas que desarrollé como uno de mis primeros proyectos. Permite agregar, marcar como completadas y eliminar tareas. La hice usando Django y Python, y también trabajé el frontend con HTML y CSS usando el sistema de templates del framework."
            image={task}
            stack={['Python', 'Django', 'HTML', 'CSS']}
            stack2={['Frontend', 'Backend']}
            container="container-card-img-project"
            reverse={false}
        />
        <ProjectCard
            href="https://www.figma.com/proto/jz0mewJoPNa5Qq785fBhf6/App-Comida-Saludable?node-id=84-208&starting-point-node-id=41%3A26&t=jGNELmakzU9E0fSI-1 "
            title="VitalFood"
            description="Este prototipo lo hice en Figma aplicando mis conocimientos en diseño UX/UI. Quise crear una app sencilla y útil, con recetas saludables. Fue una gran oportunidad para seguir mejorando en la creación de interfaces claras y fáciles de usar."
            image={VitalFood}
            stack={['Figma' , 'Wireframes', 'Prototipos']}
            stack2={['Diseño UX/UI']}
            container="container-card-img-project-2"
            reverse={true}
        />
    </section>
  )
}
export default Projects

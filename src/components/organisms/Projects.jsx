import '../../styles/organisms/projects.css'
import '../../styles/organisms/projectCard.css'
import '../../styles/molecules/sectionTitle.css'
import SectionTitle from '../molecules/SectionTitle'
import ProjectCard from './ProjectCard'
import task from '../../assets/images/task.png'
import VitalFood from '../../assets/images/VitalFood.png'
import Project from '../../assets/titleIcons/Projects.svg?react'

export const Projects = () => {
  return (
    <section className='container-projects' id='projects'>
      <SectionTitle Icon={Project} title="Proyectos" />
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

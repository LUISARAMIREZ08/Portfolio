import '../../styles/organisms/projects.css'
import '../../styles/organisms/projectCard.css'
import '../../styles/molecules/sectionTitle.css'
import SectionTitle from '../molecules/SectionTitle'
import ProjectCard from './ProjectCard'
import task from '../../assets/images/task.png'
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
            stack2={['Fronted', 'Backend']}
        />
    </section>
  )
}
export default Projects

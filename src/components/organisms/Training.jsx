import '../../styles/organisms/training.css'
import SectionTitle from '../molecules/SectionTitle'
import SectionTraining from '../molecules/SectionTraining'
import School from '../../assets/titleIcons/school.svg?react' 

export const Training = () => {
  return (
    <>
        <div className='container-training' id='training'>
            <SectionTitle Icon={School} title="Formación" />
            <div className='container-training-cards'>
                <SectionTraining 
                    Title= 'Ingeniería de Sistemas y Computación'
                    School='Universidad Tecnológica de Pereira'
                    Date='2020 - Presente'
                />
                <SectionTraining
                    Title='Programación Junior Full-Stack'
                    School='Universidad Tecnológica de Pereira'
                    Date='2024'
                />
                <SectionTraining
                    Title='Técnico en Sistemas'
                    School='SENA'
                    Date='2017 - 2018'
                />
            </div>
        </div>
    </>
  )
}
export default Training
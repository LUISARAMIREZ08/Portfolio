import '../../styles/organisms/training.css'
import SectionTitle from '../molecules/SectionTitle'
import School from '../../assets/titleIcons/school.svg?react' 

export const Training = () => {
  return (
    <>
        <div className='container-training' id='training'>
            <SectionTitle Icon={School} title="Formación" />
            <div className='container-training-cards'>
                <div className='container-training-card'>
                    <h3 className='tittle-card'>Ingeniería de Sistemas y Computacion</h3>
                    <p className='text-card'>
                        <small>
                            Universidad Tecnológica de Pereira
                        </small>
                    </p>
                    <p className='text-card'>
                        <small>
                            2020 - Presente
                        </small>
                    </p>
                </div>
                <div className='container-training-card'>
                    <h3 className='tittle-card'>Programacion Junior Full-Stack</h3>
                    <p className='text-card'>
                        <small>
                            Universidad Tecnológica de Pereira
                        </small>
                    </p>
                    <p className='text-card'>
                        <small>
                            2024
                        </small>
                    </p>
                </div>
                <div className='container-training-card'>
                    <h3 className='tittle-card'>Técnico en Sistemas</h3>
                    <p className='text-card'>
                        <small>
                            SENA                    
                        </small>
                    </p>
                    <p className='text-card'>
                        <small>
                            2017 - 2018
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Training
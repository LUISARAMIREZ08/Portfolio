export const SectionTraining = ({Title, School, Date}) => {
  return (
    <div className='container-training-card'>
        <h3 className='title-card-training'>{Title}</h3>
        <p className='text-card-training'>
            <small>
                {School}
            </small>
        </p>
        <p className='text-card-training'>
            <small>
                {Date}
            </small>
        </p>
    </div>
  )
}
export default SectionTraining
export const SectionTitle = ({ Icon, title }) => (
  <div className='container-title-text'>
    {Icon && <Icon className='Icon-title' />}
    <h2 className='tittle-projects'>{title}</h2>
  </div>
)
export default SectionTitle
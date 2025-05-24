export const IconsName = ({src, alt, text}) => {
  return (
    <div className='container-tecnologies-icons-text'>
      <img src={src} alt={alt} className='Icon'/>
      <h4 className='tittle-tecnologies-icons'>{text}</h4>
    </div>
  )
}
export default IconsName
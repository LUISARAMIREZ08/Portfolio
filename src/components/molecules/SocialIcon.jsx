export const SocialIcon = ({ href, IconComponent, label }) => {
  return (
    <div className="icon-container">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <IconComponent className="img-link" />
        <span className="tooltip">{label}</span>
      </a>
    </div>
  )
}
export default SocialIcon
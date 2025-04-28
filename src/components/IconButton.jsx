import React from 'react';
const IconButton = ({ iconSrc, label, onClick }) => {
  return (
    <button onClick={onClick} className="icon-button">
      <img src={iconSrc} alt="icon" width={20} height={20} />
      {label && <span>{label}</span>}
    </button>
  );
};

export default IconButton;

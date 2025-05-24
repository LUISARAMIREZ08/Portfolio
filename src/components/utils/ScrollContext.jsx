// src/context/ScrollContext.jsx
import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const inicioRef = useRef(null);
  const tecnologiasRef = useRef(null);
  const proyectosRef = useRef(null);
  const sobreMiRef = useRef(null);
  const formacionRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 80; // Ajusta según la altura de tu navbar
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        inicioRef,
        tecnologiasRef,
        proyectosRef,
        sobreMiRef,
        formacionRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
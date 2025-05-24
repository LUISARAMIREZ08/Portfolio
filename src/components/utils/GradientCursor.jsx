import { useState, useEffect } from 'react';
import '../../styles/gradientCursor.css';

const GradientCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detects if the device is touch-enabled
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsMobile(mediaQuery.matches);

    const updateMatch = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div 
      className="gradient-cursor" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
      }}
    />
  );
};

export default GradientCursor;

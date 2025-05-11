import React, { useRef, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (lightRef.current) {
        const { clientX, clientY } = e;
        const { left, top } = lightRef.current.getBoundingClientRect();
        const x = (clientX - left) / 20;
        const y = (clientY - top) / 20;
        lightRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home-container">
      {/* Ceiling mount */}
      <div className="ceiling-mount"></div>
      
      {/* Cable */}
      <div className="lamp-cable"></div>
      
      {/* Lamp shade with floating light */}
      <div className="lamp-shade">
        <div ref={lightRef} className="lamp-light"></div>
      </div>
      
      {/* Glow effects */}
      <div className="lamp-glow"></div>
      <div className="lamp-glow-floor"></div>
      
      {/* Welcome text */}
      <div className="welcome-text">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and skills</p>
      </div>
    </div>
  );
};

export default Home;
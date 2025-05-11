import React, { useRef, useEffect } from 'react';
import './Home.css';
import HourGlassBackground from "./CodeRain";

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
      <HourGlassBackground />
      <div className="ceiling-mount"></div>
      <div className="lamp-cable"></div>
      <div className="lamp-shade">
        <div ref={lightRef} className="lamp-light"></div>
      </div>
      <div className="lamp-glow"></div>
      <div className="lamp-glow-floor"></div>
      <div className="welcome-text">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and skills</p>
      </div>
    </div>
  );
};

export default Home;
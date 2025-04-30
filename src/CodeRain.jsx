import React, { useEffect, useState } from "react";
import "./HourGlassBackground.css";

const HourGlassBackground = () => {
  const [particles, setParticles] = useState([]);
  const symbols = ["<>", "</>", "{}", "[]", "()", "*", "#", "//", "=>", "<=>"]; // Added more symbols

  useEffect(() => {
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 12); // Increased density
      const newParticles = Array.from({ length: particleCount }, (_, i) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 2; // Faster (2-5 seconds)
        const delay = Math.random() * 5;
        const fontSize = Math.random() * 12 + 10; // Slightly larger
        const opacity = Math.random() * 0.7 + 0.3; // More visible
        
        return {
          id: Date.now() + i,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          left,
          duration,
          delay,
          fontSize,
          opacity,
          keyframes: `@keyframes pileUp-${Date.now() + i} {
            0% { 
              top: -5%; 
              opacity: 0; 
              transform: translate(0, 0) rotate(0deg);
            }
            10% { 
              opacity: ${opacity};
            }
            90% { 
              opacity: ${opacity * 0.8};
            }
            100% { 
              top: 85%; 
              opacity: ${opacity * 0.5};
              transform: translate(${(Math.random() - 0.5) * 30}px, 0) rotate(${Math.random() * 20 - 10}deg);
            }
          }`
        };
      });

      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(createParticles, 2000); // More frequent generation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hourglass-bg">
      <style>
        {particles.map(particle => particle.keyframes)}
      </style>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="hourglass-particle pile-up"
          style={{
            left: `${particle.left}%`,
            animation: `pileUp-${particle.id} ${particle.duration}s linear ${particle.delay}s infinite`,
            fontSize: `${particle.fontSize}px`,
            opacity: particle.opacity,
            color: '#ff3333', // Bright red color
            textShadow: '0 0 5px #ff0000', // Red glow
            animationFillMode: 'forwards'
          }}
        >
          {particle.symbol}
        </span>
      ))}
    </div>
  );
};

export default HourGlassBackground;
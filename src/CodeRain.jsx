import React, { useEffect, useState } from "react";
import "./App.css";

const HourGlassBackground = () => {
  const [particles, setParticles] = useState([]);
  const symbols = ["<>", "</>", "{}", "[]", "()", "*", "#", "//"];

  useEffect(() => {
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20); // Adjust density based on screen width
      const newParticles = Array.from({ length: particleCount }, (_, i) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 10;
        const fontSize = Math.random() * 10 + 8;
        const opacity = Math.random() * 0.5 + 0.3; // Semi-transparent
        
        return {
          id: Date.now() + i, // Unique ID based on timestamp
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          left,
          duration,
          delay,
          fontSize,
          opacity,
          keyframes: `@keyframes hourglassFlow-${Date.now() + i} {
            0% { 
              top: -5%; 
              opacity: 0; 
              transform: translateX(0);
            }
            5% { 
              opacity: ${opacity};
            }
            50% { 
              transform: translateX(${(Math.random() - 0.5) * 20}px);
            }
            95% { 
              opacity: ${opacity};
            }
            100% { 
              top: 105%; 
              opacity: 0;
            }
          }`
        };
      });

      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(createParticles, 8000); // Refresh particles

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
          className="hourglass-particle"
          style={{
            left: `${particle.left}%`,
            animation: `hourglassFlow-${particle.id} ${particle.duration}s linear ${particle.delay}s infinite`,
            fontSize: `${particle.fontSize}px`,
            opacity: particle.opacity,
            color: `hsl(${Math.random() * 60 + 150}, 80%, 60%)` // Cool colors
          }}
        >
          {particle.symbol}
        </span>
      ))}
      <div className="hourglass-shape"></div>
    </div>
  );
};

export default HourGlassBackground;
import React, { useEffect, useState } from "react";
import "./HourGlassBackground.css";

const HourGlassBackground = () => {
  const [particles, setParticles] = useState([]);
  const symbols = ["<>", "{}", "()", "*"]; // Simple symbol set

  useEffect(() => {
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 25); // Reduced density
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: Date.now() + i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        duration: Math.random() * 8 + 4, // Slower fall (4-12 seconds)
        delay: Math.random() * 3,
        fontSize: Math.random() * 10 + 10,
        opacity: Math.random() * 0.2 + 0.1, // Very transparent (0.1-0.3)
        rotation: Math.random() * 15 - 7.5,
        drift: (Math.random() - 0.5) * 15
      }));

      setParticles(prev => [...prev.slice(-75), ...newParticles]); // Fewer total particles
    };

    const interval = setInterval(createParticles, 1500); // Less frequent generation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hourglass-bg">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="hourglass-particle"
          style={{
            left: `${particle.left}%`,
            animation: `fallAndPile ${particle.duration}s linear ${particle.delay}s forwards`,
            fontSize: `${particle.fontSize}px`,
            opacity: particle.opacity,
            color: 'rgba(255, 80, 80, 0.4)', // Very transparent red
            transform: `rotate(${particle.rotation}deg)`,
            '--drift': `${particle.drift}px`,
            '--final-opacity': `${particle.opacity * 0.3}` // Nearly disappears at bottom
          }}
        >
          {particle.symbol}
        </div>
      ))}
    </div>
  );
};

export default HourGlassBackground;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroAnimation.css';

const IntroAnimation = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      navigate('/home'); // Skip animation if already visited
    } else {
      setTimeout(() => {
        setVisible(false);
        localStorage.setItem('hasVisited', 'true');
        navigate('/home'); // Redirect after animation
      }, 3500); // Duration of the animation (3.5 seconds)
    }
  }, [navigate]);

  if (!visible) return null;

  return (
    <div className="intro-container">
      <div className="txt">TANAKA MAHAPA</div>
    </div>
  );
};

export default IntroAnimation;

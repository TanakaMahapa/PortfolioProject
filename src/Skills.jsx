import React, { useEffect, useState, useRef } from "react";
// Import Framer Motion components and hooks
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./SkillsCarousel.css";
import HourGlassBackground from "./CodeRain";


// Skill icons
import csharp from "./IconsAssets/csharp.jpg";
import css from "./IconsAssets/css.jpg";
import figma from "./IconsAssets/figma.jpg";
import html from "./IconsAssets/html.jpg";
import js from "./IconsAssets/js.png";
import react from "./IconsAssets/react.jpg";
import java from "./IconsAssets/java.jpg";
import python from "./IconsAssets/python.jpg";
import sql from "./IconsAssets/sql.jpg";

const SKILLS = [
  { name: "React", level: 72, icon: react, category: "Frontend" },
  { name: "JavaScript", level: 65, icon: js, category: "Frontend" },
  { name: "Figma", level: 80, icon: figma, category: "Design" },
  { name: "Python", level: 70, icon: python, category: "Backend" },
  { name: "SQL", level: 65, icon: sql, category: "Database" },
  { name: "HTML", level: 75, icon: html, category: "Frontend" },
  { name: "CSS", level: 70, icon: css, category: "Frontend" },
  { name: "Java", level: 67, icon: java, category: "Backend" },
  { name: "C#", level: 75, icon: csharp, category: "Backend" }
];

const SkillsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(SKILLS);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Update scroll constraints and arrow visibility
  const updateConstraints = () => {
    if (carouselRef.current && trackRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const newMaxScroll = -(trackWidth - containerWidth);
      setMaxScroll(newMaxScroll);
      
      // Update arrow visibility immediately
      setShowLeftArrow(x.get() < 0);
      setShowRightArrow(x.get() > newMaxScroll);
    }
  };

  // Filter skills and update constraints
  useEffect(() => {
    const updatedSkills = activeCategory === "All" 
      ? SKILLS 
      : SKILLS.filter(skill => skill.category === activeCategory);
    setFilteredSkills(updatedSkills);
    x.set(0);
    
    // Wait for DOM update then calculate
    setTimeout(updateConstraints, 0);
  }, [activeCategory, x]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // Update arrow visibility on scroll
  useEffect(() => {
    const unsubscribe = x.onChange(() => {
      setShowLeftArrow(x.get() < 0);
      setShowRightArrow(x.get() > maxScroll);
    });
    return () => unsubscribe();
  }, [maxScroll, x]);

  // Navigation functions
  const scrollLeft = () => {
    const newX = Math.min(x.get() + 300, 0);
    x.set(newX);
  };

  const scrollRight = () => {
    const newX = Math.max(x.get() - 300, maxScroll);
    x.set(newX);
  };

  const categories = ["All", ...new Set(SKILLS.map(skill => skill.category))];

  return (
    <div className="skills-container">
      <HourGlassBackground />

      <div className="skills-content">
        <h2 className="skills-title">🛠️ My Technical Skills</h2>
        <p className="skills-subtitle">
          Drag to explore my proficiency across technologies
        </p>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="carousel-controls">
          {showLeftArrow && (
            <button onClick={scrollLeft} className="carousel-arrow">
              ←
            </button>
          )}
          {showRightArrow && (
            <button onClick={scrollRight} className="carousel-arrow">
              →
            </button>
          )}
        </div>

        <div className="skills-carousel-wrapper">
          <div className="skills-carousel" ref={carouselRef}>
            <motion.div
              className="skills-track"
              ref={trackRef}
              drag="x"
              style={{ x }}
              dragConstraints={{
                left: maxScroll,
                right: 0
              }}
              dragElastic={0.05}
              onDragEnd={() => {
                const currentX = x.get();
                if (currentX > 0) x.set(0);
                if (currentX < maxScroll) x.set(maxScroll);
              }}
            >
              {filteredSkills.map((skill) => (
                <motion.div
                  key={`${skill.name}-${skill.category}`}
                  className="skill-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="skill-icon-container">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    ) : (
                      <div className="skill-icon-fallback">{skill.name.charAt(0)}</div>
                    )}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-level-container">
                    <div
                      className="skill-level-bar"
                      style={{ width: `${skill.level}%` }}
                    />
                    <span className="skill-level-text">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
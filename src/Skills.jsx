// SkillsCarousel.js
// This component displays a "🛠️ Skills" heading and transforms a list of tech skills into a 3D carousel
// using Framer Motion for animations and drag interactions.
import React, { useEffect, useState, useRef } from "react";
// Import Framer Motion components and hooks
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import HourGlassBackground from "./CodeRain";
import "./SkillsCarousel.css";

// Skill data with icons and proficiency levels
const SKILLS = [
  { name: "React", level: 85, icon: "react-icon.png", category: "Frontend" },
  { name: "JavaScript", level: 90, icon: "js-icon.png", category: "Frontend" },
  { name: "Node.js", level: 75, icon: "node-icon.png", category: "Backend" },
  { name: "Python", level: 70, icon: "python-icon.png", category: "Backend" },
  { name: "SQL", level: 85, icon: "sql-icon.png", category: "Database" },
  
];

const SkillsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(SKILLS);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);

  // Filter skills by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredSkills(SKILLS);
    } else {
      setFilteredSkills(SKILLS.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  // Unique categories for filter buttons
  const categories = ["All", ...new Set(SKILLS.map(skill => skill.category))];

  return (
    <div className="skills-container">
      <HourGlassBackground />
      
      <div className="skills-content">
        <h2 className="skills-title">My Technical Skills</h2>
        <p className="skills-subtitle">Proficiency across various technologies</p>
        
        {/* Category filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills carousel */}
        <div className="skills-carousel" ref={carouselRef}>
          <motion.div 
            className="skills-track"
            drag="x"
            dragConstraints={carouselRef}
            style={{ x }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="skill-icon-container">
                  <img 
                    src={`/icons/${skill.icon}`} 
                    alt={skill.name} 
                    className="skill-icon"
                  />
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
  );
};

export default SkillsCarousel;
// SkillsCarousel.js
// This component displays a "🛠️ Skills" heading and transforms a list of tech skills into a 3D carousel
// using Framer Motion for animations and drag interactions.
import React, { useEffect, useState, useRef } from "react";
// Import Framer Motion components and hooks
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./SkillsCarousel.css";
import HourGlassBackground from "./CodeRain";

// Import all skill icons
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
  const [trackWidth, setTrackWidth] = useState(0);

  const carouselRef = useRef(null);
  const x = useMotionValue(0);

  // Recalculate filtered skills and track width
  useEffect(() => {
    const updatedSkills =
      activeCategory === "All"
        ? SKILLS
        : SKILLS.filter(skill => skill.category === activeCategory);

    setFilteredSkills(updatedSkills);

    const itemWidth = 200;
    const gap = 32;
    const width = updatedSkills.length * (itemWidth + gap) - gap;
    setTrackWidth(width);

    x.set(0);
  }, [activeCategory, x]);

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

        <div className="skills-carousel" ref={carouselRef}>
          <motion.div
            className="skills-track"
            drag="x"
            style={{ x }}
            dragConstraints={{
              left: -(trackWidth - (carouselRef.current?.offsetWidth || 0)),
              right: 0
            }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.05 }}
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
  );
};

export default SkillsCarousel;
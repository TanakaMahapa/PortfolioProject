// SkillsCarousel.js
// This component displays a "🛠️ Skills" heading and transforms a list of tech skills into a 3D carousel
// using Framer Motion for animations and drag interactions.
import React, { useEffect, useState, useRef } from "react";
// Import Framer Motion components and hooks
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";

// Import skill icons
import SqlImg from "./IconsAssets/sql.jpg";
import CImg from "./IconsAssets/csharp.jpg";
import JavaImg from "./IconsAssets/java.jpg";
import PythonImg from "./IconsAssets/python.jpg";
import ReactImg from "./IconsAssets/react.jpg";
import JSImg from "./IconsAssets/js.jpg";
import CssImg from "./IconsAssets/css.jpg";
import HtmlImg from "./IconsAssets/html.jpg";
import FigmaImg from "./IconsAssets/figma.jpg";

import "./App.css";

// Updated TECH_STACK with percentages
const TECH_STACK = [
  { title: "SQL", percentage: 63, description: "Structured Query Language", icon: SqlImg },
  { title: "C#", percentage: 68, description: "Object-oriented language", icon: CImg },
  { title: "Java", percentage: 85, description: "Cross-platform apps", icon: JavaImg },
  { title: "Python", percentage: 73, description: "High-level scripting", icon: PythonImg },
  { title: "React", percentage: 70, description: "UI component library", icon: ReactImg },
  { title: "JavaScript", percentage: 65, description: "Web scripting", icon: JSImg },
  { title: "CSS", percentage: 75, description: "Stylesheet language", icon: CssImg },
  { title: "HTML", percentage: 80, description: "Web markup", icon: HtmlImg },
  { title: "Figma", percentage: 80, description: "Design & prototyping tool", icon: FigmaImg },
];

// Constants for carousel behavior
const CARD_WIDTH = 300;
const GAP = 16;
const AUTO_SCROLL_MS = 3000;
const VELOCITY_THRESH = 500;
const DRAG_BUFFER = 0;
const SPRING_OPTS = { type: "spring", stiffness: 300, damping: 30 };

function SlideCard({ motionX, index, offset, transition, item }) {
  const inputRange = [-(index + 1) * offset, -index * offset, -(index - 1) * offset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(motionX, inputRange, outputRange, { clamp: false });

  return (
    <motion.div
      className="carousel-item"
      style={{ width: CARD_WIDTH, rotateY }}
      transition={transition}
    >
      <div className="carousel-item-header">
        <img src={item.icon} alt={item.title} className="carousel-icon" />
      </div>

      <div className="carousel-item-content">
        <h3 className="carousel-item-title">{item.title}</h3>
        <p className="carousel-item-description">{item.description}</p>
        
        {/* Progress Bar Added Here */}
        <div className="skill-progress-container">
          <div 
            className="skill-progress-bar"
            style={{ width: `${item.percentage}%` }}
          ></div>
          <span className="skill-percentage">{item.percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsCarousel() {
  const containerRef = useRef(null);
  const motionX = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const items = [...TECH_STACK, TECH_STACK[0]];
  const offset = CARD_WIDTH + GAP;
  const maxIndex = items.length - 1;

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);
    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) setActiveIndex(i => (i === maxIndex ? 0 : i + 1));
    }, AUTO_SCROLL_MS);
    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const handleAnimationComplete = () => {
    if (activeIndex === maxIndex) {
      setIsResetting(true);
      motionX.set(0);
      setActiveIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESH) {
      setActiveIndex(i => Math.min(i + 1, maxIndex));
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESH) {
      setActiveIndex(i => Math.max(i - 1, 0));
    }
  };

  const transition = isResetting ? { duration: 0 } : SPRING_OPTS;

  return (
    <>
      <h2 className="carousel-section-title">🛠️ Skills</h2>

      <div
        ref={containerRef}
        className="carousel-container"
        style={{ width: CARD_WIDTH }}
      >
        <motion.div
          className="carousel-track"
          drag="x"
          onDragEnd={handleDragEnd}
          style={{ x: motionX }}
          animate={{ x: -(activeIndex * offset) }}
          transition={transition}
          onAnimationComplete={handleAnimationComplete}
        >
          {items.map((item, idx) => (
            <SlideCard
              key={idx}
              motionX={motionX}
              index={idx}
              offset={offset}
              transition={transition}
              item={item}
            />
          ))}
        </motion.div>

        <div className="carousel-indicators-container">
          <div className="carousel-indicators">
            {TECH_STACK.map((_, i) => (
              <motion.div
                key={i}
                className={`carousel-indicator ${
                  activeIndex % TECH_STACK.length === i ? "active" : "inactive"
                }`}
                animate={{ scale: activeIndex % TECH_STACK.length === i ? 1.2 : 1 }}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import "./PageNavi.css"; // Specific CSS for this component
import HourGlassBackground from "./CodeRain"; // Updated background component

// Import images
import homeImg from "./images/HomePage.jpg";
import aboutImg from "./images/AboutPage.jpg";
import projectImg from "./images/ProjectPage.jpg";
import skillsImg from "./images/SkillsPage.jpg";
import contactImg from "./images/ContactPage.jpg";

function PageNavi() {
  return (
    <div className="page-navi-container">
      <HourGlassBackground />
      
      <div className="nav-grid">
        <Link to="/home" className="nav-item home">
          <div className="nav-card">
            <img src={homeImg} alt="Home" className="nav-image" />
          </div>
          <span className="nav-label">Home</span>
        </Link>

        <Link to="/about" className="nav-item about">
          <div className="nav-card">
            <img src={aboutImg} alt="About" className="nav-image" />
          </div>
          <span className="nav-label">About</span>
        </Link>

        <Link to="/projects" className="nav-item projects">
          <div className="nav-card">
            <img src={projectImg} alt="Projects" className="nav-image" />
          </div>
          <span className="nav-label">Projects</span>
        </Link>

        <Link to="/skills" className="nav-item skills">
          <div className="nav-card">
            <img src={skillsImg} alt="Skills" className="nav-image" />
          </div>
          <span className="nav-label">Skills</span>
        </Link>

        <Link to="/contact" className="nav-item contact">
          <div className="nav-card">
            <img src={contactImg} alt="Contact" className="nav-image" />
          </div>
          <span className="nav-label">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default PageNavi;
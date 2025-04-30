import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import homeImg from "./images/HomePage.jpg";
import aboutImg from "./images/AboutPage.jpg";
import projectImg from "./images/ProjectPage.jpg";
import skillsImg from "./images/SkillsPage.jpg";
import contactImg from "./images/ContactPage.jpg";

import CodeRain from "./CodeRain"; // Background animation

function PageNavi() {
  return (
    <div className="PageCon">
      <CodeRain /> {/* Background rain effect */}

      {/* Navigation Grid */}
      <div className="NavGrid">
        <Link to="/home" className="Item home">
          <div className="Square">
            <img src={homeImg} alt="Home" className="NavImage" />
          </div>
          <label>Home</label>
        </Link>

        <Link to="/about" className="Item about">
          <div className="Square">
            <img src={aboutImg} alt="About" className="NavImage" />
          </div>
          <label>About</label>
        </Link>

        <Link to="/projects" className="Item projects">
          <div className="Square">
            <img src={projectImg} alt="Projects" className="NavImage" />
          </div>
          <label>Projects</label>
        </Link>

        <Link to="/skills" className="Item skills">
          <div className="Square">
            <img src={skillsImg} alt="Skills" className="NavImage" />
          </div>
          <label>Skills</label>
        </Link>

        <Link to="/contact" className="Item contact">
          <div className="Square">
            <img src={contactImg} alt="Contact" className="NavImage" />
          </div>
          <label>Contact</label>
        </Link>
      </div>
    </div>
  );
}

export default PageNavi;

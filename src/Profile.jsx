import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import HourGlassBackground from "./CodeRain";  // Import the CodeRain component

// Importing images
import homeImg from './images/HomePage.jpg';
import aboutImg from './images/AboutPage.jpg';
import projectImg from './images/ProjectPage.jpg';
import skillsImg from './images/SkillsPage.jpg';
import contactImg from './images/ContactPage.jpg';

function Profile() {
  return (
    <div className="page-navi-container">
      <HourGlassBackground />  {/* Include CodeRain */}
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Explore my work and skills</p>
      </div>
      <div className="profile-row">
        <Link to="/" className="profile-item home">
          <div className="profile-card">
            <img src={homeImg} alt="Home" className="profile-image" />
          </div>
          <span className="profile-label">Home</span>
        </Link>
        <Link to="/about" className="profile-item about">
          <div className="profile-card">
            <img src={aboutImg} alt="About" className="profile-image" />
          </div>
          <span className="profile-label">About</span>
        </Link>
        <Link to="/projects" className="profile-item projects">
          <div className="profile-card">
            <img src={projectImg} alt="Projects" className="profile-image" />
          </div>
          <span className="profile-label">Projects</span>
        </Link>
        <Link to="/skills" className="profile-item skills">
          <div className="profile-card">
            <img src={skillsImg} alt="Skills" className="profile-image" />
          </div>
          <span className="profile-label">Skills</span>
        </Link>
        <Link to="/contact" className="profile-item contact">
          <div className="profile-card">
            <img src={contactImg} alt="Contact" className="profile-image" />
          </div>
          <span className="profile-label">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Profile;

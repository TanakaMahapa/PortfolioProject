import React from 'react';
import './Showcase.css';
import HourGlassBackground from "./CodeRain";
import Prj1 from './ProjectImages/Prj1.png';
import Prj2 from './ProjectImages/Prj2.jpg';
import Prj3 from './ProjectImages/Prj3.png';

function Showcase() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: Prj1,
      description: "Mobile-responsive portfolio using react",
      githubLink: "https://github.com/TanakaMahapa/PortfolioProject" // Add individual project links
    },
    {
      id: 2,
      title: "Project 2",
      image: Prj2,
      description:"A modern web application with React",
      githubLink: "https://github.com/TanakaMahapa/Todo_List_Calendar"
    },
    {
      id: 3,
      title: "Project 3",
      image: Prj3,
      description: "A dating website design using figma",
      githubLink: "https://github.com/TanakaMahapa/project3"
    }
  ];

  return (
    <div className="showcase-container">
      <HourGlassBackground />
      
      <div className="section-header">
        <h2 className="section-title">📌 Projects</h2>
        <p className="section-subtitle">
          Explore a collection of my work   
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-project-link"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <button className="project-button">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showcase;
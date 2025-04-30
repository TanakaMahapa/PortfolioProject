import React from 'react';
import './Showcase.css';
import HourGlassBackground from "./CodeRain";

function Showcase() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "project1.png",
      description: "A modern web application with React"
    },
    {
      id: 2,
      title: "Project 2",
      image: "project2.png",
      description: "Mobile-responsive portfolio design"
    },
    {
      id: 3,
      title: "Project 3",
      image: "project3.png",
      description: "E-commerce platform with payment integration"
    }
  ];

  return (
    <div className="showcase-container">
      <HourGlassBackground />
      
      <section className="projects-section">
        <div className="section-header">
          <h2 className="section-title">📌 Projects</h2>
          <p className="section-subtitle">Explore a collection of my work</p>
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
                </div>
              </div>
              <button className="project-button">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Showcase;
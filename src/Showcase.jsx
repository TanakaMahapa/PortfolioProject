import React from 'react'
import './App.css'
import CodeRain from "./CodeRain"; // Background animation


 function Showcase() {
  return (
    <div>
      <section class="projects-section">
      <CodeRain /> {/* Background rain effect */}
  <h2>📌 Projects</h2>
  <p>Explore a number of projects</p>

  <div class="projects-grid">
    <div class="project-card">
      <img src="project1.png" alt="Project 1" />
      <button>Learn More →</button>
    </div>

    <div class="project-card">
      <img src="project2.png" alt="Project 2" />
      <button>Learn More →</button>
    </div>

    <div class="project-card">
      <img src="project3.png" alt="Project 3" />
      <button>Learn More →</button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Showcase

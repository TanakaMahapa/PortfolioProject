import './About.css';
import HourGlassBackground from "./CodeRain";

function About() { 
  return (
    <div className="page-content">
      <HourGlassBackground />
      
      <div className="about-content">
        <div className="text-content">
          <h1 className="about-title">
            Hi I'm <span className='RedText'>Tanaka Mahapa</span><br />
            <span className="sub-heading">Welcome to my Software Development Journey</span>
          </h1>

          <div className="about-text">
            <p>
            I'm a hands-on software development student at Belgium Campus who geeks out over turning complex problems into elegant solutions. Every bug I squash and every system I build fuels my passion for this craft.  
            </p>

            <p>
              <h5>You'll often find me:</h5>
              <ul>
                <li>Breaking (and fixing) code late into the night - the "aha!" moments are worth the coffee</li>
                <li>Approaching challenges with equal parts creativity and grit </li>
                <li>Celebrating small wins because in tech, every solved problem matters</li>
              </ul>
            </p>

            <p>
              My goal is to attain world-class software development competence so that I may not only build innovative solutions but also mentor others as I grow in this exciting field.
            </p>
            
            <p>
            My journey hasn't been a straight line - the late-night study sessions and tricky algorithms have taught me more than any textbook could. But that's where the magic happens, right?
            </p>
            
            <h5>Now I'm itching to bring this energy to real-world projects where I can:</h5>
                <li>Build solutions that actually make people's lives easier</li>
                <li>Learn from experienced developers (bring on the code reviews!) </li>
                <li>Grow my skills while delivering real value</li>

                <p>
                Let's create something awesome together! </p>
          </div>

          <div className="about-button">
            <button className='HomeBtnCV'>Download CV</button>
          </div>
        </div>

        <div className="image-half">
          <div className='OneImg2' />
        </div>
      </div>
    </div>
  );
}

export default About;

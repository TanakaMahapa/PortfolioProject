import './App.css'
import HourGlassBackground from "./CodeRain";

function About() { 
  return (
    <div className="page-content">
      <HourGlassBackground />
      <div className='text-container2'>
        <div className='TextHome'>
          <h1 id='h1'>
            Hello I'm <span className='RedText'>Tanaka Mahapa</span>.
          </h1>
          <p id='sideBar'>
            Hello, I'm Tanaka Mahapa. I am on a journey to turn every challenge I face into an opportunity to overcome,
            gain experience, and have fun in the process. As a Belgium Campus student, I strive to include creativity 
            and determination in my work.
          </p>
          <p id='sideBar'>
            Coding is a lifestyle that requires commitment. My love for it has driven me to strive for excellence and 
            take on every challenge, no matter the difficulty.
          </p>
          <p id='sideBar'>
            My academic journey has not been easy, but through the challenges, I have gained valuable skills such as problem-solving,
            creativity, and innovation.
          </p>
          <p>
            I am looking forward to unleashing my skills onto projects that matter.
          </p>
        </div>
        <div className='OneImg2'/>
        <div id='Btn'>
          <button className='HomeBtnCV'>Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default About
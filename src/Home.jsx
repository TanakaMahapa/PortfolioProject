import './App.css'
import HourGlassBackground from "./CodeRain";

function Home() { 
  return (
    <div className="page-content">
      <HourGlassBackground />
      <div className='text-container'>
        <div className='TextHome'>
          <h1 id='h1'>
            Hi I'm <span className='RedText'>Tanaka Mahapa</span>,
            Welcome to my Software Journey
          </h1>
          <p id='sideBar'>
            I am currently attending Belgium Campus in Kempton Park,
            pursuing a Diploma in Information Technology,
            specializing in Software Development.
          </p>
          <p id='sideBar'>
            I am deeply passionate about the challenges that the IT field presents, 
            and there is nothing that brings me more joy than overcoming those challenges, 
            no matter how big or small the victory may be.
          </p>
          <p id='sideBar' className='p3'>
            My goal is to obtain useful experience from reputable companies so that 
            I may use my abilities to increase output and provide value to a business.
          </p>
        </div>
        <div className='OneImg'/>
      </div>
    </div>
  )
}

export default Home
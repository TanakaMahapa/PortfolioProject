import './App.css'
import CodeRain from "./CodeRain"; // Background animation


function About() { 
    return (
        <div className='text-container2'>
          <CodeRain /> {/* Background rain effect */}
          <div className='TextHome'>
          <h1 id='h1' >
          Hello I’m <span className='RedText'>Tanaka Mahapa</span>.
          <br></br>
         </h1 >

         <p id='sideBar' >
         <br></br>
         Hello, I'm Tanaka Mahapa. I am on a journey to turn every challenge I face into an opportunity to overcome,
          gain experience, and have fun in the process. As a Belgium Campus student, I strive to include creativity 
          and determination in my work.

          <br></br>
          <br></br>
          Coding is a lifestyle that requires commitment. My love for it has driven me to strive for excellence and 
          take on every challenge, no matter the difficulty. In team settings, I have honed my time management,
           leadership, and communication skills to a high level. I thrive in collaborative environments,
            where I can leverage my ability to coordinate efforts, delegate tasks effectively, and 
            foster open dialogue to drive successful project outcomes.

           <br></br>
           <br></br>
           My academic journey has not been easy, but through the challenges, I have gained valuable skills such as problem-solving,
            creativity, and innovation.

           </p>
           <p>
           I am looking forward to unleashing my skills onto projects that matter. With me on your team,
            you would have a valuable asset that can contribute significantly to your goals.
           </p>
          
          </div>
         
         
        
         <div className='OneImg2'/>
         
        

          <div id='Btn'>
          <button className='HomeBtnCV'>Download CV</button>

          </div>
         
         
        </div>
        
  )
}

export default About

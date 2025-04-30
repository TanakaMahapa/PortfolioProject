import './App.css'
import { Link } from 'react-router-dom';

function Nav() { return (
      <div id="header">
            <nav className='Navi'>
                <ul>
                <a href="/" className='logo'><span className='RedText'>Tanaka Mahapa</span></a>

                <Link to="/" className="T"><li>Home</li></Link>
          <Link to="/about" className="T"><li>About</li></Link>
          <Link to="/projects" className="T"><li>Projects</li></Link>
          <Link to="/skills" className="T"><li>Skills</li></Link>
          <Link to="/contact" className="T"><li>Contact</li></Link>           </ul>
              
            </nav>
            <hr className='Line'/>
      </div>
       
  )
}

export default Nav



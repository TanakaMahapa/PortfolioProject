import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Nav() {
  const location = useLocation();

  return (
    <header className="portfolio-header">
      <h1 className="portfolio-name">TANAKA MAHAPA</h1>
      
      <nav className="portfolio-nav">
        <div className="nav-row">
          <Link 
            to="/" 
            className={`nav-cell ${location.pathname === '/' ? 'active' : ''}`}
          >
            HOME
          </Link>
          <span className="nav-divider">|</span>
          <Link 
            to="/about" 
            className={`nav-cell ${location.pathname === '/about' ? 'active' : ''}`}
          >
            ABOUT
          </Link>
          <span className="nav-divider">|</span>
          <Link 
            to="/projects" 
            className={`nav-cell ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            PROJECTS
          </Link>
          <span className="nav-divider">|</span>
          <Link 
            to="/skills" 
            className={`nav-cell ${location.pathname === '/skills' ? 'active' : ''}`}
          >
            SKILLS
          </Link>
          <span className="nav-divider">|</span>
          <Link 
            to="/contact" 
            className={`nav-cell ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
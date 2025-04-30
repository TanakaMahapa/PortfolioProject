import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Header.jsx';
import Home from './Home.jsx';
import PageNavi from './PageNavi.jsx';
import About from './About.jsx';
import Showcase from './Showcase.jsx';
import Skills from './Skills.jsx';
import ContactSection from './Contact.jsx';
import './variables.css';
import './base.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<PageNavi />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Showcase />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;
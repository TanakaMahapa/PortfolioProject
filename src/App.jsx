import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Header.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
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
        {/* Set Home as the root (/) */}
        <Route path="/" element={<Home />} />
        {/* Profile page as /profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Showcase />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;

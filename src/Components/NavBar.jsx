import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="topnav">
      <nav>
      <div id='mks'><h2>Mayur</h2></div>
        <NavLink to="/" onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink to="/About" onClick={() => scrollToSection('about')}>About Me</NavLink>
        <NavLink to="/Projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink to="/Experience" onClick={() => scrollToSection('experience')}>Experience</NavLink>
        <NavLink to="/Interests" onClick={() => scrollToSection('interests')}>Interests</NavLink>
        <NavLink to="/Education" onClick={() => scrollToSection('education')}>Education</NavLink>
        <NavLink to="/Contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;

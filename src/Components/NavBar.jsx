import React, { useState, useRef, useEffect } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  // Close nav on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsNavOpen(false);
    };
    const handleClickOutside = (e) => {
      if (isNavOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  const scrollToSection = (id) => {
    setIsNavOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="topnav" role="banner">
      <button
        className={`hamburger${isNavOpen ? ' open' : ''}`}
        aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isNavOpen}
        aria-controls="main-navigation"
        onClick={() => setIsNavOpen((prev) => !prev)}
        tabIndex={0}
      >
        <span className="hamburger-bar bar1"></span>
        <span className="hamburger-bar bar2"></span>
        <span className="hamburger-bar bar3"></span>
      </button>
      <nav
        id="main-navigation"
        className={isNavOpen ? 'open' : ''}
        aria-label="Main navigation"
        ref={navRef}
        role="navigation"
      >
        <div id='mks'><h2 tabIndex={0}>Mayur</h2></div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'inherit', gap: 'inherit' }}>
          <li>
            <NavLink to="/" onClick={() => scrollToSection('home')} tabIndex={0} aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={() => scrollToSection('about')} tabIndex={0}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/Education" onClick={() => scrollToSection('education')} tabIndex={0}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/Experience" onClick={() => scrollToSection('experience')} tabIndex={0}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" onClick={() => scrollToSection('projects')} tabIndex={0}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/Interests" onClick={() => scrollToSection('interests')} tabIndex={0}>
              Interests
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => scrollToSection('contact')} tabIndex={0}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

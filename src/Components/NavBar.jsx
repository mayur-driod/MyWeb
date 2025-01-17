import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import photo from '../assets/IMG_3332~2.jpg';


function NavBar() {
  return (
    <div className="topnav">
      <link href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap" rel="stylesheet"></link>
      <nav>
        <div id='mks'><h2>Mayur</h2></div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About Me</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Experience">Experience</NavLink>
        <NavLink to="/Intrests">Intrests</NavLink>
        <NavLink to="/Education">Education</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        
        {/* <img src={photo} alt="Profile" /> */}
      </nav>
    </div>
  );
}

export default NavBar;

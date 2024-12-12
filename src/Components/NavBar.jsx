import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import photo from '../assets/IMG_3332~2.jpg'

function NavBar() {
  return (
<div className="topnav">
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About Me</NavLink>
        <NavLink to={"/Projects"}>Projects</NavLink>
        <NavLink to={"Experience"}>Experience</NavLink>
        <NavLink to={"/Intrests"}>Intrests</NavLink>
        <NavLink to={"/Education"}>Education</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <img src={photo}/>
    </nav>
</div>
  )
}

export default NavBar
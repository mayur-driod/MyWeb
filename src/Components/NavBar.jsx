import React from 'react'
import './Nav.css'
import photo from '../assets/IMG_3332~2.jpg'

function NavBar() {
  return (
<div className="topnav">
    <nav>
        <a className="active" href="#home">Home</a>
        <a href="#about_me">About me</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#interests">Intrests</a>
        <a href="#education">Education</a>
        <a href="contact">Contact</a>
        <img src={photo}/>
    </nav>
</div>
  )
}

export default NavBar
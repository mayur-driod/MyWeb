import React from 'react'
import '../App.css';

function NavBar() {
  return (
<div className="topnav">
    <nav>
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </nav>
</div>
  )
}

export default NavBar
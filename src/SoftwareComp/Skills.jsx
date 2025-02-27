import React from 'react'
import './Skills.css'
import Python from '../assets/python.png'
import react from '../assets/React.png'
import Java from '../assets/Java.png'
import JS from '../assets/JS.png'
import vite from '../assets/Vite.js.png'
import html from '../assets/HTML.png'
import css from '../assets/CSS.png'
import redux from '../assets/Redux.png'
import arduino from '../assets/Arduino.png'
import davinci from '../assets/DaVinci Resolve.png'
import RPI from '../assets/Raspberry pi.png'
import Cpp from '../assets/C++.png'
import linux from '../assets/Linux.png'
import photoshop from '../assets/Photoshop.png'
import lightroom from '../assets/Lightroom.png'
import illustrator from '../assets/Illustrator.png'
import figma from '../assets/Figma.png'
import nodejs from '../assets/Node js.png'



function Skills() {
  return (
    <div className='MainDiv'>
        <h2>My Skills</h2>
        <div className='TopDiv'>
            <img className='top3' src={Python}/>
            <img className='top3' src={react}/>
            <img className='top3' src={JS}/>
        </div>
        {/* <p id='skillpara'>Other Skills</p> */}<br/>
        <div className='OtherSkills'>
            <img className='ot' onClick={() => window.open("https://www.w3schools.com/html/default.asp")}src={html}/>
            <img className='ot' onClick={() => window.open("https://www.w3schools.com/Css/")}  src={css}/>
            <img className='ot' onClick={() => window.open("https://www.java.com/en/")}  src={Java}/>
            <img className='ot' onClick={() => window.open("https://vite.dev/")}  src={vite}/>
            <img className='ot' onClick={() => window.open("https://redux.js.org/")}  src={redux}/>
            <img className='ot' onClick={() => window.open("https://www.arduino.cc/")}  src={arduino}/>
            <img className='ot' onClick={() => window.open("https://www.blackmagicdesign.com/in/products/davinciresolve")}  src={davinci}/>
            <img className='ot' onClick={() => window.open("https://www.raspberrypi.com/")}  src={RPI}/> 
            <img className='ot' onClick={() => window.open("https://devdocs.io/cpp/")}  src={Cpp}/>
            <img className='ot' onClick={() => window.open("https://nodejs.org/en")}  src={nodejs}/>
            <img className='ot' onClick={() => window.open("https://www.adobe.com/in/products/photoshop.html")}  src={photoshop}/>
            <img className='ot' onClick={() => window.open("https://lightroom.adobe.com/")}  src={lightroom}/>
            <img className='ot' onClick={() => window.open("https://www.adobe.com/in/products/illustrator.html")}  src={illustrator}/>
            <img className='ot' onClick={() => window.open("https://www.figma.com/")}  src={figma}/>
            <img className='ot' onClick={() => window.open("https://www.linux.org/")}  src={linux}/>
        </div>
    </div>
  )
}

export default Skills
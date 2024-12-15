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
        <h2>Top 3</h2>
        <div className='TopDiv'>
            <img className='top3' src={Python}/>
            <img className='top3' src={react}/>
            <img className='top3' src={JS}/>
        </div>
        <p id='skillpara'>Other Skills</p>
        <div className='OtherSkills'>
            <img className='ot' src={html}/>
            <img className='ot' src={css}/>
            <img className='ot' src={Java}/>
            <img className='ot' src={vite}/>
            <img className='ot' src={redux}/>
            <img className='ot' src={arduino}/>
            <img className='ot' src={davinci}/>
            <img className='ot' src={RPI}/> 
            <img className='ot' src={Cpp}/>
            <img className='ot' src={nodejs}/>
            <img className='ot' src={photoshop}/>
            <img className='ot' src={lightroom}/>
            <img className='ot' src={illustrator}/>
            <img className='ot' src={figma}/>
            <img className='ot' src={linux}/>
        </div>
    </div>
  )
}

export default Skills
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

function Skills({ fullHeight }) {
  const otherSkills = [
    { src: html, link: "https://www.w3schools.com/html/default.asp", alt: "HTML" },
    { src: css, link: "https://www.w3schools.com/Css/", alt: "CSS" },
    { src: Java, link: "https://www.java.com/en/", alt: "Java" },
    { src: vite, link: "https://vite.dev/", alt: "Vite.js" },
    { src: redux, link: "https://redux.js.org/", alt: "Redux" },
    { src: arduino, link: "https://www.arduino.cc/", alt: "Arduino" },
    { src: davinci, link: "https://www.blackmagicdesign.com/in/products/davinciresolve", alt: "DaVinci Resolve" },
    { src: RPI, link: "https://www.raspberrypi.com/", alt: "Raspberry Pi" },
    { src: Cpp, link: "https://devdocs.io/cpp/", alt: "C++" },
    { src: nodejs, link: "https://nodejs.org/en", alt: "Node.js" },
    { src: photoshop, link: "https://www.adobe.com/in/products/photoshop.html", alt: "Photoshop" },
    { src: lightroom, link: "https://lightroom.adobe.com/", alt: "Lightroom" },
    { src: illustrator, link: "https://www.adobe.com/in/products/illustrator.html", alt: "Illustrator" },
    { src: figma, link: "https://www.figma.com/", alt: "Figma" },
    { src: linux, link: "https://www.linux.org/", alt: "Linux" },
  ];

  return (
    <section className={`MainDiv${fullHeight ? ' fullHeight' : ''}`} aria-labelledby="skills-heading">
      <h2 id="skills-heading">My Skills</h2>
      <div className='TopDiv'>
        <img className='top3' src={Python} alt="Python" />
        <img className='top3' src={react} alt="React.js" />
        <img className='top3' src={JS} alt="JavaScript" />
      </div>
      <br />
      <div className='OtherSkills' role="list">
        {otherSkills.map((skill, idx) => (
          <button
            key={skill.alt}
            className="ot"
            onClick={() => window.open(skill.link)}
            aria-label={skill.alt}
            tabIndex={0}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <img src={skill.src} alt={skill.alt} style={{ width: "100%", height: "100%" }} />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Skills
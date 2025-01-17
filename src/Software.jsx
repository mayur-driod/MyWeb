import React from 'react'
import photo from './assets/CS Background 2.0.png'
import Profilecard from './SoftwareComp/Profilecard'
import './SP.css'
import Skills from './SoftwareComp/Skills'

function software() {
  return (
    <>
    
    {/* <img className='Mainpic' src={photo}/> */}
    <div className='Maindiv' style={{backgroundImage:`url(${photo})`}}>
    <h1>Software</h1>
      <Profilecard/>
      <Skills/>
    </div>
    </>
  )
}

export default software
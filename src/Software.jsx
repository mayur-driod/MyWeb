import React from 'react'
import photo from './assets/Laptop in classroom.jpg'
import profile from './assets/IMG_3332~2.jpg'
import './SP.css'

function software() {
  return (
    <>
    
    {/* <img className='Mainpic' src={photo}/> */}
    <div className='Maindiv' style={{backgroundImage:`url(${photo})`}}>
    <h1>Software</h1>
      <div className='profileDiv'>
        <img src={profile} alt="" />
        <h2>I am <strong>Mayur</strong></h2>
        <p>
          I'm a student at RVU x Kalvium persuing BCA in software product engineering!
        </p>
      </div>
    </div>
    </>
  )
}

export default software
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
        <h3>Hey I am Mayur</h3>
        <img src={profile} alt="" />
        <p>
          I found my love for software and computers in the covid-19 pandemic
        </p>
      </div>
    </div>
    </>
  )
}

export default software
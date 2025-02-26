// import React from 'react'
// import profile from '../assets/IMG_3332~2.jpg'
// import "../SP.css"


// function Profilecard() {
//   return (
//     <>
//     <div className='profileDiv'>
//     <img src={profile} alt="" />
//     <h2>I am <strong>Mayur</strong></h2>
//     <p>
//       Hey folks! I am Mayur K Setty, a dedicated student at RVU x Kalvium pursuing my BCA (Hons) course in Software Product Engineering.
//     </p>
//     <button>Check out more!</button>
//   </div>      
//   </>
  
  
//   )
// }

// export default Profilecard

import React from 'react';
import profile from '../assets/IMG_3332~2.jpg';
import './profile.css';

function Profilecard() {
  return (
    <div className='profileCard'>
      <img src={profile} alt="Mayur's Profile" />
      <h2>I am <strong>Mayur</strong></h2>
      <p>
        Hey folks! I am Mayur K Setty, a dedicated student at <strong>RVU x Kalvium</strong> pursuing my 
        <strong> BCA (Hons) in Software Product Engineering</strong>.
      </p>
      <button className="profileButton">Check out more!</button>
    </div>      
  );
}

export default Profilecard;

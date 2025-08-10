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

function Profilecard({ fullHeight }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  }

  return (
    <section
      className={`profileCard${fullHeight ? ' fullHeight' : ''}`}
      aria-labelledby="profile-heading"
    >
      <img
        src={profile}
        alt="Mayur's Profile"
        onClick={() => window.open("https://www.linkedin.com/in/mayurksetty")}
        tabIndex={0}
        style={{ cursor: "pointer" }}
      />
      <h2 id="profile-heading">I am <strong>Mayur</strong></h2>
      <p>
        Hey folks! I am Mayur K Setty, a dedicated student at <strong>RVU x Kalvium</strong> pursuing my
        <strong> BCA (Hons) in Software Product Engineering</strong>.
      </p>
      <button
        className="profileButton"
        onClick={() => scrollToSection('about')}
        tabIndex={0}
        aria-label="Check out more about Mayur"
      >
        Check out more!
      </button>
    </section>
  );
}

export default Profilecard;
// No changes needed here, just ensure fullHeight prop is passed from parent.

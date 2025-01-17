import React, { useEffect, useRef } from "react";
import "./abt.css";

function About() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    // Add Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add typewriter animation dynamically
            const element = entry.target;
            element.style.animation =
              "typing 2s steps(40, end), blink 0.8s step-end 4s";
          } else {
            // Reset animation when leaving the viewport
            const element = entry.target;
            element.style.animation = "none";
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe the h1 element
    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    // Cleanup the observer
    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Add the LinkedIn badge script to the DOM
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="badge">
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="HORIZONTAL"
          data-vanity="mayurksetty"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/mayurksetty?trk=profile-badge"
          ></a>
        </div>

        <div>
          {/* Typewriter animation target */}
          <h1 ref={typewriterRef}>Hey, I am Mayur</h1>
          <p>
            I am Mayur and I have two main interests in life. First one is Software and Computers,
            while the other is Photography. I wanted to showcase my knowledge and skills in both
            these aspects, so I created this webpage. This webpage is designed in such a way that
            when you toggle the button to software, it shows everything about my journey with
            software and computers, and when I toggle it to Photography, it shows me everything
            about Photography.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;









// import React, { useEffect } from 'react';
// import './abt.css';


// function About() {
//   useEffect(() => {
//     // Add the LinkedIn badge script to the DOM
//     const script = document.createElement('script');
//     script.src = "https://platform.linkedin.com/badges/js/profile.js";
//     script.async = true;
//     script.defer = true;
//     script.type = "text/javascript";
//     document.body.appendChild(script);

//     // Cleanup the script when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       {/* LinkedIn Badge */}
//       <div id='badge'>
//       <div
//         className="badge-base LI-profile-badge"
//         data-locale="en_US"
//         data-size="large"
//         data-theme="dark"
//         data-type="HORIZONTAL"
//         data-vanity="mayurksetty"
//         data-version="v1"
//       >
//         <a
//           className="badge-base__link LI-simple-link"
//           href="https://in.linkedin.com/in/mayurksetty?trk=profile-badge"
//         >
//           {/* Mayur K Setty */}
//         </a>
//       </div>

//       <div>
//       <h1>Hey, I am Mayur</h1>
//       <p>
//         I am Mayur and I have two main interests in life. First one is Software and Computers, 
//         while the other is Photography. I wanted to showcase my knowledge and skills in both 
//         these aspects, so I created this webpage. This webpage is designed in such a way that 
//         when you toggle the button to software, it shows everything about my journey with software 
//         and computers, and when I toggle it to Photography, it shows me everything about Photography.
//       </p>
//       </div>

//       </div>
//       <link href="https://fonts.googleapis.com/css2?family=Jersey+15&display=swap" rel="stylesheet" />
//     </>
//   );
// }

// export default About;

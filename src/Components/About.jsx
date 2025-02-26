import React from "react";
import { useEffect, useRef } from 'react';
import "./abt.css";
import LinkedInBadge from "./LinkedInBadge";

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
              "typing 2s steps(40, end), blink 0.8s steps(40,end)";
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

  

  return (
    <>
    <div className="maindiv">
    <div>{/* <LinkedInBadge/> */}</div>

      <div className="text">
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
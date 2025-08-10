import React, { useEffect, useRef, useState } from "react";
import "./abt.css";
// import LinkedInBadge from "./LinkedInBadge";

function About() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Hey, I am Mayur";
  const typewriterRef = useRef(null);
  const observerRef = useRef(null);

  // Typewriter effect logic
  const startTyping = () => {
    setTypedText("");
    setIsTyping(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setIsTyping(false), 400);
      }
    }, 60);
  };

  useEffect(() => {
    // Intersection Observer to trigger animation on scroll into view
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping();
        }
      });
    };
    observerRef.current = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    if (typewriterRef.current) {
      observerRef.current.observe(typewriterRef.current);
    }
    return () => {
      if (observerRef.current && typewriterRef.current) {
        observerRef.current.unobserve(typewriterRef.current);
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="maindiv">
        <div>{/* <LinkedInBadge/> */}</div>
        <div className="text">
          <h1 ref={typewriterRef} aria-label={fullText}>
            {typedText}
            {isTyping && <span className="typewriter-cursor" />}
          </h1>
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
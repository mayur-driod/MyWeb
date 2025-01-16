import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    // Add the LinkedIn badge script to the DOM
    const script = document.createElement('script');
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
      <h1>Hey, I am Mayur</h1>
      <p>
        I am Mayur and I have two main interests in life. First one is Software and Computers, 
        while the other is Photography. I wanted to showcase my knowledge and skills in both 
        these aspects, so I created this webpage. This webpage is designed in such a way that 
        when you toggle the button to software, it shows everything about my journey with software 
        and computers, and when I toggle it to Photography, it shows me everything about Photography.
      </p>

      {/* LinkedIn Badge */}
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
        >
          {/* Mayur K Setty */}
        </a>
      </div>
    </>
  );
}

export default About;

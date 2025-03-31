import React from 'react';
import './edu.css';
import KRVU from '../assets/Kalvium_RVU.png'
import CFL from '../assets/CFL.png';

const experienceData = [
  {
    title: 'BCA in software product engineering',
    companyLogo: KRVU,
    duration: 'Aug 2024 - Present',
    description: 'Kalvium x RVU’s 4-year BCA course in Software Product Engineering is a pioneering undergraduate program that bridges rigorous academic theory with intensive, real-world experience. Designed by top industry leaders, the curriculum is continuously updated to reflect emerging technologies and market demands.',
    anchor:{link:"https://kalvium.com/rv-university-bengaluru-kalvium/",text:"Kalvium x RVU"}
  },
  {
    title:'Primary education',
    companyLogo:CFL,
    duration:"2012-2024",
    description:"CFL is a community of students and adults interested in learning about ourselves and our relationship with the world. This learning involves not only academics and other life skills, but also a deeper exploration about our emotions and thought processes and the way we respond to the challenges of life. The questions raised by J Krishnamurti play a significant role in our educational vision.",
    anchor:{link:"https://cfl.in/",text:"CFL"}
  }
];

function Education() {
  return (
    <>
    <h1>Education</h1>
    <div className="experience-page">
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className='company'>
              <img src={exp.companyLogo} alt="Company Logo" className="company-logo" onClick={()=>window.open(exp.anchor.link)} />
              <h2>{exp.title}</h2>
            </div>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Education;

import React from 'react';
import './exp.css';
import KRVU from '../assets/Kalvium_RVU.png'

const experienceData = [
  {
    title: 'BCA in software product engineering',
    companyLogo: KRVU,
    duration: 'Aug 2024 - Present',
    description: 'Kalvium x RVU’s 4-year BCA course in Software Product Engineering is a pioneering undergraduate program that bridges rigorous academic theory with intensive, real-world experience. Designed by top industry leaders, the curriculum is continuously updated to reflect emerging technologies and market demands.',
  },
];

function Experience() {
  return (
    <>
    <h1>Experience</h1>
    <div className="experience-page">
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className='company'>
              <img src={exp.companyLogo} alt="Company Logo" className="company-logo" />
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

export default Experience;

import React from 'react';
import photo from './assets/CS Background 2.0.png';
import Profilecard from './SoftwareComp/Profilecard';
import Skills from './SoftwareComp/Skills';
import './SP.css';

function Software() {
  return (
    <div className='Maindiv' style={{ backgroundImage: `url(${photo})` }}>
      <h1>Software</h1>
      <div className="content-container">
        <Profilecard />
        <Skills />
      </div>
    </div>
  );
}

export default Software;

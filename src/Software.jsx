import React from 'react';
import photo from './assets/file cover - 1.png';
import Profilecard from './SoftwareComp/Profilecard';
import Skills from './SoftwareComp/Skills';
import './SP.css';

function Software() {
  return (
    <div className='Maindiv' 
    style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="content-container">
        <Profilecard />
        <Skills />
      </div>
    </div>
  );
}

export default Software;

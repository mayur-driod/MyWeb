import React from 'react';
import photo from './assets/file cover - 1.png';
import Profilecard from './SoftwareComp/Profilecard';
import Skills from './SoftwareComp/Skills';
import './SP.css';

function Software() {
  return (
    <section
      className='Maindiv'
      style={{ backgroundImage: `url(${photo})` }}
      aria-label="Software Section"
    >
      <div className="content-container" style={{ alignItems: 'stretch', minHeight: '60vh' }}>
        <Profilecard fullHeight />
        <Skills fullHeight />
      </div>
    </section>
  );
}

export default Software;

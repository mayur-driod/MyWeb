import React from 'react';
import photo from './assets/DSC00045.JPG';

function Photography() {
  return (
    <>
      <h1>Photography</h1>
      <img className='Mainpic' src={photo} alt='A beautiful photograph' />
    </>
  );
}

export default Photography;
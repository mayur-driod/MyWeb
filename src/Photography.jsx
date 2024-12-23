import React from 'react';
import photo from './assets/DSC00045.JPG';
import './photo.css'

function Photography() {
  return (
    <>
      <h1>Photography</h1>
      <img className='Mainpic' src={photo} alt='malabar pit viper poised to strike' />
    </>
  );
}

export default Photography;
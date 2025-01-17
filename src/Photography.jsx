import React from 'react';
// import photo from './assets/DSC00045.JPG';
import './SP.css'
import Carousel from './Components/Carousel';


// import imgdata from './images.JSON'

function Photography() {
  //  console.log(imgdata)
  return (
    <>

      <h1>Photography</h1>
      {/* <img className='Mainpic' src={photo} alt='malabar pit viper poised to strike' /> */}
      <Carousel/>
    </>
  );
}

export default Photography;


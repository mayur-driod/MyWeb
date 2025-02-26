import { Box } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

// Import react-slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import one from '../assets/Carousel/1.jpg';
import two from '../assets/Carousel/2.jpg';
import three from '../assets/Carousel/3.jpg';
import four from '../assets/Carousel/4.jpg';
import five from '../assets/Carousel/5.jpg';
import six from '../assets/Carousel/6.jpg';
import seven from '../assets/Carousel/7.jpg';
import eight from '../assets/Carousel/8.jpg';
import nine from '../assets/Carousel/9.jpg';
import ten from '../assets/Carousel/10.jpg';
import eleven from '../assets/Carousel/11.jpg';
import twelve from '../assets/Carousel/12.jpg';
import thirteen from '../assets/Carousel/13.jpg';
import fourteen from '../assets/Carousel/14.jpg';
import fifteen from '../assets/Carousel/15.jpg';
import sixteen from '../assets/Carousel/16.jpg';
import seventeen from '../assets/Carousel/17.jpg';
import eighteen from '../assets/Carousel/18.jpg';
import ninteen from '../assets/Carousel/DSC00045.JPG';
import twenty from '../assets/Carousel/DSC00239.jpg';
import twentyone from '../assets/Carousel/Kite.jpg';

const settings = {
  centerMode: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export default function Carousel() {
  const images = [one, two, three, four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,ninteen,twenty,twentyone];

  return (
    <div style={{ width: "100%", maxWidth: "70vw", margin: "auto", position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img
              src={image}
              alt={`Photo ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
}
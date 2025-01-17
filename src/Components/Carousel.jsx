import { Box } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

// Import react-slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import one from '../assets/Carousel/DSC00045.JPG';
import two from '../assets/Carousel/DSC00239.jpg';
import three from '../assets/Carousel/Kite.jpg';

const settings = {
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export default function Carousel() {
  const images = [one, two, three];

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto", position: "relative" }}>
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

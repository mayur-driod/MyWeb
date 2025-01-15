import { Box } from '@chakra-ui/react'
import React from 'react'

// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
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
}

export default function Carousel() {
    const images= [
        "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg",
        "https://mediaim.expedia.com/destination/1/b2471b67db38b126e341925174ce6b1e.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
        "/src/assets/Carousel/DSC00045.JPG"
    ]
    return (
        <div style={{width:"100%",height:"100%",margin:"auto"}}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Box key={index}>
                        <img src={image} alt={`Photo ${index + 1}`}style={{width:"100%",height:"100%",borderRadius:"8px"}} />
                    </Box>
                ))}
            </Slider>
        </div>
    )
}
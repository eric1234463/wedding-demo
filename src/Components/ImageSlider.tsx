import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.jpg'
import slider3 from '../assets/slider-3.jpg'

const slideImages = [
  {
    url: slider1,
  },
  {
    url: slider2,
  },
  {
    url: slider3,
  },
];

const WeddingImageSlider = () => {
  return (
    <div className="slide-container lg:h-screen h-full">
      <Slide arrows={false} duration={5000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{'backgroundImage': `url(${slideImage.url})` }} className='bg-cover bg-center h-screen'>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default WeddingImageSlider;
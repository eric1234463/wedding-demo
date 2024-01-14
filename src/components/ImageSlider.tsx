import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slider1 from '../assets/1.jpg'
import slider2 from '../assets/2.jpg'
import slider3 from '../assets/3.jpg'
import slider4 from '../assets/4.jpg'
import slider5 from '../assets/5.jpg'
import slider6 from '../assets/6.jpg'
import slider7 from '../assets/7.jpg'
import slider8 from '../assets/8.jpg'
import slider9 from '../assets/9.jpg'
import slider10 from '../assets/10.jpg'
import slider11 from '../assets/11.jpg'
import slider12 from '../assets/12.jpg'
import slider13 from '../assets/13.jpg'
import slider14 from '../assets/14.jpg'
import slider15 from '../assets/15.jpg'
import slider16 from '../assets/16.jpg'
import slider17 from '../assets/17.jpg'
import slider18 from '../assets/18.jpg'


const slideImages = [
  {
    url: slider1,
    description: "We're getting married!",
  },
  {
    url: slider2,
    description: "See you around",
  },
  {
    url: slider3,
    description: "Thanks For Coming",
  },
  {
    url: slider4,
  },
  {
    url: slider5,
  },
  {
    url: slider6,
  },
  {
    url: slider7,
  },
  {
    url: slider8,
  },
  {
    url: slider9,
  }, {
    url: slider10,
  }, {
    url: slider11,
  }, {
    url: slider12,
  }, {
    url: slider13,
  }, {
    url: slider14,
  }, {
    url: slider15,
  }, {
    url: slider16,
  }, {
    url: slider17,
  }, {
    url: slider18,
  }
];

const WeddingImageSlider = () => {
  return (
    <div className="slide-container lg:h-screen h-full">
      <Slide arrows={false} duration={4000} autoplay={true} infinite={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='bg-cover bg-center h-screen relative'>
              <div className='absolute top-0 left-0 p-16 text-[#E8E8E8] lg:p-32'>
                <div className='font-bold text-3xl lg:text-6xl mb-4 lg:mb-16'>Cynthia & Eric</div>
                {slideImage.description && <div className='font-bold text-xl lg:text-4xl font-rainbow'>{slideImage.description}</div>}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default WeddingImageSlider;
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
import slider19 from '../assets/19.jpg'
import slider20 from '../assets/20.jpg'
import slider21 from '../assets/21.jpg'
import slider22 from '../assets/22.jpg'
import slider23 from '../assets/23.jpg'
import slider24 from '../assets/24.jpg'
import slider25 from '../assets/25.jpg'
import slider26 from '../assets/26.jpg'
import slider27 from '../assets/27.jpg'
import slider28 from '../assets/28.jpg'
import slider29 from '../assets/29.jpg'
import slider30 from '../assets/30.jpg'
import slider31 from '../assets/31.jpg'
import slider32 from '../assets/32.jpg'
import slider33 from '../assets/33.jpg'
import slider34 from '../assets/34.jpg'
import slider35 from '../assets/35.jpg'
import slider36 from '../assets/36.jpg'
import slider37 from '../assets/37.jpg'
import slider38 from '../assets/38.jpg'
import slider39 from '../assets/39.jpg'
import slider40 from '../assets/40.jpg'
import slider41 from '../assets/41.jpg'
import slider42 from '../assets/42.jpg'

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
  }, {
    url: slider19,
  },
  {
    url: slider20,
  },
  {
    url: slider21,
  }, {
    url: slider22,
  },
  {
    url: slider23,
  },
  {
    url: slider24,
  },
  {
    url: slider25,
  },
  {
    url: slider26,
  },
  {
    url: slider27,
  },
  {
    url: slider28,
  },
  {
    url: slider29,
  },
  {
    url: slider30,
  },
  {
    url: slider31,
  },
  {
    url: slider32,
  },
  {
    url: slider33,
  },
  {
    url: slider34,
  },
  {
    url: slider35,
  },
  {
    url: slider36,
  },
  {
    url: slider37,
  },
  {
    url: slider38,
  },
  {
    url: slider39,
  },
  {
    url: slider40,
  },
  {
    url: slider41,
  },
  {
    url: slider42,
  },
];

const WeddingImageSlider = () => {
  return (
    <div className="slide-container lg:h-screen h-full">
      <Slide arrows={false} duration={4000} autoplay={true} infinite={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='bg-cover bg-center h-screen relative'>
              <div className='absolute top-0 left-0 p-16 text-[#E8E8E8] lg:p-32'>
                {/* <div className='font-bold text-3xl lg:text-6xl mb-4 lg:mb-16'>Cynthia & Eric</div> */}
                {/* {slideImage.description && <div className='font-bold text-xl lg:text-4xl font-rainbow'>{slideImage.description}</div>} */}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default WeddingImageSlider;
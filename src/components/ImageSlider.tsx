import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.jpg'
import slider3 from '../assets/slider-3.jpg'
import slider4 from '../assets/slider-4.jpg'
import slider5 from '../assets/slider-5.jpg'
import slider6 from '../assets/slider-6.jpg'
import slider7 from '../assets/slider-7.jpg'
import slider8 from '../assets/slider-8.jpg'

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
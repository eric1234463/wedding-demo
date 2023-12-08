import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.jpg'
import slider3 from '../assets/slider-3.jpg'

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
];

const WeddingImageSlider = () => {
  return (
    <div className="slide-container lg:h-screen h-full">
      <Slide arrows={false} duration={5000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='bg-cover bg-center h-screen relative'>
              <div className='absolute bottom-0 left-0 p-32 text-[#fff]'>
                <div className='text-6xl pb-16'>Cynthia & Eric</div>
                <div className='text-4xl font-rainbow'>{slideImage.description}</div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default WeddingImageSlider;
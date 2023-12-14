import React from 'react';

import WeddingImageSlider from "../components/ImageSlider"
import InvitationCard from "../components/InvitationCard"

const HomePage = () => {
  return (
    <div className='w-full grid grid-cols-12 h-full lg:h-screen'>
      <div className="lg:col-span-7 col-span-12">
        <WeddingImageSlider />
      </div>
      <div className="lg:col-span-5 col-span-12 ">
        <InvitationCard />
      </div>
    </div>
  )
}

export default HomePage;
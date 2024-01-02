import WeddingImageSlider from "../components/ImageSlider"
import InvitationCard from "../components/InvitationCard"
import MapCard from "../components/MapCard";

const HomePage = () => {
  return (
    <div className='w-full grid grid-cols-12 h-full lg:h-screen'>
      <div className="lg:col-span-7 col-span-12">
        <WeddingImageSlider />
      </div>
      <div className="lg:col-span-5 col-span-12 ">
        <InvitationCard />
      </div>
      <div className="lg:col-span-12 col-span-12 ">
        <MapCard />
      </div>
    </div>
  )
}

export default HomePage;
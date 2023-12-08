import WeddingImageSlider from "./Components/ImageSlider"
import InvitationCard from "./Components/InvitationCard"
import OgImage from "../src/assets/ogImage.jpg"

function App() {
  return (
    <>
      <meta property="og:image" content={OgImage}></meta>
      <div className='w-full grid grid-cols-12 h-full lg:h-screen'>
        <div className="lg:col-span-7 col-span-12">
          <WeddingImageSlider />
        </div>
        <div className="lg:col-span-5 col-span-12 ">
          <InvitationCard />
        </div>
      </div>
    </>
  )
}

export default App

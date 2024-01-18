/* eslint-disable @typescript-eslint/no-unused-vars */
import backgroundImage from '../assets/invitation-background.jpeg'
import NameIconBg from '../assets/name-icon-bg.jpeg'
// import { createEvent, EventAttributes } from 'ics';


const InvitationCard = () => {
  // const handleOnCalenderAddClick = async () => {
  //   const filename = 'EricAndCynthiaWedding.ics'

  //   const event: EventAttributes = {
  //     start: [2024, 1, 21, 11, 30],
  //     duration: { hours: 4, minutes: 30 },
  //     geo: { lat: 22.36879855333074, lon: 114.11300372685335 },
  //     title: 'Eric & Cynthia Wedding',
  //     description: '多謝大家賞面出席',
  //     location: '荃灣西如心酒店',
  //     status: 'CONFIRMED',
  //     busyStatus: 'BUSY',
  //   }

  //   createEvent(event)

  //   const file = await new Promise((resolve, reject) => {
  //     createEvent(event, (error, value) => {
  //       if (error) {
  //         reject(error)
  //       }

  //       resolve(new File([value], filename, { type: 'text/calendar' }))
  //     })
  //   })

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const url = URL.createObjectURL(file as unknown as any);

  //   const anchor = document.createElement('a');
  //   anchor.href = url;
  //   anchor.download = filename;

  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   document.body.removeChild(anchor);

  //   URL.revokeObjectURL(url);
  // }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className='relative flex bg-cover bg-no-repeat bg-center lg:h-full h-[1000px]'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full flex items-center flex-col'>
        <div style={{ backgroundImage: `url(${NameIconBg})` }} className='flex bg-contain bg-no-repeat bg-center w-80 h-80 relative'>
          <div className='flex-row flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#8B6024] text-center'>
            <div className='w-[64px] text-2xl'>Cynthia</div>
            <div className='text-2xl font-rainbow px-4' style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>K&K</div>
            <div className='w-[64px] text-2xl'>Eric</div>
          </div>
        </div>
        <div className="w-full text-center text-6xl text-[#333] pb-4 pt-8">Cynthia & Eric</div>
        <div className="w-full text-center text-2xl pb-4">21 Jan 2024 11:30am</div>
        <div className="w-full text-center text-xl pb-4 font-comfortaa">NINA HOTEL TSUEN WAN WEST 7/F Hall C</div>
        {/* <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded text-xl font-comfortaa" onClick={handleOnCalenderAddClick}>
          Add to your Calender
        </button> */}
      </div>
    </div>
  )
}

export default InvitationCard;
import backgroundImage from '../assets/invitation-background.jpeg'
import { createEvent, EventAttributes } from 'ics';


const InvitationCard = () => {
  const handleOnCalenderAddClick = async () => {
    const filename = 'EricAndCynthiaWedding.ics'

    const event: EventAttributes = {
      start: [2024, 1, 21, 11, 30],
      duration: { hours: 4, minutes: 30 },
      geo: { lat: 22.36879855333074, lon: 114.11300372685335 },
      title: 'Eric & Cynthia Wedding',
      description: '多謝大家賞面出席',
      location: '荃灣西如心酒店',
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
    }

    createEvent(event)

    const file = await new Promise((resolve, reject) => {
      createEvent(event, (error, value) => {
        if (error) {
          reject(error)
        }

        resolve(new File([value], filename, { type: 'text/calendar' }))
      })
    })

    const url = URL.createObjectURL(file);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className='relative flex bg-cover bg-no-repeat bg-center lg:h-full h-[600px]'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <div className="w-full text-center text-4xl text-[#333] pb-4">Cynthia & Eric</div>
        <div className="w-full text-center text-xl pb-4">21 Jan 2024</div>
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded" onClick={handleOnCalenderAddClick}>
          Add to your Calender
        </button>
      </div>
    </div>
  )
}

export default InvitationCard;
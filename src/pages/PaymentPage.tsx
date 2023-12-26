import payme from '../assets/payme.jpg'
import fps from '../assets/fps.jpg'
import alipay from '../assets/alipay.jpg'
import backgroundImage from '../assets/payment-bg.jpg'

const PaymentPage = () => {
  return (
    <div style={{ 'backgroundImage': `url(${backgroundImage})` }} className='px-4 py-16 bg-cover bg-center h-screen relative'>
      <div className='text-center font-bold text-3xl lg:text-6xl mb-4 lg:mb-16 text-[#fe6694]'>Cynthia & Eric</div>
      <div className='text-center font-bold text-xl lg:text-3xl mb-4 lg:mb-16 text-[#fe6694]'>21 Jan 2024</div>
      <div className='grid grid-cols-3 h-[400px] gap-2'>
        <div style={{ 'backgroundImage': `url(${payme})` }} className='bg-contain bg-center h-full relative'/>
        <div style={{ 'backgroundImage': `url(${fps})` }} className='bg-contain bg-center h-full relative'/>
        <div style={{ 'backgroundImage': `url(${alipay})` }} className='bg-contain bg-center h-full relative' />
      </div>
    </div>
  )
}

export default PaymentPage
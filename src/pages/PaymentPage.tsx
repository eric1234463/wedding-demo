import payme from '../assets/payme.jpg'
import fps from '../assets/fps.jpg'
import alipay from '../assets/alipay.jpg'

const PaymentPage = () => {
  return (
    <div className='px-4 py-16'>
      <div className='text-center font-bold text-3xl lg:text-6xl mb-4 lg:mb-16'>Cynthia & Eric</div>
      <div className='text-center font-bold text-xl lg:text-3xl mb-4 lg:mb-16'>21 Jan 2024</div>
      <div className='grid grid-cols-3 h-[600px]'>
        <div style={{ 'backgroundImage': `url(${payme})` }} className='bg-cover bg-center h-full relative'/>
        <div style={{ 'backgroundImage': `url(${fps})` }} className='bg-cover bg-center h-full relative'/>
        <div style={{ 'backgroundImage': `url(${alipay})` }} className='bg-cover bg-center h-full relative' />
      </div>
    </div>
  )
}

export default PaymentPage
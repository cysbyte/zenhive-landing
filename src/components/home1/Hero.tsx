import './Hero.css'

const Hero = () => {
  return (
    <div className='bg-transparent flex flex-col items-center justify-center gap-8 py-[120px] lg:py-[200px] text-center'>
      <h1 className='hidden md:block break-words w-auto text-white font-montserrat font-[600] text-[36px] md:text-[44px] leading-[45px] md:leading-[54px] tracking-[2px]'>The Future of <span className='font-montserratBold font-[800] text-[#4AFF86] tracking-[1px]'>Decentralized Infrastructure</span></h1>
      <h1 className='block md:hidden text-nowrap break-words w-auto text-white font-clashGrotesk font-[600] text-[40px] md:text-[44px] leading-[45px] md:leading-[54px] tracking-[2px] gradient-text'>The Future of <br />Decentralized <br />Infrastructure</h1>
      <p className='hidden md:block text-white font-inter w-auto font-[400] text-[20px] leading-[33px] tracking-[1px]'>A Device built on aZen Protocol for Universal Computing Enabling [Decentralized <br />Storage, AI Inferencing, Edge Computing, Content Delivery, Real-Time Analytics, IoT<br /> Solutions, Smart Contract, Decentralized Identity]</p>
      <p className='block md:hidden text-white font-cabinetGrotesk w-[90%] font-[400] text-[18px] leading-[30px] tracking-[1px]'>A Device built on aZen Protocol for Universal Computing Enabling <br />[Decentralized Storage, AI Inferencing, Edge Computing, Content Delivery, <br />Real-Time Analytics, IoT Solutions, Smart Contract, Decentralized Identity]</p>
      <button className='shadow-animate-button1 text-white rounded-full p-[2px] -mt-3 mb-64'>
        <p className='font-montserrat bg-black text-[20px] leading-[26px] font-normal text-white rounded-full py-5 px-8'>Get Early access</p>
      </button>
    </div>

  )
}

export default Hero
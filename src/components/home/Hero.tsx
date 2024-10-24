import AnimationTexts from './AnimationTexts'
import './Hero.css'

const Hero = () => {
  return (
    <div className='z-10 bg-transparent flex flex-col items-center justify-center gap-4 md:gap-7 py-[200px] lg:py-[200px] text-center'>
      <h1 className='hidden md:block z-10 break-words mt-4 w-auto text-white font-montserrat font-[600] text-[36px] leading-[45px] tracking-[2px]'>The Future of <span className='font-montserratBold font-[800] text-[#4AFF86] tracking-[1px]'>Decentralized Infrastructure</span></h1>
      <h1 className='block md:hidden z-10 break-words mt-4 w-auto text-white font-montserrat font-[500]  text-[22px] leading-[27px] tracking-[2px]'>The Future of <br/><span className='font-montserratBold font-[800] text-[#4AFF86] tracking-[1px] leading-[25px]'>Decentralized Infrastructure</span></h1>
 
      <p className='z-10 hidden md:flex gap-2 text-white font-inter w-auto font-[300] text-[20px] leading-[33px] tracking-tight items-center'>A Device built on aZen Protocol for Universal Computing Enabling <AnimationTexts/></p>
      
      <p className='z-10 block md:hidden text-white font-inter w-[90%] font-[400] text-[14px] leading-[20px] tracking-[1px]'><p>A Device built on aZen Protocol for Universal</p> 
      <div className='flex justify-center items-center gap-1 mx-auto'>
        <p>Computing Enabling</p> 
        <AnimationTexts/>
      </div>
      </p>
      <button className='z-10 hidden md:block shadow-animate-button1 text-white rounded-full p-[2px] -mt-0 mb-64'>
        <p className='font-montserrat bg-black text-[20px] leading-[26px] font-normal text-white rounded-full py-5 px-8'>Get Early access</p>
      </button>
    </div>

  )
}

export default Hero
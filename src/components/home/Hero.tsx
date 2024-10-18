import Container from '../container/Container'

const Hero = () => {
  return (
    <Container>
      <div className='bg-black flex flex-col items-center justify-center gap-8 py-[120px] lg:py-[200px] text-center'>
        <h1 className='w-auto text-white font-clashGrotesk font-[600] text-[30px] md:text-[44px] leading-[54px] tracking-[2px] gradient-text'>The Future of Decentralized Infrastructure</h1>
        <p className='text-white font-cabinetGrotesk w-auto font-[400] text-[20px] leading-[33px] tracking-[1px]'>A Device built on aZen Protocol for Universal Computing Enabling <br/>[Decentralized Storage, AI Inferencing, Edge Computing, Content Delivery, <br/>Real-Time Analytics, IoT Solutions, Smart Contract, Decentralized Identity]</p>
        <button className='text-white gradient-background rounded-full p-[2px] mt-12'>
          <p className='font-spaceGrotesk bg-black text-[20px] leading-[26px] font-normal text-white rounded-full py-4 px-8'>Get Early access</p>
        </button>
      </div>
    </Container>
  )
}

export default Hero
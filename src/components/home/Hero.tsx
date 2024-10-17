import Container from '../container/Container'

const Hero = () => {
  return (
    <Container>
    <div className='bg-black flex flex-col items-center justify-center gap-5 py-[200px] text-center'>
        <h1 className=' text-white font-clashGrotesk font-[500] text-[44px] leading-[54px] tracking-[2%] gradient-text'>The Future of Decentralized Infrastructure</h1>
        <p className='text-white font-cabinetGrotesk w-[52%] font-[400] text-[20px] leading-[33px] tracking-[0.72px]'>A Device built on aZen Protocol for Universal Computing Enabling Decentralized Storage, AI Inferencing, Edge Computing, Content Delivery, Real-Time Analytics, IoT Solutions, Smart Contract, Decentralized Identity</p>
        <button className='text-white gradient-background rounded-full p-[2px] mt-4'>
            <p className='bg-black text-white rounded-full py-3 px-5'>Get Early access</p>
            </button>
    </div>
    </Container>
  )
}

export default Hero
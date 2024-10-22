import Container from '../container/Container'
import Features from './feature/Features'
import JoinDepin from './feature/JoinDepin'
import JoinList from './home/JoinList'
import KeyFeatures from './feature/KeyFeatures'

const Feature = () => {
  return (
    <Container>
      <div className='px-5 lg:px-24 py-10 md:py-14 gap-10 lg:gap-1 text-center'>
        <h2 className='font-montserratBold font-[550] text-[30px] lg:text-[48px] leading-[52px] tracking-[-0.6px] text-[#4AFF86]'>ZenHive Commercial Adoption</h2>
        <Features />
        <h2 className='mt-28 font-montserratBold font-[550] text-[30px] lg:text-[48px] leading-[52px] tracking-[-0.6px] text-[#4AFF86]'>ZenHive’s Key Features</h2>
        <KeyFeatures />
        <h2 className='mt-20 md:mt-10 font-montserratBold font-[500] text-[27px] lg:text-[48px] leading-[55px] tracking-[-0.4px] text-[#4AFF86]'>Join the DePIN Revolution:<br/> Select Your ZenHive Role Now!</h2>
        <JoinDepin />
      </div>
    </Container>
  )
}

export default Feature
import Container from '../container/Container'
import Features from './feature/Features'
import JoinDepin from './feature/JoinDepin'
import KeyFeatures from './feature/KeyFeatures'
import milky1 from '../../assets/home1/milky1.svg'
import milky2 from '../../assets/home1/milky2.svg'

const Feature = () => {
  return (
    <Container>
      <div className='px-5 lg:px-24 py-10 md:py-14 gap-10 lg:gap-1 text-center relative'>
        <img className='absolute left-[1rem] top-[36rem] ' src={milky1} alt=''/>
        <img className='absolute left-5 top-[64rem] ' src={milky2} alt=''/>
        <h2 className='font-montserratBold font-[550] text-[30px] lg:text-[48px] leading-[52px] tracking-[-0.6px] text-[#4AFF86]'>ZenHive Commercial Adoption</h2>
        <Features />
        <h2 className='mt-28 font-montserratBold font-[550] text-[30px] lg:text-[48px] leading-[52px] tracking-[-0.6px] text-[#4AFF86]'>ZenHive’s Key Features</h2>
        <KeyFeatures />
        <h2 className='mt-20 md:mt-56 font-montserratBold font-[500] text-[27px] lg:text-[48px] leading-[55px] tracking-[-0.4px] text-[#4AFF86]'>Join the DePIN Revolution:<br/> Select Your ZenHive Role Now!</h2>
        <JoinDepin />
      </div>
    </Container>
  )
}

export default Feature
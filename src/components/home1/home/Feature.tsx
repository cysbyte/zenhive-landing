import Container from '../../container/Container'
import Features from './feature/Features'
import JoinDepin from './feature/JoinDepin'
import KeyFeatures from './feature/KeyFeatures'

const Feature = () => {
  return (
    <Container>
        <div className='px-5 lg:px-24 py-10 md:py-20 gap-10 lg:gap-1'>
            <h2 className='font-dmsans font-[550] text-[30px] lg:text-[42px] leading-[52px] tracking-[-0.6px] text-[#1E0E62]'>ZenHive Commercial Adoption</h2>
            <Features/>
            <h2 className='mt-20 font-dmsans font-[550] text-[30px] lg:text-[42px] leading-[52px] tracking-[-0.6px] text-black'>ZenHive’s Key Features</h2>
            <KeyFeatures/>
            <h2 className='mt-20 md:mt-40 font-dmsans font-[500] text-[27px] lg:text-[36px] leading-[32px] tracking-[-0.4px] text-black'>Join the DePIN Revolution: Select Your ZenHive Role Now!</h2>
            <JoinDepin/>
        </div>
    </Container>
  )
}

export default Feature
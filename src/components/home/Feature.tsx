import Container from '../container/Container'
import Features from './feature/Features'
import JoinDepin from './feature/JoinDepin'
import JoinList from './feature/JoinList'
import KeyFeatures from './feature/KeyFeatures'

const Feature = () => {
  return (
    <Container>
        <div className='px-10 lg:px-24 py-20 gap-10 lg:gap-1'>
            <h2 className='font-dmsans font-[550] text-[30px] lg:text-[42px] leading-[52px] tracking-[-0.6px] text-[#1E0E62]'>ZenHive Commercial Adoption</h2>
            <Features/>
            <h2 className='mt-20 font-dmsans font-[550] text-[30px] lg:text-[42px] leading-[52px] tracking-[-0.6px] text-black'>ZenHive’s Key Features</h2>
            <KeyFeatures/>
            <h2 className='mt-40 font-dmsans font-[500] text-[27px] lg:text-[36px] leading-[32px] tracking-[-0.4px] text-black'>Join the DePIN Revolution: Select Your ZenHive Role Now!</h2>
            <JoinDepin/>
            <h2 className='mt-[7.5rem] font-[700] text-[30px] lg:text-[42px] leading-[52px] tracking-[-0.4px] text-[#1E0E62]'>Join the Early Access List</h2>
            <p className='mt-8 font-medium font-dmsans text-[#15143966] text-[22px]'>Sign up now for exclusive updates and be among the first to embark on this exciting journey with us!</p>
            <JoinList/>
        </div>
    </Container>
  )
}

export default Feature
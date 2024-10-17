import React from 'react'
import Container from '../container/Container'
import Features from './Features'
import KeyFeatures from './KeyFeatures'
import JoinDepin from './JoinDepin'
import JoinList from './JoinList'

const Feature = () => {
  return (
    <Container>
        <div className='px-20 py-20'>
            <h2 className='font-dmsans font-[700] text-[42px] leading-[52px] tracking-[-0.4px] text-[#1E0E62]'>ZenHive Commercial Adoption</h2>
            <Features/>
            <h2 className='mt-20 font-dmsans font-[700] text-[42px] leading-[52px] tracking-[-0.4px] text-[#1E0E62]'>ZenHive’s Key Features</h2>
            <KeyFeatures/>
            <h2 className='mt-20 font-dmsans font-[500] text-[36px] leading-[32px] tracking-[-0.4px] text-[#1E0E62]'>Join the DePIN Revolution: Select Your ZenHive Role Now!</h2>
            <JoinDepin/>
            <h2 className='mt-20  font-[500] text-[36px] leading-[32px] tracking-[-0.4px] text-[#1E0E62]'>Join the Early Access List</h2>
            <p className='mt-10 font-medium  font-dmsans text-[#15143966] text-base'>Sign up now for exclusive updates and be among the first to embark on this exciting journey with us!</p>
            <JoinList/>
        </div>
    </Container>
  )
}

export default Feature
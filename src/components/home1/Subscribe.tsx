import discord from '../../assets/header/discord.svg'
import github from '../../assets/header/github.svg'
import reddit from '../../assets/header/reddit.svg'
import twitter from '../../assets/header/twitter.svg'
import azen from '../../assets/home1/azen.svg'
import contact from '../../assets/home1/contact.svg'
import phone from '../../assets/home1/phone.svg'

import Container from '../container/Container'

const Subscribe = () => {
    const icons = [
        {
            id: 1,
            icon: github,
            name: 'github'
        },
        {
            id: 2,
            icon: reddit,
            name: 'reddit'
        },
        {
            id: 3,
            icon: discord,
            name: 'discord'
        },
        {
            id: 4,
            icon: twitter
        },
    ]
    return (
        <Container>
            <div className='w-full px-0 md:px-24 py-[1.4rem] mt-4 flex flex-col  gap-10 md:gap-1 items-center md:items-end'>
                <div className='rounded-[22px] w-full flex flex-col xl:flex-row items-center gap-16 px-8 py-12 bg-[#0D0D0D]'>
                    <h6 className='font-montserratSemiBold font-medium text-white text-[30px] md:text-[46px] leading-[61px] text-nowrap tracking-wider'>Subsribe For Update</h6>
                    <div className=' bg-[#1D1D1D] flex flex-col md:flex-row items-center justify-between w-full gap-5 md:gap-2  rounded-[0px] md:rounded-full py-3 px-3 '>
                        <input className='w-full bg-transparent text-white text-[18px] font-montserrat rounded-full px-3 py-[0.5rem] placeholder:text-[18px] placeholder:font-dmsans placeholder:text-[#8A8A8A] placeholder:tracking-wider placeholder:font-thin appearance-none focus:outline-none '
                            type="text"
                            id='email'
                            placeholder={`Enter your email address`}
                        />
                        <div className='w-auto rounded-full p-[2px] bg-gradient-to-r from-[#4AFF86] to-[#006F25]'>
                            <button className='font-montserrat text-[20px] leading-[24px] rounded-full px-7 py-5 bg-black text-white'>Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full py-6 border-t border-b mt-2 border-[#262626]'>
                <div className='px-24 mb-9 w-full flex items-center justify-between'>
                    <img src={azen} alt='' />
                    <div className='flex justify-center items-center gap-6'>
                        {
                            icons.map((item) => (
                                <div key={item.id} className='rounded-full bg-gray-950 cursor-pointer' >
                                    <img className='w-10 h-auto' src={item.icon} alt={item.name} />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='w-full px-24 flex flex-col md:flex-row items-center gap-6'>
                    <h5 className='font-montserrat text-[22px] leading-[33px] text-white'>Contact:</h5>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-8'>
                        <div className=' flex gap-2 items-center'>
                            <img src={contact} alt='' />
                            <p className='font-[400] text-base text-[#E6E6E6]'>hello@azenprotocol.io</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <img src={phone} alt='' />
                            <p className='font-[400] text-base text-[#E6E6E6]'>+91 91813xx xxx</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-24 flex flex-col md:flex-row justify-end items-center text-[#E6E6E6] font-montserrat text-[18px] leading-[27px] gap-8 underline mt-10 md:m-0'>
                    <a href="">White Paper</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
        </Container>
    )
}

export default Subscribe
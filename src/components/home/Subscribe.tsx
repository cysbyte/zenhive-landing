import discord from '../../assets/header/discord.svg'
import github from '../../assets/header/github.svg'
import reddit from '../../assets/header/reddit.svg'
import twitter from '../../assets/header/twitter.svg'
import Container from '../container/Container'

const Subscribe = () => {
    const icons = [
        {
            id: 1,
            icon: twitter
        },
        {
            id: 2,
            icon: discord,
            name: 'discord'
        },
        {
            id: 3,
            icon: github,
            name: 'github'
        },
        {
            id: 4,
            icon: reddit,
            name: 'reddit'
        },
    ]
    return (
        <Container>
            <div className='px-16 py-[1.4rem] flex flex-col md:flex-row bg-black w-full justify-between gap-10 md:gap-1 items-center md:items-end'>
                <div className='mt-5 w-full'>
                    <h6 className='text-white text-[0.7rem] uppercase font-dmsans font-thin'>SUBSCRIBE FOR UPDATES</h6>
                    <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-[36rem] gap-5 md:gap-2 border-[1px] border-gray-800 rounded-2xl py-1 px-3 mt-2 backdrop-blur-sm shadow-xl'>
                        <input className='bg-black text-white text-[16px] font-dmsans rounded-full px-3 py-[0.5rem] placeholder:text-[16px] placeholder:font-dmsans placeholder:text-white placeholder:tracking-wider placeholder:font-thin appearance-none focus:outline-none ' 
                        type="text" 
                        id='email'
                        placeholder={`Enter your email`}
                        />
                        <button className='text-slate-500 uppercase font-bold'>Subscribe</button>
                    </div>

                </div>
                
                <div>
                    <div className='flex justify-center items-center gap-3 mb-8'>
                        {
                            icons.map((item)=>(
                                <div key={item.id} className='p-3 rounded-full border-[1px] border-gray-700 bg-gray-950' >
                                     <img className='cursor-pointer' src={item.icon} alt={item.name} />
                                </div>
                            ))
                        }
                       
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Subscribe
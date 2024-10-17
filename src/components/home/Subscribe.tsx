import discord from '../../assets/header/discord.svg'
import github from '../../assets/header/github.svg'
import reddit from '../../assets/header/reddit.svg'
import twitter from '../../assets/header/twitter.svg'
import Container from '../container/Container'

const Subscribe = () => {
    return (
        <Container>
            <div className='px-16 py-10 flex flex-col md:flex-row bg-black w-full justify-between gap-10 md:gap-1 items-center md:items-end'>
                <div>
                    <h3 className='text-white uppercase'>SUBSCRIBE FOR UPDATES</h3>
                    <h3 className='text-white ml-3 text-lg mt-3'>Enter your email</h3>
                </div>
                <p className='text-slate-500 uppercase mb-2'>Subscribe</p>
                <div>
                    <div className='flex justify-center items-center gap-3 mb-5'>
                        <img className='cursor-pointer' src={github} alt='github' />
                        <img className='cursor-pointer' src={discord} alt='discord' />
                        <img className='cursor-pointer' src={reddit} alt='reddit' />
                        <img className='cursor-pointer' src={twitter} alt='twitter' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Subscribe
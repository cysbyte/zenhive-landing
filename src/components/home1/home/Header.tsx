import discord from '../../assets/header/discord.svg'
import github from '../../assets/header/github.svg'
import reddit from '../../assets/header/reddit.svg'
import twitter from '../../assets/header/twitter.svg'
import Container from '../../container/Container'

const Header = () => {
  return (
    <Container>
      <div className='pt-12 bg-black flex justify-between items-center px-10 md:px-20 py-4'>
        <h3 className='font-chillax font-[500] text-2xl text-white leading-[34px] cursor-pointer'>Serendale</h3>
        <div className='hidden lg:flex items-center gap-10 '>
          <h3 className='font-clashGrotesk text-lg font-thin text-white cursor-pointer'>Smart ContractsService</h3>
          <h3 className='font-clashGrotesk text-lg font-thin text-white cursor-pointer'>Solutions RoadmapWhitePaper</h3>
        </div>

        <div className='flex justify-center items-center gap-4'>
          <img className='cursor-pointer' src={github} alt='github'/>
          <img className='cursor-pointer' src={discord} alt='discord'/>
          <img className='cursor-pointer' src={reddit} alt='reddit'/>
          <img className='cursor-pointer' src={twitter} alt='twitter'/>
        </div>
      </div>
    </Container>
  )
}

export default Header
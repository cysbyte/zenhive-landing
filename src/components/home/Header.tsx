import React from 'react'
import Container from '../container/Container'
import discord from '../../assets/header/discord.svg'
import github from  '../../assets/header/github.svg'
import reddit from '../../assets/header/reddit.svg'
import twitter from '../../assets/header/twitter.svg'

const Header = () => {
  return (
    <Container>
      <div className='bg-black flex justify-between items-center px-20 py-4'>
        <h3 className='font-chillax font-[500] text-2xl text-white'>Serendale</h3>
        <div className='flex items-center gap-4'>
          <h3 className='font-clashGrotesk text-lg font-thin text-white'>Smart Contracts Service</h3>
          <h3 className='font-clashGrotesk text-lg font-thin text-white'>Solutions Roadmap WhitePaper</h3>
        </div>

        <div className='flex justify-center items-center gap-3'>
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
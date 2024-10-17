import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import ClientLogos from '../components/home/ClientLogos'
import Feature from '../components/home/Feature'
import GetLatest from '../components/home/GetLatest'
import Subscribe from '../components/home/Subscribe'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <main>
        <Header/>
        <Hero/>
        <ClientLogos/>
        <Feature/>
        <GetLatest/>
        <Subscribe/>
        <Footer/>
    </main>
  )
}

export default Home
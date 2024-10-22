import ClientLogos from '../components/home/ClientLogos'
import Feature from '../components/home/Feature'
import Footer from '../components/home/Footer'
import GetLatest from '../components/home/GetLatest'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Subscribe from '../components/home/Subscribe'

const Home = () => {
  return (
    <main className='overflow-x-hidden'>
      <div className='bg-black'>
        <Header/>
        <Hero/>
      </div>
        <ClientLogos/>
        <Feature/>
        <GetLatest/>
        <Subscribe/>
        <Footer/>
    </main>
  )
}

export default Home
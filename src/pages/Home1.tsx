import ClientLogos from '../components/home1/ClientLogos'
import Feature from '../components/home1/Feature'
import Footer from '../components/home1/Footer'
import GetLatest from '../components/home1/GetLatest'
import Header from '../components/home1/Header'
import Hero from '../components/home1/Hero'
import Subscribe from '../components/home1/Subscribe'
import Container from '../components/container/Container'
import JoinList from '../components/home1/home/JoinList'

const Home1 = () => {
    return (
        <main className='overflow-x-hidden bg-black'>
            <Container>
                <div className="bg-[url('assets/home1/bg-hero.svg')] w-full h-full bg-cover bg-no-repeat">
                    <Header />
                    <Hero />
                </div>
            </Container>
            <ClientLogos />
            <Feature />
            <JoinList />
            <GetLatest />
            <Subscribe />

        </main>
    )
}

export default Home1
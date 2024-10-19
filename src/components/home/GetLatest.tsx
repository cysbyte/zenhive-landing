import Container from '../container/Container'
import Din from './latest/Din'
import Infura from './latest/Infura'
import Recap from './latest/Recap'

const GetLatest = () => {
  const data = [
    {
      id: 1,
      category: 'DIN',
      title: 'Celebrating Q3 2024 Milestones for DIN',
      desc: 'Celebrating Q3 2024 Milestones for DIN',
      component: <Recap/>
    },
    {
      id: 2,
      category: 'INFURA',
      title: 'Best Practices for Infura API Key Management',
      desc: 'Best Practises for Infura API Key Management',
      component: <Infura/>
    },
    {
      id: 3,
      category: 'INFURA',
      title: 'DIN Summer Network Launches',
      desc: 'DIN Summer Network Launches',
      component: <Din/>
    },

  ]
  return (
    <Container>
      <div className='px-5 md:px-20 py-10 md:py-20'>
        <h2 className='font-[600] text-[30px] lg:text-[40px] leading-[32px] text-center tracking-wider'>Get the latest</h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between mt-20 ">
          {
            data.map((item) => (
              <div key={item.id} className="flex flex-1 flex-col gap-3 items-start">
                {item.component}
                <h3 className="bg-[#e26442] uppercase px-3 py-1 w-[5rem] text-center">{item.category}</h3>
                <h2 className='text-xl text-[#3c3832] font-semibold'>{item.title}</h2>
                <p className='text-lg text-[#38322b] font-normal'>{item.desc}</p>
                <a className=" uppercase no-underline text-[#9aa7b3]" href="">Read more {'>'}</a>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default GetLatest
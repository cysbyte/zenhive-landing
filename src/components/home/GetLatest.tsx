import Container from '../container/Container'
import Din from './latest/Din'
import Infura from './latest/Infura'
import Recap from './latest/Recap'
import recap from '../../assets/latest/recap.png'
import bestPractises from '../../assets/latest/best-practises.png'
import summer from '../../assets/latest/summer.png'

const GetLatest = () => {
  const data = [
    {
      id: 1,
      category: 'DIN',
      title: 'Celebrating Q3 2024 Milestones for DIN',
      desc: 'Celebrating Q3 2024 Milestones for DIN',
      component: <Recap/>,
      image: recap
    },
    {
      id: 2,
      category: 'INFURA',
      title: 'Best Practices for Infura API Key Management',
      desc: 'Best Practises for Infura API Key Management',
      component: <Infura/>,
      image: bestPractises
    },
    {
      id: 3,
      category: 'INFURA',
      title: 'DIN Summer Network Launches',
      desc: 'DIN Summer Network Launches',
      component: <Din/>,
      image: summer,
    },

  ]
  return (
    <Container>
      <div className='px-5 md:px-20 py-10 md:py-20'>
        <h2 className='font-[600] text-[30px] lg:text-[40px] leading-[32px] text-center tracking-wider'>Get the latest</h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between mt-14 ">
          {
            data.map((item) => (
              <div key={item.id} className="flex-1 flex-col">
                {/* {item.component} */}
                <img className='rounded-[1px] max-w-[23rem]' src={item.image} alt=''/>
                <h3 className="bg-[#e26442] inline-block uppercase px-3 py-[0.1rem] w-auto text-center text-[0.78rem] mt-4">{item.category}</h3>
                <h2 className='text-xl text-[#3c3832] font-semibold mt-2 tracking-wider'>{item.title}</h2>
                <p className='text-lg text-[#38322b] font-normal mt-2'>{item.desc}</p>
                <div className='mt-3'>
                <a className=" uppercase no-underline text-[#9aa7b3] text-sm" href="">Read more  {' >'}</a>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default GetLatest
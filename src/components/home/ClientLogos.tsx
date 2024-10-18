import logo1 from '../../assets/client-logos/logo1.svg'
import logo2 from '../../assets/client-logos/logo2.svg'
import logo3 from '../../assets/client-logos/logo3.svg'
import logo4 from '../../assets/client-logos/logo4.svg'
import logo5 from '../../assets/client-logos/logo5.svg'
import logo6 from '../../assets/client-logos/logo6.svg'


const ClientLogos = () => {


  return (
    <div className="p-2 whitespace-nowrap ">
    <div className='mx-auto flex flex-wrap items-center justify-center border-t border-b w-[100%] md:w-[80%] py-10 gap-6 my-3 px-20  whitespace-normal'
      >
      <img src={logo1} alt='' />
      <img src={logo2} alt='' />
      <img src={logo3} alt='' />
      <img src={logo4} alt='' />
      <img src={logo5} alt='' />
      <img src={logo6} alt='' />
    </div>
    </div>
  )
}

export default ClientLogos
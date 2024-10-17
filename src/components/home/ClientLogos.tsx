import logo1 from '../../assets/client-logos/logo1.svg'
import logo2 from '../../assets/client-logos/logo2.svg'
import logo3 from '../../assets/client-logos/logo3.svg'
import logo4 from '../../assets/client-logos/logo4.svg'
import logo5 from '../../assets/client-logos/logo5.svg'
import logo6 from '../../assets/client-logos/logo6.svg'

const ClientLogos = () => {
  return (
    <div className='mx-auto flex items-center justify-between w-[80%] py-9 my-3 px-20 border-t border-b'>
        <img src={logo1} alt=''/>
        <img src={logo2} alt=''/>
        <img src={logo3} alt=''/>
        <img src={logo4} alt=''/>
        <img src={logo5} alt=''/>
        <img src={logo6} alt=''/>
    </div>
  )
}

export default ClientLogos
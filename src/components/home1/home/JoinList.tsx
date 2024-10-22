import stripe1 from '../../../assets/home1/join-list-stripe1.svg'
import stripe2 from '../../../assets/home1/join-list-stripe2.svg'

const JoinList = () => {
  return (
    <div className='relative w-full mt-10 px-24 py-12 bg-gradient-to-b from-[#00842C] to-[#003110] overflow-hidden'>
      <img className='absolute left-0' src={stripe1} alt=''/>
      <img className='absolute left-96' src={stripe2} alt=''/>
      <div className="flex flex-col items-center gap-3 px-20 py-10 rounded-2xl bg-[#008A2E] backdrop-blur-xl">
        <h2 className="font-montserratBold text-[32px] mt-4 leading-[48px] text-white">Join the Early Access List</h2>
        <p className="font-montserrat text-[18px] font-[400] leading-[28px] text-white text-center">Sign up now for exclusive updates and be among the first to embark on<br /> this exciting journey with us!</p>

        <div className='flex flex-row justify-between gap-52 mt-0 w-full'>
          <input className='text-[20px] w-full border-white border-b border-opacity-70 font-montserrat bg-transparent py-[0.7rem] md:py-[0.9rem] placeholder:text-[18px] md:placeholder:text-[20px] placeholder:font-montserrat placeholder:text-[#FFFFFF] placeholder:opacity-70 placeholder:font-normal appearance-none focus:outline-none'
            type='text'
            id='email'
            placeholder={`Full Name`}
          />
          <input className='text-[20px] w-full border-white border-b border-opacity-70 font-montserrat bg-transparent py-[0.7rem] md:py-[0.9rem] placeholder:text-[18px] md:placeholder:text-[20px] placeholder:font-montserrat placeholder:text-[#FFFFFF] placeholder:opacity-70 placeholder:font-normal appearance-none focus:outline-none'
            type='text'
            id='email'
            placeholder={`Email`}
          />
        </div>
        <button className='bg-transparent mt-4 border-[1px] font-[500] text-[20px] font-montserrat leading-[26px] text-white rounded-full px-8 py-[0.92rem] md:py-[1rem] w-full md:w-auto text-nowrap'>Sign Up</button>
      </div>
    </div>
  )
}

export default JoinList

const JoinList = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-4 w-full md:w-[43%] justify-start items-start md:items-end'>
        <div className='flex flex-col gap-5 mt-5 w-full'>
            <input className='border-[1px] rounded-full px-4 py-2 placeholder:text-sm appearance-none focus:outline-none'
            type='text'
            id='email'
            placeholder={`Full Name`}
            />
            <input className='border-[1px] rounded-full px-4 py-2 placeholder:text-sm appearance-none focus:outline-none'
            type='text'
            id='email'
            placeholder={`Email`}
            />
        </div>
        <button className='bg-[#25DAC5] text-white rounded-full px-4 py-2 w-full md:w-auto text-nowrap'>Sign Up</button>
    </div>
  )
}

export default JoinList
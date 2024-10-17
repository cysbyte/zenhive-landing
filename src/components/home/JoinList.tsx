
const JoinList = () => {
  return (
    <div className='flex gap-4 w-[30rem] justify-start items-end'>
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
        <button className='bg-[#25DAC5] text-white rounded-full px-4 py-2 text-nowrap'>Sign Up</button>
    </div>
  )
}

export default JoinList
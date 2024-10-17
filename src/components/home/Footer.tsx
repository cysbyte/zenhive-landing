import Container from '../container/Container'

const Footer = () => {
  return (
    <Container>
         <div className='px-16 py-20 flex w-full justify-between items-start'>
            <div className='w-48'>
                <h3 className='font-dmsans font-bold text-2xl text-[#1E0E62]'>Address</h3>
                <p className='font-dmsans font-normal text-base text-[#15143966] mt-1'>Be sure to take a look at our Terms of Use and Privacy Policy</p>
            </div>
            <div className='flex items-start gap-16'>
                <div className='flex flex-col gap-2'>
                    <h6 className='font-dmsans font-medium text-[18px] leading-[28px] text-[#1E0E62]'>Resources</h6>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">Whitepaper</a>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">Set-up Guide</a>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">Privacy</a>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">Blog</a>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">FAQ</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <h6 className='font-dmsans font-medium text-[18px] leading-[28px] text-[#1E0E62]'>Project</h6>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">About Us</a>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">Contact</a>
                    <a className='font-dmsans font-normal text-base text-[#1E0E62]' href="">Media Kit</a>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer
import Container from '../container/Container'

const Footer = () => {
    const resources = [
        {
            id: 1,
            name: 'Whitepaper',
        },
        {
            id: 2,
            name: 'Set-up Guide',
        },
        {
            id: 3,
            name: 'Privacy',
        },
        {
            id: 4,
            name: 'Blog',
        },
        {
            id: 5,
            name: 'FAQ',
        },
    ]

    const projects = [
        {
            id: 1,
            name: 'About Us'
        },
        {
            id: 2,
            name: 'Contact'
        },
        {
            id: 3,
            name: 'Media Kit'
        },
    ]
    return (
        <Container>
            <div className='px-16 py-10 flex flex-col md:flex-row gap-10 md:gap-1 w-full justify-between items-start'>
                <div className='w-60 mt-2'>
                    <h3 className='font-dmsans font-[600] text-2xl text-[#1E0E62]'>Address</h3>
                    <p className='font-dmsans font-thin text-base text-[#15143966] mt-2 leading-[26px] tracking-wider'>Be sure to take a look at our Terms of Use and Privacy Policy</p>
                </div>
                <div className='flex items-start gap-36 w-full justify-between md:justify-end'>
                    <div>
                        <h6 className='font-dmsans font-medium text-[18px] leading-[28px] text-[#1E0E62]'>Resources</h6>
                        <div className='flex flex-col gap-3 mt-3'>
                            {
                                resources.map((item) => (
                                    <a key={item.id} className='font-dmsans font-thin text-base text-[#1E0E62]' href="">{item.name}</a>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h6 className='font-dmsans font-medium text-[18px] leading-[28px] text-[#1E0E62]'>Project</h6>
                        <div className='flex flex-col gap-3 mt-3'>
                            {
                                projects.map((item) => (
                                    <a key={item.id} className='font-dmsans font-thin text-base text-[#1E0E62]' href="">{item.name}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
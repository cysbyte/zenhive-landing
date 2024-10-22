import whatsapp1 from '../../../assets/home1/key-features/whatsapp1.svg'
import featureIcon from '../../../assets/home1/feature.svg'

const KeyFeatures = () => {
    const data = [
        {
            id: 1,
            title: 'Heterogeneous Computing Power',
            desc: 'Our online banking platform is built with multiple of security to safeguard your information.',
        },
        {
            id: 2,
            title: 'AI-Enhanced Efficiency',
            desc: 'Our online banking platform is built with multiple of security to safeguard your information.',
        },
        {
            id: 3,
            title: 'Edge-Optimized Performance',
            desc: 'Our online banking platform is built with multiple of security to safeguard your information.',
        },
        {
            id: 4,
            title: 'Scalable Decentralization',
            desc: 'Our online banking platform is built with multiple of security to safeguard your information.',
        },
        {
            id: 5,
            title: 'Advanced Data Security',
            desc: 'Our online banking platform is built with multiple of security to safeguard your information.',
        },
        {
            id: 6,
            title: 'Energy-Efficient Processing',
            desc: 'Our online banking platform is built with multiple of security to safeguard your information.',
        },
    ]
    return (
        <div className='flex flex-col gap-10 mt-16 lg:gap-0 lg:flex-row justify-between items-center'>
            <div className="bg-[url('assets/home1/key-features/whatsapp2.svg')] bg-center w-[43rem] ml-60 lg:ml-0 h-auto">
                <img className='w-[43rem] -ml-[5.8rem] mt-16' src={whatsapp1} alt='' />
            </div>
            <div className='flex-1 ml-0 lg:-ml-[12rem] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-x-20 gap-y-9 mt-7 text-left font-dmsans tracking-wide'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <img src={featureIcon} alt=''/>
                            <h3 className='my-3 font-montserratBold font-[600] text-white text-base leading-[26px]'>{item.title}</h3>
                            <p className='font-inter font-light text-[#B3B3B3] text-base leading-[26px]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default KeyFeatures
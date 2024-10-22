import whatsapp1 from '../../../assets/home1/key-features/whatsapp1.svg'
import featureIcon from '../../../assets/home1/feature.svg'

const KeyFeatures = () => {
    const data = [
        {
            id: 1,
            title: 'Heterogeneous Computing Power',
            desc: 'Dual-processor architecture enhances real-time AI and multi-tasking performance for edge applications.',
        },
        {
            id: 2,
            title: 'AI-Enhanced Efficiency',
            desc: 'Accelerate AI inference and optimize data workflows with a robust infrastructure that enhances speed and intelligence across multiple applications.',
        },
        {
            id: 3,
            title: 'Edge-Optimized Performance',
            desc: 'ZenHive processes data at the source, reducing delays and enabling real-time responses, perfect for applications like IoT and autonomous systems.',
        },
        {
            id: 4,
            title: 'Scalable Decentralization',
            desc: 'ZenHive’s decentralized architecture scales effortlessly to handle growing workloads and data storage needs, adapting as your operations expand.',
        },
        {
            id: 5,
            title: 'Advanced Data Security',
            desc: 'Local data processing reduces transmission risks, ensuring sensitive information stays protected with enhanced security and minimized vulnerabilities.',
        },
        {
            id: 6,
            title: 'Energy-Efficient Processing',
            desc: 'ZenHive operates sustainably by efficiently processing data to lower energy consumption, reduce network strain, and minimize bandwidth usage.',
        },
    ]
    return (
        <div className='flex flex-col gap-10 mt-16 lg:gap-0 lg:flex-row justify-between items-start'>
            <div className="bg-[url('assets/home1/key-features/whatsapp2.svg')]  bg-center w-[40rem] h-auto">
                <img className='w-[40rem] -ml-[4.5rem] mt-4' src={whatsapp1} alt='' />
            </div>
            <div className='flex-1 -ml-40 w-full grid grid-cols-2 grid-rows-3 gap-4 mt-7 text-left font-dmsans tracking-wide'>
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
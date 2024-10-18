import iphonex from '../../../assets/hero/iphonex.png'

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
        <div className='flex flex-col gap-10 lg:gap-20 lg:flex-row justify-between items-end'>
            <div className='flex-1 w-full lg:w-[66%] flex flex-col gap-12 justify-between items-start mt-7 text-left font-dmsans tracking-wide'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <h3 className='font-[600] text-black text-base leading-[26px]'>{item.title}</h3>
                            <p className='font-light text-black text-base leading-[26px]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
            <div className='w-[20rem] lg:w-[28rem] h-auto'>
                <img className='w-full' src={iphonex} alt=''/>
            </div>
            
        </div>

    )
}

export default KeyFeatures
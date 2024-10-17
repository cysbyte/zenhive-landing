import React from 'react'
import iphonex from '../../assets/hero/iphonex.png'

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
            title: 'Energy-Efficient Processing',
            desc: 'ZenHive operates sustainably by efficiently processing data to lower energy consumption, reduce network strain, and minimize bandwidth usage.',
        },
        {
            id: 6,
            title: 'Heterogeneous Computing Power',
            desc: 'Dual-processor architecture enhances real-time AI and multi-tasking performance for edge applications',
        },
    ]
    return (
        <div className='flex justify-between items-end'>
            <div className='flex-1 w-[60%] flex flex-col gap-10 justify-between items-start mt-7 text-left font-dmsans'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <h3 className='font-bold text-black text-base leading-[26px]'>{item.title}</h3>
                            <p className='font-light text-black text-base leading-[26px]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
            <img className='flex-1 w-[40%]' src={iphonex} alt=''/>
        </div>

    )
}

export default KeyFeatures
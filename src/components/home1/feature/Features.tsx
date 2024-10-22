import featureIcon from '../../../assets/home1/feature.svg'

const Features = () => {

    const data = [
        {
            id: 1,
            title: 'Entertainment',
            desc: 'Enables direct-to-consumer content delivery by bypassing traditional channels. It enables geo-targeted promotions and tokenized experiences, allowing creators to engage directly with fans through NFTs and interactive content.'
        },
        {
            id: 2,
            title: 'Gaming',
            desc: 'Accelerates distribution with game launchpad to promote discovery through tokens and tracking user engagement. It integrates NFTs to ensure decentralized ownership of in-game assets, creating new economic models for the gaming industry.'
        },
        {
            id: 3,
            title: 'eCommerce',
            desc: 'Empowers merchants with real-time consumer data analytics for personalized marketing. Its location-based services optimize targeted ads, improve customer engagement, and provide insights that boost conversions.'
        },
    ]
  return (
    <div className='flex flex-col gap-10 lg:gap-[1.4rem] lg:flex-row w-full justify-between items-center mt-11'>
        {
            data.map((item)=>(
                <div key={item.id} className='flex-1 min-w-[384px]  p-8 w-full border-[1px] border-[#4AFF86AF] rounded-2xl'>
                    <img src={featureIcon} alt=''/>
                    <h5 className='text-left font-montserratBold font-[600] text-[22px] leading-[32px] text-[#FFFFFF] my-5'>{item.title}</h5>
                    <p className='text-left font-inter font-[300] text-[16px] leading-[26px] text-[#FFFFFF] opacity-60 tracking-wider'>{item.desc}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Features
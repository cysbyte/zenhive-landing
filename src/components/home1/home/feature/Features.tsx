import { faBullseye, faCrop, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {

    const getIcon = (name: string)=>{
        if(name === 'fa-bullseys')
            return faBullseye
        if(name==='fa-crop')
            return faCrop
        if(name ==='fa-diamond')
            return faDiamond
        return faBullseye
    }

    const data = [
        {
            id: 1,
            icon: 'fa-bullseye',
            title: 'Entertainment',
            desc: 'Enables direct-to-consumer content delivery by bypassing traditional channels. It enables geo-targeted promotions and tokenized experiences, allowing creators to engage directly with fans through NFTs and interactive content.'
        },
        {
            id: 2,
            icon: 'fa-crop',
            title: 'Gaming',
            desc: 'Accelerates distribution with game launchpad to promote discovery through tokens and tracking user engagement. It integrates NFTs to ensure decentralized ownership of in-game assets, creating new economic models for the gaming industry.'
        },
        {
            id: 3,
            icon: 'fa-diamond',
            title: 'eCommerce',
            desc: 'Empowers merchants with real-time consumer data analytics for personalized marketing. Its location-based services optimize targeted ads, improve customer engagement, and provide insights that boost conversions.'
        },
    ]
  return (
    <div className='flex flex-col gap-10 lg:gap-[2rem] lg:flex-row w-full justify-between items-center mt-11'>
        {
            data.map((item)=>(
                <div key={item.id} className='flex-1 w-full'>
                    <FontAwesomeIcon icon={getIcon(item.icon)} className='text-[#EBEAED] text-[35px] leading-[38px]'/>
                    <h5 className='font-dmsans font-[500] text-[22px] leading-[32px] text-[#1E0E62] my-5'>{item.title}</h5>
                    <p className='font-dmsans font-[300] text-[16px] leading-[26px] text-[#15143966] tracking-wider'>{item.desc}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Features
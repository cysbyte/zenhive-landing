
import featureIcon from '../../../assets/home1/feature.svg'

const JoinDepin = () => {
    const data = [
        {
            id: 1,
            title: 'Become A Operator',
            desc: 'Own and run a full ZenHive device, and earn more by actively managing it. Operators get higher rewards for keeping the device online and contributing to the network.'
        },
        {
            id: 2,
            title: 'Become A Delegator',
            desc: 'Gain passive earnings by purchasing fractional ownership via NFT or staking tokens. No need to manage a device—Operators handle the work.'
        },
    ]
    return (
        <div className="w-full mt-7 md:mt-0 flex flex-row justify-start gap-7">
            {
                data.map((item) => (
                    <div className='mt-10 border-[1px] border-[#262626] px-12 rounded-[14px] text-start' key={item.id}>
                        <div className='flex w-full justify-between items-center border-[#262626] border-b py-4'>
                            <h3 className='font-montserrat font-[450] text-white text-[18px] md:text-[22px] leading-[32px] tracking-wider'>{item.title}</h3>
                            <img src={featureIcon} alt='' />
                        </div>
                        <p className='font-montserrat py-10 font-[400] text-[#B3B3B3] text-[18px] md:text-[20px] leading-[32px] tracking-wider'>{item.desc}
                        </p>
                    </div>
                ))
            }

        </div>
    )
}

export default JoinDepin
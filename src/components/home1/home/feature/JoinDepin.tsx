
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
        <div className="w-full mt-7 md:mt-14 flex flex-col justify-start gap-7">
            {
                data.map((item) => (
                    <div className='mt-10' key={item.id}>
                        <h3 className='font-dmsans font-[450] text-[#151439] text-[18px] md:text-[22px] leading-[32px] tracking-wider'>{item.title}</h3>
                        <p className='font-dmsans font-[450] text-[#15143966] text-[18px] md:text-[22px] leading-[32px] tracking-wider'>{item.desc}
                        </p>
                    </div>
                ))
            }

        </div>
    )
}

export default JoinDepin
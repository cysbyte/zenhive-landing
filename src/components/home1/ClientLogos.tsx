import { useEffect, useRef, useState } from 'react';
import logo1 from '../../assets/client-logos/logo1.svg';
import logo2 from '../../assets/client-logos/logo2.svg';
import logo3 from '../../assets/client-logos/logo3.svg';
import logo4 from '../../assets/client-logos/logo4.svg';
import logo5 from '../../assets/client-logos/logo5.svg';
import logo6 from '../../assets/client-logos/logo6.svg';
import './ClientLogos.css'

const ClientLogos = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  // Detect if the container has horizontal overflow
  useEffect(() => {
    updateHasOverflow()
  }, []);

  const updateHasOverflow = () => {
    const container = containerRef.current;
    if (container) {
      const isOverflowing = container.scrollWidth > container.clientWidth;
      setHasOverflow(isOverflowing)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      updateHasOverflow()
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logos = [
    {
      id: 1,
      src: logo1
    },
    {
      id: 2,
      src: logo2
    },
    {
      id: 3,
      src: logo3
    },
    {
      id: 4,
      src: logo4
    },
    {
      id: 5,
      src: logo5
    },
    {
      id: 6,
      src: logo6
    },
  ]

  return (
    <div className={`mask-gradient whitespace-nowrap overflow-hidden w-full ${hasOverflow ? 'border-b border-t p-0 m-2 hide-scrollbar': ''}`}>
        <div ref={containerRef} className={`mx-auto flex items-center justify-center border-t border-b border-gray-900 w-[100%] md:w-[80%] py-10 gap-6 my-3 px-20 ${hasOverflow ? '   border-hidden' : ''} whitespace-normal`}
        >
          {
            logos.map((item)=>(
              <img key={item.id} className={`${hasOverflow ? 'animate-img' : ''} `} src={item.src} alt=''/>
            ))
          }
        </div>

    </div>
  )
}

export default ClientLogos
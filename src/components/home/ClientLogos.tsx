import { useEffect, useRef, useState } from 'react';
import logo1 from '../../assets/client-logos/logo1.svg';
import logo2 from '../../assets/client-logos/logo2.svg';
import logo3 from '../../assets/client-logos/logo3.svg';
import logo4 from '../../assets/client-logos/logo4.svg';
import logo5 from '../../assets/client-logos/logo5.svg';
import logo6 from '../../assets/client-logos/logo6.svg';


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

  return (
    <div className={`mask-gradient p-2 whitespace-nowrap overflow-auto w-full  ${hasOverflow ? 'border-b border-t p-0 m-2': ''}`}>
        <div ref={containerRef} className={`mx-auto flex items-center justify-center border-t border-b w-[100%] md:w-[80%] py-10 gap-6 my-3 px-20 ${hasOverflow ? 'logo-list border-hidden' : ''} whitespace-normal`}
        >
          <img src={logo1} alt='' />
          <img src={logo2} alt='' />
          <img src={logo3} alt='' />
          <img src={logo4} alt='' />
          <img src={logo5} alt='' />
          <img src={logo6} alt='' />
        </div>

    </div>
  )
}

export default ClientLogos
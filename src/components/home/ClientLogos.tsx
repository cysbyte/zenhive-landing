import logo1 from '../../assets/client-logos/logo1.svg'
import logo2 from '../../assets/client-logos/logo2.svg'
import logo3 from '../../assets/client-logos/logo3.svg'
import logo4 from '../../assets/client-logos/logo4.svg'
import logo5 from '../../assets/client-logos/logo5.svg'
import logo6 from '../../assets/client-logos/logo6.svg'
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ClientLogos = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setIsOverflowing(container.scrollWidth > container.clientWidth);

      if (container.scrollWidth > container.clientWidth) {
        controls.start({
          x: [-container.scrollWidth, 0],
          transition: {
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          },
        });
      } else {
        controls.stop();
      }
    }
  }, [controls]);

  return (
    <div className="overflow-hidden whitespace-nowrap border-t border-b">
    <motion.div className='mx-auto flex items-center justify-between w-[100%] md:w-[80%] py-9 gap-6 my-3 px-20  whitespace-normal'
      ref={containerRef}
      initial={{ x: 0 }}
      animate={{ x: containerRef.current?.scrollWidth! }}
      transition={{
        ease: "linear",
        duration: 20,
        repeat: Infinity, 
      }}>
      <img src={logo1} alt='' />
      <img src={logo2} alt='' />
      <img src={logo3} alt='' />
      <img src={logo4} alt='' />
      <img src={logo5} alt='' />
      <img src={logo6} alt='' />
    </motion.div>
    </div>
  )
}

export default ClientLogos
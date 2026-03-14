import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const logos = [
    { name: 'Wordpress', color: 'text-black' },
    { name: 'CartsFlows', color: 'text-black' },
    { name: 'Elementor Pro', color: 'text-black' },
    { name: 'ShopBuilder', color: 'text-black' },
    { name: 'Royal Elementor', color: 'text-black' },
    { name: 'Unlimeted Elementor', color: 'text-black' },
  ];

  // Duplicate the array → creates seamless loop illusion
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-orange-500 py-10 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 md:gap-16 lg:gap-24"
          animate={{ x: ['0%', '-50%'] }}           // moves left by half (because duplicated)
          transition={{
            duration: 20,                           // adjust speed (higher = slower)
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`}
              className={`text-2xl md:text-3xl font-black tracking-tighter uppercase italic ${logo.color} opacity-90`}
            >
              {logo.name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustBar;
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- TYPES ---
interface Logo {
  name: string;
  color: string;
}

const TrustBar: React.FC = () => {
  const logos: Logo[] = [
    { name: 'Wordpress', color: 'text-black' },
    { name: 'CartFlows', color: 'text-black' },
    { name: 'Elementor Pro', color: 'text-black' },
    { name: 'ShopBuilder', color: 'text-black' },
    { name: 'Royal Elementor', color: 'text-black' },
    { name: 'Unlimited Elementor', color: 'text-black' },
  ];

  // Duplicate the array to create the seamless loop illusion
  const duplicatedLogos: Logo[] = [...logos, ...logos];

  return (
    <div className="bg-orange-500 py-10 overflow-hidden select-none">
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 md:gap-16 lg:gap-24 pr-12 md:pr-16 lg:pr-24"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25, // Slightly slowed down for better readability
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`}
              className={`text-2xl md:text-4xl font-black tracking-tighter uppercase italic ${logo.color} opacity-90 hover:opacity-100 transition-opacity cursor-default`}
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
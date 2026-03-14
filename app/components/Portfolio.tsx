'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Zap } from 'lucide-react';

// --- TYPES ---
interface Project {
  id: string; // Added ID for dynamic routing
  img: string;
  name: string;
  category: string;
}

// --- ANIMATION VARIANTS ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const imageVariants: Variants = {
  rest: { y: "0%" },
  hover: {
    y: "-70%",
    transition: {
      duration: 5,
      ease: "linear"
    }
  }
};

const overlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: "ecommerce-growth", // This must match the folder ID logic
      img: "/projects/1.jpeg", // Ensure path starts with / for public folder
      name: "E-commerce Growth",
      category: "Web Design / Paid Ads"
    },
    {
      id: "saas-landing",
      img: "/projects/2.jpeg",
      name: "SaaS Landing Page",
      category: "UI/UX / Branding"
    },
    {
      id: "brand-identity",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      name: "Brand Identity",
      category: "Branding / Strategy"
    }
  ];

  return (
    <section id="portfolio" className="relative z-0 py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase text-xs tracking-widest mb-4 flex justify-center items-center gap-2">
            <Zap className="w-4 h-4" /> Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">latest</span> work
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link key={i} href={`/project/${project.id}`}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 h-[500px] cursor-pointer"
              >
                {/* Image Window */}
                <div className="w-full h-full overflow-hidden relative">
                  <motion.img
                    variants={imageVariants}
                    src={project.img}
                    alt={project.name}
                    className="w-full h-auto min-h-full object-cover"
                  />
                </div>

                {/* Hover Overlay */}
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8"
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                    <p className="text-orange-400 text-sm font-medium">{project.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
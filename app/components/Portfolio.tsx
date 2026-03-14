'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

// --- TYPES ---
interface ProjectContent {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  images: string[];
  liveUrl?: string;
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

/**
 * Scrolling effect for long website screenshots
 */
const imageVariants: Variants = {
  rest: { y: "0%" },
  hover: {
    y: "-65%", // If your images are very long, increase this to -75% or -80%
    transition: {
      duration: 4,
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
  const allProjects: ProjectContent[] = [
    {
      id: "ecommerce-growth",
      title: "E-commerce Growth",
      category: "Web Design / Paid Ads",
      client: "Nexus Fashion",
      date: "Oct 2025",
      description: "A comprehensive digital overhaul focused on conversion.",
      challenge: "High bounce rate on mobile devices.",
      solution: "Mobile-first UI with streamlined checkout.",
      tags: ["Wordpress", "CartFlows"],
      images: ["/growthpowder/1.jpeg"],
      liveUrl: "https://example.com"
    },
    {
      id: "cloth-website", // Changed space to hyphen for URL consistency
      title: "Cloth Website",
      category: "Web Design / Paid Ads",
      client: "Nexus Fashion",
      date: "Oct 2025",
      description: "A comprehensive digital overhaul focused on conversion.",
      challenge: "High bounce rate on mobile devices.",
      solution: "Mobile-first UI with streamlined checkout.",
      tags: ["Wordpress", "Elementor Pro"],
      images: ["/estore/1.jpeg", "/estore/2.jpeg", "/estore/3.jpeg",
        "/estore/4.jpeg", "/estore/5.jpeg", "/estore/6.jpeg",
        "/estore/7.jpeg", "/estore/8.jpeg", "/estore/9.jpeg",
        "/estore/10.jpeg", "/estore/11.jpeg", "/estore/12.jpeg",
        "/estore/13.jpeg", "/estore/14.jpeg", "/estore/15.jpeg"], // Uses the first image as the preview
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="portfolio" className="relative z-0 py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase text-xs tracking-widest mb-4 flex justify-center items-center gap-2">
            <Zap className="w-4 h-4 fill-current" /> Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase">
            Our <span className="text-orange-500">latest</span> work
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`} className="block group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden border border-gray-800 bg-gray-900 h-[500px] cursor-pointer"
              >
                {/* Image Window (Screenshot Scroll Effect) */}
                <div className="w-full h-full overflow-hidden relative bg-gray-900">
                  <motion.img
                    variants={imageVariants}
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-auto min-h-full object-cover origin-top"
                  />
                </div>

                {/* Hover Overlay - Info appears on hover */}
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-8"
                >
                  <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight italic uppercase">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase">
                            {project.category}
                          </p>
                          <div className="w-8 h-[1px] bg-gray-600" />
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">View Case</span>
                        </div>
                      </div>

                      {/* Floating Arrow Icon */}
                      <div className="bg-orange-500 p-3 rounded-full text-black -translate-y-2 opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500 rounded-[2rem] pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
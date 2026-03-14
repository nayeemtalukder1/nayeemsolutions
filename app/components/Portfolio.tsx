import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const imageVariants = {
  rest: {
    scale: 1.05,
    y: 0
  },
  hover: {
    scale: 1.12,
    y: -35,           // ← image moves UP on hover
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Portfolio = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      name: "E-commerce Growth Campaign",
      category: "Web Design / Paid Ads"
    },
    {
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      name: "SaaS Landing Page Redesign",
      category: "UI/UX / Branding"
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      name: "Brand Identity Refresh",
      category: "Branding / Strategy"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase text-xs tracking-widest mb-4 flex justify-center items-center gap-2">
            <Zap className="w-4 h-4" /> Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">latest</span> work
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              className="group relative rounded-3xl overflow-hidden border border-gray-800 shadow-xl shadow-black/30"
            >
              {/* Longer image container – taller aspect ratio */}
              <div className="aspect-[3/4] md:aspect-[4/6] overflow-hidden bg-gray-900">
                <motion.img
                  variants={imageVariants}
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay that appears on hover */}
              <motion.div
                variants={overlayVariants}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 md:p-8"
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-orange-400 text-sm md:text-base font-medium">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
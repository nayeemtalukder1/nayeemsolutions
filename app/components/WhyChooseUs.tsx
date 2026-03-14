'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

// --- TYPES ---
interface Reason {
  title: string;
  desc: string;
}

// --- ANIMATION VARIANTS ---
// Typing these as 'Variants' provides better autocomplete and safety
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const WhyChooseUs: React.FC = () => {
  // Explicitly typing the array of objects
  const reasons: Reason[] = [
    {
      title: "Professional & Modern Website",
      desc: "I create clean, modern, and user-friendly WordPress websites that represent your brand professionally."
    },
    {
      title: "Fully Responsive Design",
      desc: "Your website will look perfect on desktop, tablet, and mobile devices."
    },
    {
      title: "SEO Friendly Structure",
      desc: "I build websites with SEO best practices so your site can rank better on search engines."
    },
    {
      title: "Fast & Secure Website",
      desc: "I optimize websites for speed, performance, and security."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <p className="text-orange-500 font-semibold uppercase text-xs tracking-widest mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="text-orange-500">Businesses</span> Choose Nayeem
            </h2>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-colors text-sm font-bold"
          >
            GET IN TOUCH
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          {/* Left column */}
          <motion.div variants={staggerContainer} className="space-y-12 order-2 md:order-1">
            {reasons.slice(0, 2).map((reason, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center md:text-right"
              >
                <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center image with floating icons */}
          <motion.div
            variants={scaleIn}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-[4/5] rounded-full overflow-hidden border-4 border-gray-800 p-4 shadow-2xl shadow-black/40 bg-gray-900">
              <img
                src="nayeem.png"
                alt="Professional team member"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating icons with animation */}
            <motion.div
              className="absolute top-0 left-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shadow-lg"
              animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Target className="w-5 h-5 text-orange-500" />
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shadow-lg"
              animate={{ y: [0, 12, 0], rotate: [0, -4, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div variants={staggerContainer} className="space-y-12 order-3">
            {reasons.slice(2, 4).map((reason, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
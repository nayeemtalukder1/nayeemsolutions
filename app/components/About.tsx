'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Layout, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left - Image + Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl shadow-black/60 relative">
            <img
              src="/nayeem.png"
              alt="Nayeem - WordPress Developer"
              className="w-full h-full object-cover brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
            {/* Subtle neon overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/5" />
          </div>

          {/* Experience Badge - neon style */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute -bottom-8 -right-6 md:-bottom-10 md:-right-10 bg-gradient-to-br from-orange-600 to-orange-400 p-6 md:p-8 rounded-2xl shadow-xl shadow-orange-900/40 border border-orange-300/30 backdrop-blur-sm"
          >
            <p className="text-4xl md:text-5xl font-black tracking-tight text-white">2+</p>
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-white/90 mt-1">
              Years of experience in<br />web design
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[3px] bg-orange-500 rounded-full" />
            <p className="text-orange-500 font-semibold uppercase text-sm tracking-widest">
              Wordpress web design and development – Mymensingh & Bangladesh
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            I am a <span className="text-orange-500">Wordpress Developer</span>
          </h2>

          {/* Quote block with subtle border glow */}
          <div className="bg-gray-900/60 border-l-4 border-orange-500/80 p-6 md:p-8 rounded-r-xl backdrop-blur-sm">
            <p className="italic text-gray-200 text-lg leading-relaxed">
              I build high quality Wordpress websites that are not only visually stunning but also optimized for performance and conversions.
            </p>
          </div>

          {/* Buttons - Contact + Download CV */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 text-white font-bold text-lg"
            >
              CONTACT US
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center group-hover:translate-x-3 transition-transform duration-300 shadow-lg shadow-orange-900/40">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.button>

            <motion.a
              href="/portfolio.pdf" // Update with your actual path
              download="portfolio.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-900/40"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD CV
            </motion.a>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-8 md:pt-12">
            <div className="text-center md:text-left">
              <Layout className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto md:mx-0 mb-4" />
              <p className="text-sm md:text-base font-semibold">Well Structure web design</p>
            </div>
            <div className="text-center md:text-left">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto md:mx-0 mb-4" />
              <p className="text-sm md:text-base font-semibold">Work with multiple clients</p>
            </div>
            <div className="text-center md:text-left">
              <Globe className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto md:mx-0 mb-4" />
              <p className="text-sm md:text-base font-semibold">Global Reach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
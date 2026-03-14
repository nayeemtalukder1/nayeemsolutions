'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Phone
} from 'lucide-react';

const Footer: React.FC = () => {
  // TypeScript correctly infers 'number' for the year
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-gray-400 font-bold uppercase tracking-widest mb-4">
            LET'S COLLABORATE
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter leading-tight">
            Ready For
            <span className="text-orange-500"> Growth?</span>
          </h2>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center mx-auto group cursor-pointer border-none outline-none"
          >
            <div className="text-center">
              <ArrowRight className="w-8 h-8 mx-auto mb-1 group-hover:translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                GET IN TOUCH
              </span>
            </div>
          </motion.a>

          <p className="text-gray-500 mt-12 text-sm max-w-xl mx-auto leading-relaxed">
            Let's talk about your business goals and how we can build a
            powerful website that helps you grow online.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-24"
        >

          {/* Brand & Newsletter */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>

              <span className="text-2xl font-bold tracking-tighter">
                Nayeem<span className="text-orange-500">Solutions</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Get updates, tips, and insights about web development and digital growth.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-gray-900 border border-gray-800 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-orange-500 transition-colors">Why Choose Me</a></li>
              <li><a href="#testimonial" className="hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Business Website</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">WooCommerce Store</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Landing Page</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Portfolio Website</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span>Mymensingh, Bangladesh</span>
            </div>

            <a
              href="https://wa.me/8801969148410"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm text-gray-400 hover:text-orange-500 transition-colors group"
            >
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>+08801969-148410</span>
            </a>

            <a
              href="mailto:nayeemtalukder882@gmail.com"
              className="flex items-center gap-4 text-sm text-gray-400 hover:text-orange-500 transition-colors group"
            >
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="truncate">nayeemtalukder882@gmail.com</span>
            </a>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-900 gap-6"
        >
          <p className="text-gray-500 text-xs">
            © {year} NayeemSolutions. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585754731210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/nayeemtalukder882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
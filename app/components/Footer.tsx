"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, MapPin, Mail } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

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
            Ready For <br />
            <span className="text-orange-500">Growth?</span>
          </h2>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center mx-auto group cursor-pointer"
          >
            <div className="text-center">
              <ArrowRight className="w-8 h-8 mx-auto mb-1 group-hover:translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase">
                GET IN TOUCH
              </span>
            </div>
          </motion.a>

          <p className="text-gray-500 mt-12 text-sm max-w-xl mx-auto">
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

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>

              <span className="text-2xl font-bold tracking-tighter">
                Nayeem<span className="text-orange-500">Solutions</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-8">
              Get updates, tips, and insights about web development and digital growth.
            </p>

            {/* Newsletter */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-gray-900 border border-gray-800 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-orange-500"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#why-us" className="hover:text-orange-500 transition">
                  Why Choose Me
                </a>
              </li>

              <li>
                <a href="#testimonial" className="hover:text-orange-500 transition">
                  Testimonials
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Business Website
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  WooCommerce Store
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Landing Page
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Portfolio Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Mymensingh, Bangladesh</span>
            </div>

            <a
              href="mailto:info@nayeemsolutions.com"
              className="flex items-center gap-4 text-sm text-gray-400 hover:text-orange-500 transition"
            >
              <Mail className="w-5 h-5 text-orange-500" />
              <span>nayeemtalukder882@gmail.com</span>
            </a>

          </div>

        </motion.div>

        {/* Bottom */}
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

          {/* Social */}
          <div className="flex items-center gap-6">

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-orange-500 transition"
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
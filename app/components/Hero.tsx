import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Layout,
  Globe,
  TrendingUp,
  ShoppingCart,
  Target,
  Zap,
  Users,
  Award,
  Search,
  MessageSquare,
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
        >
          <source
            src="/herovideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Content container – only one */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Wordpress website design & development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6 md:space-y-8"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            UNLOCK YOUR{' '}
            <span className="text-orange-500 inline-block">BUSINESS'S</span>{' '}
            <br className="sm:hidden" />
            TRUE POTENTIAL
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We Build High-Converting Brands, Websites, and Digital Strategies
            Engineered to Scale Your Business.
          </p>

          <div className="pt-6 md:pt-10">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="group inline-flex items-center gap-3 bg-transparent border-2 border-orange-500/70 hover:border-orange-500 text-white hover:text-orange-500 font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-orange-500/10 mx-auto"
            >
              <span className="relative">
                BOOK YOUR FREE GROWTH SESSION
              </span>
              <div className="bg-orange-500 text-white p-3 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
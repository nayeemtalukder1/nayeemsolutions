import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // corrected import (assuming you meant framer-motion)
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
  MessageSquare
} from 'lucide-react';

// Define type for navigation links
interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonial', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 font-roboto">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter italic">
              Nayeem<span className="text-orange-500 italic">Solutions</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-4 ml-4">
              <a href='https://wa.me/8801969148410' target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61585754731210' target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href='https://www.linkedin.com/in/nayeem-talukder-9a1b4b1b7/' target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              {/* <a href='https://www.instagram.com/nayeem_talukder/' target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </a> */}


              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-orange-500 transition-colors cursor-pointer">
                <Menu className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-black border-t border-gray-800 p-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-orange-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
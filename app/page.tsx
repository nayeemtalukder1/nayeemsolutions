/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// --- Components ---






















export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

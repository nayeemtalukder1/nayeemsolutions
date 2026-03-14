/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
"use client";

import React from 'react';
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

/**
 * Main Entry Point for NayeemSolutions Portfolio
 * * Note: Ensure all component files (.tsx) are inside the /components folder
 * and exported as default.
 */
const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation Layer */}

      <Navbar />
      {/* Main Content Sections */}
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
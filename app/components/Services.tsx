// components/Services.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion'; // corrected import (framer-motion, not motion/react)
import {
  ArrowRight,
  Target,
  Globe,
  TrendingUp,
  ShoppingCart,
} from 'lucide-react';

// Define type for each service item
interface Service {
  title: string;
  desc: string;
  items: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Business & Corporate Website Development",
    desc: "I will design and develop a professional Business or Corporate WordPress website that represents your brand, builds trust, and helps you attract more clients.",
    items: [
      "Home",
      "About Us",
      "Services",
      "Portfolio / Projects",
      "Blog",
      "Contact Page",
    ],
    icon: <Target className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "WooCommerce / E-commerce Store Development",
    desc: "I will create a professional WooCommerce / E-commerce store using WordPress that helps you sell products online easily and grow your business.",
    items: [
      "Product Pages",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration (Card / Online Payment)",
      "Coupon & Discount System",
      "Inventory Management",
      "Shipping Setup",
      "Customer Accounts",
    ],
    icon: <Globe className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Landing Page (Leads & Sales)",
    desc: "I will design a high-converting WordPress landing page that helps you generate leads, increase sales, and grow your business. The landing page will be optimized for user engagement, fast loading, and conversions.",
    items: [
      "Hero Section (Headline & CTA)",
      "About / Value Proposition",
      "Services or Product Details",
      "Benefits & Features",
      "Testimonials / Reviews",
      "Lead Capture Form",
      "Call-to-Action",
      "Contact Section"
    ],
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Portfolio & Personal Website",
    desc: "I will design and develop a professional Portfolio or Personal WordPress website that showcases your skills, projects, and achievements in a modern and engaging way.",
    items: [
      "Home Page",
      "About Me",
      "Portfolio / Projects",
      "Services",
      "Blog (Optional)",
      "Contact Page"
    ],
    icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 md:gap-0">
          <div>
            <p className="text-orange-500 font-semibold uppercase text-xs tracking-widest mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              How I Can <span className="text-orange-500">Help</span>
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-colors text-sm font-bold whitespace-nowrap">
            GET IN TOUCH
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-900/40 border border-gray-800 p-8 md:p-10 rounded-3xl hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="flex gap-6">
                <div className="shrink-0 mt-1">{service.icon}</div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="text-orange-500 font-bold text-xs tracking-widest uppercase flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                    GET SERVICE
                    <span className="w-8 h-[1px] bg-orange-500 group-hover:w-12 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
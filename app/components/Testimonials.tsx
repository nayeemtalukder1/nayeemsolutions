// components/Testimonials.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, ArrowRight } from 'lucide-react';

// Type for testimonial
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Nayeem was an amazing experience. He built our WordPress website exactly as we wanted. The design is modern, fast, and fully responsive. Highly recommended for anyone looking for a professional developer.",
    author: "Laura S.",
    role: "CEO",
    company: "MarketBoost",
    rating: 5,
  },
  {
    quote:
      "Nayeem developed our WooCommerce store and the result was outstanding. The website loads quickly, looks beautiful on mobile, and increased our online sales. I will definitely work with him again.",
    author: "Rahim Khan",
    role: "Founder",
    company: "TechVision BD",
    rating: 5,
  },
  {
    quote:
      "Very professional and skilled WordPress developer. Nayeem delivered the project on time and added many improvements we didn’t even think about. Communication was smooth throughout the project.",
    author: "Sofia Ahmed",
    role: "E-commerce Manager",
    company: "StyleHub",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-orange-500 font-semibold uppercase text-xs md:text-sm tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Real Results, <span className="text-orange-500">Real Clients</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed">
            Our proven, step-by-step process is designed to elevate your brand through powerful web solutions and digital strategies.
          </p>
        </div>

        {/* Testimonials Grid / Carousel-ready structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative bg-gray-900/60 border border-gray-800/70 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-orange-500/40 transition-all duration-400 shadow-xl shadow-black/40"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare className="w-16 h-16 md:w-20 md:h-20" />
              </div>

              {/* Stars */}
              <div className="flex mb-6">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-orange-500 fill-orange-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/20 flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA after testimonials */}
        <div className="text-center mt-16 md:mt-20">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:brightness-110 text-white font-bold px-8 py-5 rounded-full shadow-lg shadow-orange-900/30 transition-all duration-300"
          >
            Ready to see results like these?
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
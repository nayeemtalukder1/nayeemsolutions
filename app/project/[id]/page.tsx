'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams for Next.js
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Calendar, Tag, User } from 'lucide-react';

// --- TYPES ---
interface ProjectContent {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  images: string[];
  liveUrl?: string;
}

// --- SAMPLE DATA (Usually moved to a separate file like data.ts) ---
const allProjects: ProjectContent[] = [
  {
    id: "ecommerce-growth",
    title: "E-commerce Growth",
    category: "Web Design / Paid Ads",
    client: "Nexus Fashion",
    date: "Oct 2025",
    description: "A comprehensive digital overhaul focused on conversion.",
    challenge: "High bounce rate on mobile devices.",
    solution: "Mobile-first UI with streamlined checkout.",
    tags: ["Wordpress", "CartFlows"],
    images: ["/growthpowder/1.jpeg"],
    liveUrl: "https://example.com"
  },
  {
    id: "cloth-website", // Changed space to hyphen for URL consistency
    title: "Cloth Website",
    category: "Web Design / Paid Ads",
    client: "Nexus Fashion",
    date: "Oct 2025",
    description: "A comprehensive digital overhaul focused on conversion.",
    challenge: "High bounce rate on mobile devices.",
    solution: "Mobile-first UI with streamlined checkout.",
    tags: ["Wordpress", "Elementor Pro"],
    images: ["/estore/1.jpeg", "/estore/2.jpeg", "/estore/3.jpeg",
      "/estore/4.jpeg", "/estore/5.jpeg", "/estore/6.jpeg",
      "/estore/7.jpeg", "/estore/8.jpeg", "/estore/9.jpeg",
      "/estore/10.jpeg", "/estore/11.jpeg", "/estore/12.jpeg",
      "/estore/13.jpeg", "/estore/14.jpeg", "/estore/15.jpeg"], // Uses the first image as the preview
    liveUrl: "https://example.com"
  }
];

const ProjectDetails = () => {
  const params = useParams(); // Capture the [id] from the URL
  const id = params.id;

  // Find the specific project that matches the URL ID
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle case where project ID doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-500 mb-12 transition-colors"
        >
          <ChevronLeft size={20} /> Back to Portfolio
        </button>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold mb-12 italic"
        >
          {project.title}
        </motion.h1>

        {/* Gallery Stack */}
        <div className="space-y-12 mb-20">
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-gray-800"
            >
              <img src={img} alt={`${project.title} ${index}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Project Meta Info */}
        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-gray-900">
          <div>
            <p className="text-orange-500 font-bold flex items-center gap-2 mb-2">
              <User size={16} /> Client
            </p>
            <p className="text-xl">{project.client}</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold flex items-center gap-2 mb-2">
              <Tag size={16} /> Category
            </p>
            <p className="text-xl">{project.category}</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold flex items-center gap-2 mb-2">
              <Calendar size={16} /> Date
            </p>
            <p className="text-xl">{project.date}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
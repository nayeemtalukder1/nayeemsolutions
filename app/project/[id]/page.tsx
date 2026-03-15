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
  },
  {
    id: "portfolio-project", // Changed space to hyphen for URL consistency
    title: "Portfolio Project",
    category: "Web Design / Paid Ads",
    client: "Shohanur Rahman",
    date: "Jan 2025",
    description: "A comprehensive digital overhaul focused on conversion.",
    challenge: "High bounce rate on mobile devices.",
    solution: "Mobile-first UI with streamlined checkout.",
    tags: ["Wordpress", "Elementor Pro"],
    images: ["/shohanur/1.jpeg"], // Uses the first image as the preview
    liveUrl: "https://getgoingwithshohan.com"
  }
];

/* ... (existing imports and types) ... */

const ProjectDetails = () => {
  const params = useParams();
  const id = params.id;
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        {/* Header with Live Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold italic"
          >
            {project.title}
          </motion.h1>

          {project.liveUrl && (
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-600 hover:bg-white hover:text-orange-600 px-6 py-3 rounded-full font-bold transition-all duration-300 w-fit h-fit mb-4"
            >
              View Live Project <ExternalLink size={18} />
            </motion.a>
          )}
        </div>

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
        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-gray-900">
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

          {/* Added Live Link in Meta Grid for redundancy */}
          {project.liveUrl && (
            <div>
              <p className="text-orange-500 font-bold flex items-center gap-2 mb-2">
                <ExternalLink size={16} /> Live Link
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-orange-500 transition-colors break-all"
              >
                {project.liveUrl.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;

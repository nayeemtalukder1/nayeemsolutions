import React, { useState } from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");

  const serviceOptions = [
    "Web Development",
    "UI/UX Design",
    "Mobile App",
    "SEO Optimization",
    "Other",
  ];

  const effectiveSubject =
    selectedSubject === "Other" ? customSubject : selectedSubject;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", { subject: effectiveSubject });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-500 font-semibold uppercase text-xs tracking-widest mb-4 flex justify-center items-center gap-2">
            <Zap className="w-4 h-4" /> Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Get in <span className="text-orange-500">touch with</span> us
          </h2>
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#111111] border border-orange-500/20 rounded-2xl p-10 shadow-2xl shadow-orange-500/10 backdrop-blur-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-left">

            <input type="hidden" name="subject" value={effectiveSubject} />

            <div className="grid md:grid-cols-2 gap-6">

              <motion.input
                whileFocus={{ scale: 1.03 }}
                name="name"
                required
                type="text"
                placeholder="Your Name*"
                className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />

              <motion.input
                whileFocus={{ scale: 1.03 }}
                name="email"
                required
                type="email"
                placeholder="Your Email*"
                className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />

            </div>

            <motion.input
              whileFocus={{ scale: 1.03 }}
              name="location"
              required
              type="text"
              placeholder="Your Location*"
              className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />

            <div className="grid md:grid-cols-2 gap-4">

              <motion.input
                whileFocus={{ scale: 1.03 }}
                name="budget"
                required
                type="text"
                placeholder="Budget*"
                className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />

              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
                className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition appearance-none"
              >
                <option value="">Select Subject*</option>

                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}

              </select>
            </div>

            {selectedSubject === "Other" && (
              <motion.input
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                type="text"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder="Specify your custom service*"
                required
                className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />
            )}

            <motion.textarea
              whileFocus={{ scale: 1.03 }}
              name="message"
              required
              placeholder="Your Message*"
              rows={4}
              className="w-full bg-gray-900 border border-orange-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-orange-500 transition"
            />

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg
                hover:text-orange-600 hover:bg-white transition-all duration-300 font-medium shadow-lg shadow-orange-500/30"
              >
                Submit
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </motion.button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
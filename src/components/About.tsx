"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { person, preferredRoles, languages } from "@/data/resume";
import { useState } from "react";

const traits = [
  { icon: "🧠", label: "Deep Technical Ownership", desc: "From architecture to deployment" },
  { icon: "🚀", label: "Prototype to Production", desc: "Full delivery lifecycle" },
  { icon: "🤝", label: "Team Multiplier", desc: "Mentoring & knowledge sharing" },
  { icon: "🔬", label: "R&D Mindset", desc: "New tech, hard problems, fast learning" },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7CFF]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#70A7FF] font-mono text-sm">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#70A7FF]/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo & traits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-[#70A7FF]/20 shadow-2xl shadow-blue-500/10">
                {!imgError ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#111824] to-[#1a2438] flex items-center justify-center">
                    <span className="text-6xl font-black text-gradient-blue select-none">SM</span>
                  </div>
                )}
              </div>
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#70A7FF]/10 to-[#8B7CFF]/10 blur-xl -z-10" />
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-[#70A7FF]/20 transition-colors group"
                >
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <div className="text-sm font-semibold text-white/90 group-hover:text-[#70A7FF] transition-colors">{t.label}</div>
                  <div className="text-xs text-[#5C6B80] mt-1">{t.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio & info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[#9AA7B8] text-lg leading-relaxed">{person.bio}</p>

            {/* Philosophy quote */}
            <blockquote className="relative pl-5 border-l-2 border-[#70A7FF]/50">
              <p className="text-[#9AA7B8] leading-relaxed italic">{person.philosophy}</p>
            </blockquote>

            {/* Preferred roles */}
            <div>
              <h3 className="text-sm font-mono text-[#70A7FF] mb-3">Open to roles like</h3>
              <div className="flex flex-wrap gap-2">
                {preferredRoles.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-lg bg-[#70A7FF]/10 border border-[#70A7FF]/20 text-[#70A7FF] text-xs font-medium"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-mono text-[#52E5E7] mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1.5 rounded-lg bg-[#52E5E7]/10 border border-[#52E5E7]/20 text-[#52E5E7] text-xs font-medium"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="glass rounded-2xl p-5 border border-white/5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#5C6B80] text-sm w-20">Location</span>
                <span className="text-white text-sm font-medium">{person.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#5C6B80] text-sm w-20">Email</span>
                <a href={`mailto:${person.email}`} className="text-[#70A7FF] text-sm font-medium hover:underline">
                  {person.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#5C6B80] text-sm w-20">Status</span>
                <span className="flex items-center gap-2 text-[#5EE6A8] text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EE6A8] animate-pulse" />
                  {person.availability}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#5C6B80] text-sm w-20">Portfolio</span>
                <a href={person.portfolio} target="_blank" rel="noopener noreferrer" className="text-[#70A7FF] text-sm font-medium hover:underline">
                  universeinvedors.tech
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

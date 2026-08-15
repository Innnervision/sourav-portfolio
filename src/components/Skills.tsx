"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#52E5E7]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#52E5E7] font-mono text-sm">02.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#52E5E7]/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-opacity-40 transition-all duration-300 card-hover"
              style={{ "--accent": skill.color } as React.CSSProperties}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
              />

              <div className="p-5">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}60` }}
                  />
                  <h3 className="font-bold text-white text-sm">{skill.category}</h3>
                </div>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-default"
                      style={{
                        backgroundColor: `${skill.color}12`,
                        color: skill.color,
                        border: `1px solid ${skill.color}25`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px ${skill.color}08` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

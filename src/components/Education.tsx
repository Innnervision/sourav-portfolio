"use client";

import { motion } from "framer-motion";
import { education } from "@/data/resume";

const icons: Record<string, string> = {
  "Master of Computer Applications (MCA)": "��",
  "Bachelor of Computer Applications (BCA)": "📚",
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F0B429]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#F0B429] font-mono text-sm">05.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#F0B429]/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all card-hover relative overflow-hidden"
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
              />

              {/* Icon */}
              <div className="text-4xl mb-4">{icons[edu.degree] || "🎓"}</div>

              {/* Degree */}
              <h3
                className="font-bold text-base leading-tight mb-2 group-hover:opacity-90 transition-opacity"
                style={{ color: edu.color }}
              >
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-white/80 text-sm font-medium mb-2">{edu.institution}</p>

              {/* Year badge */}
              <span className="inline-block px-3 py-1 rounded-lg bg-white/5 text-[#9AA7B8] text-xs font-mono border border-white/5">
                Graduated {edu.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

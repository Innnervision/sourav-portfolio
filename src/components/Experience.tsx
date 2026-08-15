"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#70A7FF]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#8B7CFF] font-mono text-sm">03.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#8B7CFF]/30 to-transparent ml-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#111824] via-[#1e2a3a] to-[#111824]" />

          <div className="space-y-12">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${isLeft ? "" : "lg:direction-rtl"}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#05070B] z-10 items-center justify-center"
                    style={{ backgroundColor: job.color, boxShadow: `0 0 12px ${job.color}60` }}
                  />

                  {/* Left/right placement */}
                  <div className={isLeft ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"}>
                    <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors card-hover">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-bold text-white text-lg leading-tight">{job.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className="text-sm font-semibold"
                              style={{ color: job.color }}
                            >
                              {job.company}
                            </span>
                            <span className="text-[#5C6B80] text-xs">·</span>
                            <span className="text-[#5C6B80] text-xs">{job.location}</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-white/5 text-[#9AA7B8] text-xs font-mono whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((ach, j) => (
                          <li key={j} className="flex gap-2 text-sm text-[#9AA7B8] leading-relaxed">
                            <span style={{ color: job.color }} className="mt-1.5 flex-shrink-0">▹</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium"
                            style={{
                              backgroundColor: `${job.color}12`,
                              color: job.color,
                              border: `1px solid ${job.color}25`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  {isLeft && <div className="hidden lg:block" />}
                  {!isLeft && <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

const categoryColors: Record<string, string> = {
  XR: "#52E5E7",
  AI: "#70A7FF",
  Games: "#8B7CFF",
  Web: "#5EE6A8",
  "Digital Twin": "#F0B429",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5EE6A8]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-3 mb-12 flex-wrap"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#5EE6A8] font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="hidden sm:block w-40 h-px bg-gradient-to-r from-[#5EE6A8]/30 to-transparent ml-4" />
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-[#70A7FF] hover:text-white transition-colors font-medium group"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => {
            const color = categoryColors[project.category] || "#70A7FF";
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 card-hover flex flex-col group"
              >
                {/* Card header strip */}
                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />

                <div className="p-5 flex flex-col flex-1">
                  {/* Category + status */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: `${color}15`,
                        color: color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded"
                        style={{
                          color: project.status === "Shipped" ? "#5EE6A8" : project.status === "In Progress" ? "#F0B429" : "#9AA7B8",
                          backgroundColor: project.status === "Shipped" ? "#5EE6A820" : project.status === "In Progress" ? "#F0B42920" : "#9AA7B820",
                        }}
                      >
                        {project.status}
                      </span>
                      <span className="text-[#5C6B80] text-xs font-mono">{project.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-white text-base leading-tight mb-1 group-hover:text-[#70A7FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#5C6B80] text-xs mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-[#9AA7B8] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#9AA7B8] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#5C6B80]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  {(project.links.live || project.links.github) && (
                    <div className="flex gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-[#70A7FF] hover:underline"
                        >
                          Live ↗
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-[#9AA7B8] hover:text-white transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/projects"
            className="px-8 py-3 rounded-xl border border-[#70A7FF]/30 text-[#70A7FF] font-semibold text-sm hover:bg-[#70A7FF]/10 transition-all hover:border-[#70A7FF]/60 hover:scale-105"
          >
            View All {projects.length} Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

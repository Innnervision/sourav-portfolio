"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, categories, type Category } from "@/data/projects";

const categoryColors: Record<string, string> = {
  XR: "#52E5E7",
  AI: "#70A7FF",
  Games: "#8B7CFF",
  Web: "#5EE6A8",
  "Digital Twin": "#F0B429",
};

const categoryCounts = (cat: Category) => {
  if (cat === "All") return projects.length;
  return projects.filter((p) => p.category === cat).length;
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#9AA7B8] hover:text-white transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </motion.div>

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              All Projects
            </h1>
            <p className="text-[#9AA7B8] text-lg">
              {projects.length} projects across XR, AI, Games, Web & Digital Twin engineering
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => {
              const color = cat === "All" ? "#70A7FF" : categoryColors[cat] || "#70A7FF";
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2"
                  style={
                    isActive
                      ? {
                          backgroundColor: `${color}20`,
                          color: color,
                          border: `1px solid ${color}50`,
                        }
                      : {
                          backgroundColor: "rgba(255,255,255,0.04)",
                          color: "#9AA7B8",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }
                  }
                >
                  {cat}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full"
                    style={
                      isActive
                        ? { backgroundColor: `${color}30`, color: color }
                        : { backgroundColor: "rgba(255,255,255,0.08)", color: "#5C6B80" }
                    }
                  >
                    {categoryCounts(cat)}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => {
                const color = categoryColors[project.category] || "#70A7FF";
                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 card-hover flex flex-col group"
                  >
                    <div
                      className="h-1"
                      style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                    />

                    <div className="p-5 flex flex-col flex-1">
                      {/* Category + status + year */}
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
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
                              color:
                                project.status === "Shipped"
                                  ? "#5EE6A8"
                                  : project.status === "In Progress"
                                  ? "#F0B429"
                                  : "#9AA7B8",
                              backgroundColor:
                                project.status === "Shipped"
                                  ? "#5EE6A820"
                                  : project.status === "In Progress"
                                  ? "#F0B42920"
                                  : "#9AA7B820",
                            }}
                          >
                            {project.status}
                          </span>
                          <span className="text-[#5C6B80] text-xs font-mono">{project.year}</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-white text-base leading-tight mb-1 group-hover:text-[#70A7FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#5C6B80] text-xs mb-3">{project.subtitle}</p>

                      <p className="text-[#9AA7B8] text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#9AA7B8] border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#5C6B80]">
                            +{project.technologies.length - 6}
                          </span>
                        )}
                      </div>

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
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#5C6B80]">
              No projects found in this category.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

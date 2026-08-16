"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const CATS = ["All", "XR", "AI", "Games", "Web", "Digital Twin"] as const;
type Cat = typeof CATS[number];
const CAT_COLOR: Record<string, string> = { XR:"#52E5E7", AI:"#70A7FF", Games:"#8B7CFF", Web:"#5EE6A8", "Digital Twin":"#F0B429" };

export default function AllProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <Link href="/#projects" className="text-xs text-[#5C6B80] hover:text-[#70A7FF] transition-colors mb-4 inline-block">← Back</Link>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">All Projects</h1>
        <p className="text-[#9AA7B8] max-w-xl">Every product, game, simulation, platform and AI system I have built — {projects.length} projects across XR, AI, Games, Web and Digital Twin.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATS.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            style={active === cat ? { background: CAT_COLOR[cat] || "#70A7FF", color: "#05070B" } : { background: "rgba(255,255,255,0.04)", color: "#9AA7B8", border: "1px solid rgba(255,255,255,0.07)" }}>
            {cat} {cat !== "All" && `(${projects.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((project, i) => {
            const color = CAT_COLOR[project.category] || "#70A7FF";
            return (
              <motion.article key={project.id} initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ delay: i*0.04 }}
                className="glass rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col group"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}30`; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px ${color}12`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="relative aspect-video overflow-hidden bg-[#0a1220]">
                  {project.photo ? (
                    <Image src={project.photo} alt={project.title} fill unoptimized className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(135deg,${color}10,rgba(5,7,11,0.4))` }}>
                      <span className="text-3xl font-black" style={{ color:`${color}30` }}>{project.category}</span>
                    </div>
                  )}
                  <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,transparent 50%,rgba(5,7,11,0.65) 100%)" }} />
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background:`linear-gradient(90deg,${color},transparent)` }} />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase" style={{ backgroundColor:`${color}20`, color, border:`1px solid ${color}30`, backdropFilter:"blur(6px)" }}>{project.category}</span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-[#70A7FF] transition-colors">{project.title}</h3>
                  <p className="text-[#5C6B80] text-[11px] mb-2">{project.subtitle}</p>
                  <p className="text-[#9AA7B8] text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0,3).map(t => <span key={t} className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-[#9AA7B8]">{t}</span>)}
                    {project.technologies.length > 3 && <span className="px-1.5 py-0.5 rounded text-[10px] text-[#5C6B80]">+{project.technologies.length-3}</span>}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[10px] font-semibold" style={{ color:project.status==="Shipped"?"#5EE6A8":project.status==="In Progress"?"#F0B429":"#9AA7B8" }}>{project.status}</span>
                    <div className="flex gap-2">
                      {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#70A7FF] hover:underline">Live ↗</a>}
                      {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#9AA7B8] hover:text-white">GitHub ↗</a>}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

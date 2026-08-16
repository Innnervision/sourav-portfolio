"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

const CAT_COLOR: Record<string, string> = {
  XR: "#52E5E7", AI: "#70A7FF", Games: "#8B7CFF", Web: "#5EE6A8", "Digital Twin": "#F0B429",
};

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5EE6A8]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="flex items-center justify-between gap-3 mb-12 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-[#5EE6A8] font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="hidden sm:block w-40 h-px bg-gradient-to-r from-[#5EE6A8]/30 to-transparent ml-4" />
          </div>
          <Link href="/projects" className="flex items-center gap-2 text-sm text-[#70A7FF] hover:text-white transition-colors font-medium group">
            View All {projects.length} Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => {
            const color = CAT_COLOR[project.category] || "#70A7FF";
            return (
              <motion.div key={project.id} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-30px" }} transition={{ duration:0.5,delay:i*0.07 }}>
                <Link href={`/projects/${project.id}`} className="block glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col group h-full"
                  style={{ textDecoration:"none" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = color + "30"; el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px " + color + "15"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.05)"; el.style.boxShadow = "none"; }}>
                  <div className="relative aspect-video overflow-hidden bg-[#0a1220]">
                    {project.photo ? (
                      <Image src={project.photo} alt={project.title} fill unoptimized className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background:`linear-gradient(135deg,${color}12,rgba(5,7,11,0.4))` }}>
                        <span className="text-4xl font-black" style={{ color:`${color}40` }}>{project.category}</span>
                      </div>
                    )}
                    <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,transparent 50%,rgba(5,7,11,0.7) 100%)" }} />
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background:`linear-gradient(90deg,${color},transparent)` }} />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide" style={{ backgroundColor:`${color}20`, color, border:`1px solid ${color}35`, backdropFilter:"blur(8px)" }}>{project.category}</span>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-mono" style={{ background:"rgba(5,7,11,0.75)", color:"rgba(255,255,255,0.5)" }}>{project.year}</span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 rounded-xl text-xs font-bold" style={{ background:"rgba(5,7,11,0.85)", border:`1px solid ${color}40`, color, backdropFilter:"blur(12px)" }}>View Details →</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-white text-base leading-tight mb-1 group-hover:text-[#70A7FF] transition-colors">{project.title}</h3>
                    <p className="text-[#5C6B80] text-xs mb-3">{project.subtitle}</p>
                    <p className="text-[#9AA7B8] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0,4).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#9AA7B8] border border-white/5">{t}</span>
                      ))}
                      {project.technologies.length > 4 && <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-[#5C6B80]">+{project.technologies.length-4}</span>}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ color:project.status==="Shipped"?"#5EE6A8":project.status==="In Progress"?"#F0B429":"#9AA7B8", backgroundColor:project.status==="Shipped"?"#5EE6A820":project.status==="In Progress"?"#F0B42920":"#9AA7B820" }}>{project.status}</span>
                      <div className="flex gap-3">
                        {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-xs font-medium text-[#70A7FF] hover:underline">Live ↗</a>}
                        {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-xs font-medium text-[#9AA7B8] hover:text-white">GitHub ↗</a>}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:0.4 }} className="flex justify-center mt-10">
          <Link href="/projects" className="px-8 py-3 rounded-xl border border-[#70A7FF]/30 text-[#70A7FF] font-semibold text-sm hover:bg-[#70A7FF]/10 transition-all hover:border-[#70A7FF]/60 hover:scale-105">
            View All {projects.length} Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
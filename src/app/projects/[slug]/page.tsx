import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import type { Metadata } from "next"

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map(p => ({ slug: String(p.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => String(p.id) === slug)
  if (!project) return { title: "Project Not Found" }
  return { title: project.title + " | Sourav Mukherjee", description: project.description }
}

const CAT_COLOR: Record<string, string> = {
  XR: "#52E5E7", AI: "#70A7FF", Games: "#8B7CFF", Web: "#5EE6A8", "Digital Twin": "#F0B429",
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => String(p.id) === slug)
  if (!project) notFound()
  const color = CAT_COLOR[project.category] || "#70A7FF"
  const statusColor = project.status === "Shipped" ? "#5EE6A8" : project.status === "In Progress" ? "#F0B429" : "#9AA7B8"
  const related = projects.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3)
  return (
    <main className="min-h-screen" style={{ paddingTop: "80px", background: "#05070B" }}>
      {project.photo && (
        <div className="relative w-full" style={{ height: "min(460px,55vw)", minHeight: 220 }}>
          <Image src={project.photo} alt={project.title} fill unoptimized className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(5,7,11,0.1) 0%,rgba(5,7,11,0.6) 65%,rgba(5,7,11,1) 100%)" }} />
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg," + color + ",transparent)" }} />
          <div className="absolute bottom-6 left-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase" style={{ background: color + "20", color: color, border: "1px solid " + color + "40", backdropFilter: "blur(8px)" }}>
              {project.category}
            </span>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
          <Link href="/projects" className="hover:text-white transition-colors">â† All Projects</Link>
          <span>/</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>{project.title}</span>
        </nav>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{ background: color + "15", color: color, border: "1px solid " + color + "30" }}>{project.category}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ color: statusColor, background: statusColor + "12", border: "1px solid " + statusColor + "25" }}>{project.status}</span>
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>{project.year}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3 tracking-tight">{project.title}</h1>
              <p className="text-lg font-semibold" style={{ color: color }}>{project.subtitle}</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Project Overview</h2>
              <p className="text-base leading-relaxed" style={{ color: "#9AA7B8" }}>{project.description}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl p-5" style={{ background: "#111824", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <span key={t} className="px-2 py-1 rounded-lg text-xs font-mono" style={{ background: color + "08", border: "1px solid " + color + "18", color: "#9AA7B8" }}>{t}</span>
                ))}
              </div>
            </div>
            {(project.links.live || project.links.github) && (
              <div className="rounded-2xl p-5" style={{ background: "#111824", border: "1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Links</h3>
                <div className="space-y-2">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90" style={{ background: "rgba(94,230,168,0.1)", border: "1px solid rgba(94,230,168,0.25)", color: "#5EE6A8" }}>
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />Live Demo â†—
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#9AA7B8" }}>
                      GitHub â†—
                    </a>
                  )}
                </div>
              </div>
            )}
            <div className="rounded-2xl p-5" style={{ background: "#111824", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span style={{ color: "rgba(255,255,255,0.4)" }}>Category</span><span className="font-semibold" style={{ color: color }}>{project.category}</span></div>
                <div className="flex justify-between"><span style={{ color: "rgba(255,255,255,0.4)" }}>Status</span><span className="font-semibold" style={{ color: statusColor }}>{project.status}</span></div>
                <div className="flex justify-between"><span style={{ color: "rgba(255,255,255,0.4)" }}>Year</span><span className="font-semibold text-white">{project.year}</span></div>
              </div>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-16 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-xl font-bold text-white mb-6">More {project.category} Projects</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map(rel => (
                <Link key={rel.id} href={"/projects/" + rel.id} className="group rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300" style={{ background: "#111824", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {rel.photo && (<div className="relative aspect-video overflow-hidden"><Image src={rel.photo} alt={rel.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>)}
                  <div className="p-4">
                    <p className="text-sm font-bold text-white group-hover:text-[#70A7FF] transition-colors">{rel.title}</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{rel.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: "#111824", border: "1px solid rgba(112,167,255,0.15)" }}>
          <p className="text-lg font-bold text-white mb-2">Want to build something similar?</p>
          <p className="text-sm mb-6" style={{ color: "#9AA7B8" }}>Available for senior engineering roles and product partnerships â€” immediate joiner.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:souravmukherjee7991@gmail.com?subject=Hiring Inquiry" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: "linear-gradient(135deg,#70A7FF,#52E5E7)", color: "#05070B" }}>Hire Me</a>
            <a href="https://universeinvedors.tech" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: "rgba(112,167,255,0.1)", border: "1px solid rgba(112,167,255,0.25)", color: "#70A7FF" }}>Company Website â†—</a>
          </div>
        </div>
      </div>
    </main>
  )
}
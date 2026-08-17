import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { projectPhotos } from "@/data/projectPhotos"
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
  XR:"#52E5E7", AI:"#70A7FF", Games:"#8B7CFF", Web:"#5EE6A8", "Digital Twin":"#F0B429",
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => String(p.id) === slug)
  if (!project) notFound()

  const color = CAT_COLOR[project.category] || "#70A7FF"
  const statusColor = project.status === "Shipped" ? "#5EE6A8" : project.status === "In Progress" ? "#F0B429" : "#9AA7B8"
  const related = projects.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3)

  const folderPhotos = projectPhotos[project.id] || []
  const allPhotos = folderPhotos.length > 0 ? folderPhotos : (project.photo ? [project.photo] : [])
  const heroPhoto = allPhotos[0] || ""
  const hasYoutube = !!project.youtubeId
  const hasVideos = project.videos && project.videos.length > 0

  return (
    <main className="min-h-screen" style={{ paddingTop:"80px", background:"#05070B" }}>

      {/* Hero — YouTube embed OR photo */}
      {hasYoutube ? (
        <div className="relative w-full" style={{ background:"#000" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom:"56.25%" }}>
              <iframe
                src={"https://www.youtube.com/embed/" + project.youtubeId + "?autoplay=0&rel=0&modestbranding=1"}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
                style={{ borderRadius:"12px" }}
              />
            </div>
          </div>
        </div>
      ) : heroPhoto ? (
        <div className="relative w-full" style={{ height:"min(480px,55vw)", minHeight:220 }}>
          <Image src={heroPhoto} alt={project.title} fill unoptimized className="object-cover" priority />
          <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,rgba(5,7,11,0.05) 0%,rgba(5,7,11,0.55) 60%,rgba(5,7,11,1) 100%)" }} />
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background:"linear-gradient(90deg,"+color+",transparent)" }} />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase" style={{ background:color+"20", color, border:"1px solid "+color+"40", backdropFilter:"blur(8px)" }}>{project.category}</span>
            {allPhotos.length > 1 && <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background:"rgba(5,7,11,0.8)", border:"1px solid rgba(255,255,255,0.15)", color:"rgba(255,255,255,0.7)", backdropFilter:"blur(8px)" }}>📷 {allPhotos.length} photos</span>}
          </div>
        </div>
      ) : null}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs mb-8" style={{ color:"rgba(255,255,255,0.35)" }}>
          <Link href="/projects" className="hover:text-white transition-colors">← All Projects</Link>
          <span>/</span>
          <span style={{ color:"rgba(255,255,255,0.6)" }}>{project.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            {/* Title */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{ background:color+"15", color, border:"1px solid "+color+"30" }}>{project.category}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ color:statusColor, background:statusColor+"12", border:"1px solid "+statusColor+"25" }}>{project.status}</span>
                <span className="text-xs font-mono" style={{ color:"rgba(255,255,255,0.3)" }}>{project.year}</span>
                {hasYoutube && <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background:"rgba(255,0,0,0.12)", border:"1px solid rgba(255,0,0,0.3)", color:"#ff6b6b" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>YouTube Demo</span>}
                {hasVideos && <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background:"rgba(112,167,255,0.12)", border:"1px solid rgba(112,167,255,0.3)", color:"#70A7FF" }}>🎬 {(project.videos || []).length} Video{(project.videos || []).length > 1 ? "s" : ""}</span>}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3 tracking-tight">{project.title}</h1>
              <p className="text-lg font-semibold" style={{ color }}>{project.subtitle}</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"rgba(255,255,255,0.35)" }}>Overview</h2>
              <p className="text-base leading-relaxed" style={{ color:"#9AA7B8" }}>{project.description}</p>
            </div>

            {/* MP4 Videos */}
            {hasVideos && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:"rgba(255,255,255,0.35)" }}>Demo Videos</h2>
                <div className="space-y-4">
                  {(project.videos || []).map((v, i) => (
                    <div key={i} className="rounded-xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.08)" }}>
                      <video controls className="w-full" style={{ background:"#000", borderRadius:"12px" }} preload="metadata">
                        <source src={v} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                      <div className="px-4 py-2" style={{ background:"#111824" }}>
                        <p className="text-xs font-mono" style={{ color:"rgba(255,255,255,0.4)" }}>{v.split("/").pop()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery */}
            {allPhotos.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color:"rgba(255,255,255,0.35)" }}>
                  {hasYoutube ? "Project Screenshots" : "Photo Gallery"} · {allPhotos.length} {allPhotos.length === 1 ? "photo" : "photos"}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allPhotos.map((photo, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden group" style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
                      <Image src={photo} alt={project.title + " " + (i+1)} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-106" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background:"rgba(5,7,11,0.35)" }} />
                      <span className="absolute top-2 right-2 text-[10px] font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity" style={{ background:"rgba(5,7,11,0.85)", color:"rgba(255,255,255,0.6)" }}>{i+1}/{allPhotos.length}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Tech */}
            <div className="rounded-2xl p-5" style={{ background:"#111824", border:"1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"rgba(255,255,255,0.35)" }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <span key={t} className="px-2 py-1 rounded-lg text-xs font-mono" style={{ background:color+"08", border:"1px solid "+color+"18", color:"#9AA7B8" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.links.live || project.links.github || hasYoutube) && (
              <div className="rounded-2xl p-5" style={{ background:"#111824", border:"1px solid rgba(255,255,255,0.07)" }}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"rgba(255,255,255,0.35)" }}>Links</h3>
                <div className="space-y-2">
                  {hasYoutube && (
                    <a href={"https://youtu.be/"+project.youtubeId} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-all"
                      style={{ background:"rgba(255,0,0,0.1)", border:"1px solid rgba(255,0,0,0.25)", color:"#ff6b6b" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Watch on YouTube ↗
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-all"
                      style={{ background:"rgba(94,230,168,0.1)", border:"1px solid rgba(94,230,168,0.25)", color:"#5EE6A8" }}>
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />Live Demo ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-all"
                      style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"#9AA7B8" }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Details */}
            <div className="rounded-2xl p-5" style={{ background:"#111824", border:"1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color:"rgba(255,255,255,0.35)" }}>Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span style={{ color:"rgba(255,255,255,0.4)" }}>Category</span><span className="font-semibold" style={{ color }}>{project.category}</span></div>
                <div className="flex justify-between"><span style={{ color:"rgba(255,255,255,0.4)" }}>Status</span><span className="font-semibold" style={{ color:statusColor }}>{project.status}</span></div>
                <div className="flex justify-between"><span style={{ color:"rgba(255,255,255,0.4)" }}>Year</span><span className="font-semibold text-white">{project.year}</span></div>
                {allPhotos.length > 0 && <div className="flex justify-between"><span style={{ color:"rgba(255,255,255,0.4)" }}>Photos</span><span className="font-semibold text-white">{allPhotos.length}</span></div>}
                {hasVideos && <div className="flex justify-between"><span style={{ color:"rgba(255,255,255,0.4)" }}>Videos</span><span className="font-semibold text-white">{(project.videos||[]).length}</span></div>}
                {hasYoutube && <div className="flex justify-between"><span style={{ color:"rgba(255,255,255,0.4)" }}>YouTube</span><span className="font-semibold" style={{ color:"#ff6b6b" }}>Available</span></div>}
              </div>
            </div>

          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-10" style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-xl font-bold text-white mb-6">More {project.category} Projects</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map(rel => {
                const rp = projectPhotos[rel.id]; const rthumb = rp&&rp.length>0?rp[0]:rel.photo
                return (
                  <Link key={rel.id} href={"/projects/"+rel.id} className="group rounded-xl overflow-hidden hover:scale-[1.02] transition-all" style={{ background:"#111824", border:"1px solid rgba(255,255,255,0.07)" }}>
                    {rthumb && <div className="relative aspect-video overflow-hidden"><Image src={rthumb} alt={rel.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-bold text-white group-hover:text-[#70A7FF] transition-colors">{rel.title}</p>
                        {rel.youtubeId && <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff6b6b"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                      </div>
                      <p className="text-xs" style={{ color:"rgba(255,255,255,0.4)" }}>{rel.subtitle}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-2xl p-8 text-center" style={{ background:"#111824", border:"1px solid rgba(112,167,255,0.15)" }}>
          <p className="text-lg font-bold text-white mb-2">Want to build something similar?</p>
          <p className="text-sm mb-6" style={{ color:"#9AA7B8" }}>Available for senior engineering roles and product partnerships — immediate joiner.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:souravmukherjee7991@gmail.com?subject=Hiring Inquiry" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background:"linear-gradient(135deg,#70A7FF,#52E5E7)", color:"#05070B" }}>Hire Me</a>
            <a href="https://universeinvedors.tech" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background:"rgba(112,167,255,0.1)", border:"1px solid rgba(112,167,255,0.25)", color:"#70A7FF" }}>Company Website ↗</a>
          </div>
        </div>

      </div>
    </main>
  )
}
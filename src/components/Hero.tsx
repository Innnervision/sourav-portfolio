"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { person, metrics } from "@/data/resume";

const TITLES = ["Senior AI Engineer","XR Architect","Real-Time 3D Engineer","Unity Tech Lead","Generative AI Builder"];

const SLIDES = [
  { src: "/project-photos/BathXpertZ/ChatGPT Image Aug 13, 2026, 02_18_16 PM.png", label: "BathXpertZ", sub: "3D Bathroom Configurator" },
  { src: "/project-photos/airport-security-vr/ChatGPT Image Aug 13, 2026, 01_16_46 AM.png", label: "Airport Security VR", sub: "Enterprise VR Training" },
  { src: "/project-photos/zuellig-pharma-metaverse/consultation.png", label: "Medical Metaverse", sub: "Healthcare XR Platform" },
  { src: "/project-photos/torrent-electricity-training/ChatGPT Image Aug 11, 2026, 03_04_39 AM.png", label: "Torrent Power VR", sub: "Industrial Safety Training" },
  { src: "/project-photos/fujitsu-industrial-metaverse/ChatGPT Image Aug 11, 2026, 03_04_21 AM.png", label: "Fujitsu Metaverse", sub: "Digital Twin Platform" },
  { src: "/project-photos/CultivationInVR/CultivationInVR.png", label: "Cultivation VR", sub: "Agricultural VR Training" },
  { src: "/project-photos/ar-landscape/Landscaping.png", label: "AR Landscape", sub: "Government Infrastructure AR" },
  { src: "/project-photos/uno-game/ChatGPT Image Aug 13, 2026, 02_26_13 PM.png", label: "Uno Game", sub: "Multiplayer Card Game" },
  { src: "/project-photos/astrotavigator/ChatGPT Image Aug 13, 2026, 02_27_10 PM.png", label: "AstroNavigator", sub: "Space RPG Adventure" },
  { src: "/project-photos/ludo-royale/ChatGPT Image Aug 13, 2026, 02_38_26 PM.png", label: "Ludo Royale", sub: "Professional Ludo" },
  { src: "/project-photos/candy-cascade/ChatGPT Image Aug 13, 2026, 02_37_20 PM.png", label: "Candy Cascade", sub: "Match-3 Puzzle" },
  { src: "/project-photos/neural-ninja/ChatGPT Image Aug 13, 2026, 02_24_07 PM.png", label: "Neural Ninja", sub: "AI Brain Training" },
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    if (pause) { const t = setTimeout(() => setPause(false), 1600); return () => clearTimeout(t); }
    const target = texts[idx];
    if (!deleting) {
      if (displayed.length < target.length) { const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65); return () => clearTimeout(t); }
      else { const t = setTimeout(() => setDeleting(true), 2000); return () => clearTimeout(t); }
    } else {
      if (displayed.length > 0) { const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35); return () => clearTimeout(t); }
      else { setDeleting(false); setPause(true); setIdx((prev) => (prev + 1) % texts.length); }
    }
  }, [displayed, deleting, idx, pause, texts]);
  return <span style={{ background:"linear-gradient(135deg,#70A7FF,#52E5E7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{displayed}<span className="animate-pulse text-[#70A7FF]">|</span></span>;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let animId: number;
    const particles: { x:number;y:number;vx:number;vy:number;r:number;alpha:number }[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener("resize", resize);
    for (let i = 0; i < 50; i++) particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-0.5)*0.25, vy:(Math.random()-0.5)*0.25, r:Math.random()*1.5+0.5, alpha:Math.random()*0.35+0.08 });
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0; if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`rgba(112,167,255,${p.alpha})`; ctx.fill();
      });
      for(let i=0;i<particles.length;i++) for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(112,167,255,${0.04*(1-d/110)})`;ctx.lineWidth=0.5;ctx.stroke();}
      }
      animId=requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function ProductShowcase() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());
  const timerRef = useRef<ReturnType<typeof setTimeout>|null>(null);
  const valid = SLIDES.filter((_,i) => !imgErrors.has(i));
  useEffect(() => {
    timerRef.current = setTimeout(() => setCurrent(c => (c+1)%valid.length), 3200);
    return () => { if(timerRef.current) clearTimeout(timerRef.current); };
  },[current,valid.length]);
  const slide = valid[current % valid.length];
  const origIdx = SLIDES.indexOf(slide);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio:"16/10", boxShadow:"0 0 0 1px rgba(112,167,255,0.15),0 24px 60px rgba(0,0,0,0.7),0 0 80px rgba(112,167,255,0.08)" }}>
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity:0,scale:1.04,x:24 }} animate={{ opacity:1,scale:1,x:0 }} exit={{ opacity:0,scale:0.97,x:-24 }} transition={{ duration:0.6,ease:[0.22,1,0.36,1] }} className="absolute inset-0">
            {slide && <Image src={slide.src} alt={slide.label} fill unoptimized className="object-cover" onError={() => setImgErrors(prev => new Set([...prev, origIdx]))} />}
            <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,transparent 35%,rgba(5,7,11,0.9) 100%)" }} />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background:"rgba(5,7,11,0.8)",border:"1px solid rgba(112,167,255,0.25)",backdropFilter:"blur(8px)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-[10px] font-semibold text-white/80">Built by Sourav</span>
        </div>
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full" style={{ background:"rgba(5,7,11,0.8)",border:"1px solid rgba(255,255,255,0.08)",backdropFilter:"blur(8px)" }}>
          <span className="text-[10px] font-mono text-white/40">{(current%valid.length)+1}/{valid.length}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={"label-"+current} initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:0.35,delay:0.15 }} className="absolute bottom-0 left-0 right-0 z-10 p-4">
            <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color:"#70A7FF" }}>{slide?.sub}</p>
            <p className="text-sm font-bold text-white">{slide?.label}</p>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 z-20" style={{ background:"rgba(255,255,255,0.08)" }}>
          <motion.div key={"prog-"+current} className="h-full" style={{ background:"linear-gradient(90deg,#70A7FF,#52E5E7)" }} initial={{ width:"0%" }} animate={{ width:"100%" }} transition={{ duration:3.2,ease:"linear" }} />
        </div>
      </div>
      <div className="flex gap-1.5 mt-3">
        {valid.map((item,i) => (
          <button key={i} type="button" aria-label={`Show project slide ${i + 1}: ${item.label}`} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300" style={{ width:i===current%valid.length?18:5, height:5, background:i===current%valid.length?"#70A7FF":"rgba(112,167,255,0.2)" }} />
        ))}
      </div>
      <div className="flex gap-8 mt-4">
        {[{v:"50+",l:"Products"},{v:"7+",l:"Years"},{v:"35+",l:"Games"}].map(s => (
          <div key={s.l} className="text-center">
            <p className="text-lg font-black" style={{ background:"linear-gradient(135deg,#70A7FF,#52E5E7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>{s.v}</p>
            <p className="text-[10px] mt-0.5" style={{ color:"rgba(255,255,255,0.3)" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background:"#05070B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background:"rgba(112,167,255,0.05)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background:"rgba(139,124,255,0.05)" }} />
      </div>
      <ParticleField />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity:0,x:-32 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.7,ease:"easeOut" }} className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div initial={{ opacity:0,y:-10 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit" style={{ background:"rgba(94,230,168,0.08)",border:"1px solid rgba(94,230,168,0.25)" }}>
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background:"#5EE6A8" }} /><span className="relative inline-flex rounded-full h-2 w-2" style={{ background:"#5EE6A8" }} /></span>
              <span className="text-sm font-semibold" style={{ color:"#5EE6A8" }}>Available — Immediate Joiner</span>
            </motion.div>

            {/* Name — single line on desktop */}
            <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.3 }}>
              <h1 className="font-black tracking-tight leading-none" style={{ fontSize:"clamp(2.8rem,6vw,5rem)" }}>
                <span className="text-white">Sourav </span>
                <span style={{ background:"linear-gradient(135deg,#70A7FF 0%,#52E5E7 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>Mukherjee</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }} className="text-xl sm:text-2xl font-mono font-medium h-8" style={{ color:"#9AA7B8" }}>
              <TypewriterText texts={TITLES} />
            </motion.div>

            {/* Tagline */}
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }} className="text-base italic font-light" style={{ color:"#9AA7B8" }}>
              &ldquo;{person.tagline}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.7 }} className="flex flex-wrap gap-3">
              <button type="button" onClick={() => document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ background:"linear-gradient(135deg,#70A7FF,#52E5E7)",color:"#05070B",boxShadow:"0 8px 24px rgba(112,167,255,0.3)" }}>
                View My Work
              </button>
              <a href="/resume.pdf" download className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105" style={{ border:"1px solid rgba(112,167,255,0.4)",color:"#70A7FF",background:"rgba(112,167,255,0.08)" }}>
                Download Resume
              </a>
              <a href="https://universeinvedors.tech/white-label" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105" style={{ border:"1px solid rgba(94,230,168,0.4)",color:"#5EE6A8",background:"rgba(94,230,168,0.08)" }}>
                Custom Projects &amp; White-Label ↗
              </a>
            </motion.div>

            {/* Flexible All-Budget Client Banner */}
            <motion.div initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.78 }}
              className="rounded-xl px-4 py-3 text-xs sm:text-sm leading-relaxed flex flex-wrap items-center justify-between gap-2"
              style={{ background:"rgba(94,230,168,0.06)", border:"1px solid rgba(94,230,168,0.22)", color:"#cbd5e1" }}>
              <span>
                💬 <strong className="text-[#5EE6A8]">Free to talk</strong> — we welcome custom projects across all budgets, from small starter builds to enterprise systems.
              </span>
              <a href="mailto:rajmukherjee042@gmail.com?subject=Custom%20Project%20Inquiry" className="text-[#70A7FF] hover:underline font-semibold whitespace-nowrap">
                rajmukherjee042@gmail.com →
              </a>
            </motion.div>

            {/* Metrics grid */}
            <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.85 }} className="grid grid-cols-3 gap-3">
              {metrics.map((m,i) => (
                <motion.div key={m.label} initial={{ opacity:0,scale:0.85 }} animate={{ opacity:1,scale:1 }} transition={{ delay:0.9+i*0.06 }}
                  className="rounded-xl p-3 text-center border transition-colors group" style={{ background:"rgba(17,24,36,0.8)",borderColor:"rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(112,167,255,0.25)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                  <div className="text-xl font-black" style={{ background:"linear-gradient(135deg,#70A7FF,#52E5E7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>{m.value}</div>
                  <div className="text-[10px] mt-0.5 leading-tight" style={{ color:"#5C6B80" }}>{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Product showcase */}
          <motion.div initial={{ opacity:0,x:32 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.8,delay:0.3,ease:"easeOut" }} className="order-1 lg:order-2">
            <ProductShowcase />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }} className="flex flex-col items-center gap-2 mt-12 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0">
          <span className="text-xs font-mono" style={{ color:"#5C6B80" }}>scroll</span>
          <motion.div animate={{ y:[0,6,0] }} transition={{ duration:1.5,repeat:Infinity,ease:"easeInOut" }} className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5" style={{ border:"1px solid rgba(92,107,128,0.4)" }}>
            <div className="w-1 h-2 rounded-full" style={{ background:"rgba(112,167,255,0.6)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
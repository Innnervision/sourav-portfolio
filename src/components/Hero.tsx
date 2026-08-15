"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { person, metrics } from "@/data/resume";

const TITLES = [
  "Senior AI Engineer",
  "XR Architect",
  "Real-Time 3D Engineer",
  "Unity Tech Lead",
  "Generative AI Builder",
];

// All product photos from project-photos folder
const PRODUCT_SLIDES = [
  { src: "/project-photos/BathXpertZ/ChatGPT Image Aug 13, 2026, 02_18_16 PM.png", label: "BathXpertZ", sub: "3D Bathroom Configurator" },
  { src: "/project-photos/airport-security-vr/ChatGPT Image Aug 13, 2026, 01_16_46 AM.png", label: "Airport Security VR", sub: "Enterprise VR Training" },
  { src: "/project-photos/zuellig-pharma-metaverse/consultation.png", label: "Medical Metaverse", sub: "Healthcare XR Platform" },
  { src: "/project-photos/torrent-electricity-training/ChatGPT Image Aug 11, 2026, 03_04_39 AM.png", label: "Torrent Power VR", sub: "Industrial Safety Training" },
  { src: "/project-photos/fujitsu-industrial-metaverse/ChatGPT Image Aug 11, 2026, 03_04_21 AM.png", label: "Fujitsu Industrial Metaverse", sub: "Digital Twin Platform" },
  { src: "/project-photos/CultivationInVR/CultivationInVR.png", label: "Cultivation in VR", sub: "Agricultural VR Training" },
  { src: "/project-photos/ar-landscape/Landscaping.png", label: "AR Landscape", sub: "Government Infrastructure AR" },
  { src: "/project-photos/uno-game/ChatGPT Image Aug 13, 2026, 02_26_13 PM.png", label: "Uno Game", sub: "Multiplayer Card Game" },
  { src: "/project-photos/astrotavigator/ChatGPT Image Aug 13, 2026, 02_27_10 PM.png", label: "AstroNavigator", sub: "Space RPG Adventure" },
  { src: "/project-photos/ludo-royale/ChatGPT Image Aug 13, 2026, 02_38_26 PM.png", label: "Ludo Royale", sub: "Professional Ludo Game" },
  { src: "/project-photos/candy-cascade/ChatGPT Image Aug 13, 2026, 02_37_20 PM.png", label: "Candy Cascade", sub: "Match-3 Puzzle Adventure" },
  { src: "/project-photos/creator-commerce/login.png", label: "CreatorBridge", sub: "AI Creator Intelligence Platform" },
  { src: "/project-photos/neural-ninja/ChatGPT Image Aug 13, 2026, 02_24_07 PM.png", label: "Neural Ninja", sub: "AI Brain Training" },
  { src: "/project-photos/mindfulness-garden/ChatGPT Image Aug 13, 2026, 02_36_21 PM.png", label: "Mindfulness Garden", sub: "Wellness Platform" },
  { src: "/project-photos/snake-game/ChatGPT Image Aug 13, 2026, 02_23_04 PM.png", label: "Snake Game", sub: "Classic Arcade Reimagined" },
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

  return (
    <span className="text-gradient-blue">
      {displayed}<span className="animate-pulse">|</span>
    </span>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener("resize", resize);
    for (let i = 0; i < 55; i++) particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.35 + 0.08 });
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(112,167,255,${p.alpha})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(112,167,255,${0.05*(1-dist/110)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function ProductShowcase() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validSlides = PRODUCT_SLIDES.filter((_, i) => !imgErrors.has(i));

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % validSlides.length);
    }, 3000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, validSlides.length]);

  const handleError = (originalIdx: number) => {
    setImgErrors((prev) => new Set([...prev, originalIdx]));
  };

  const currentSlide = validSlides[current % validSlides.length];
  const originalIdx = PRODUCT_SLIDES.indexOf(currentSlide);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Main showcase frame */}
      <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 0 0 1px rgba(112,167,255,0.15), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(112,167,255,0.1)" }}>

        {/* Animated image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.97, x: -30 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {currentSlide && (
              <Image
                src={currentSlide.src}
                alt={currentSlide.label}
                fill
                unoptimized
                className="object-cover"
                onError={() => handleError(originalIdx)}
              />
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(5,7,11,0.85) 100%)" }} />
          </motion.div>
        </AnimatePresence>

        {/* Top-left: live badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(5,7,11,0.8)", border: "1px solid rgba(112,167,255,0.25)", backdropFilter: "blur(8px)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-white/80">Built by Sourav</span>
        </div>

        {/* Top-right: counter */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(5,7,11,0.8)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
          <span className="text-[10px] font-mono text-white/50">{(current % validSlides.length) + 1}/{validSlides.length}</span>
        </div>

        {/* Bottom: project label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 z-10 p-4"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "#70A7FF" }}>{currentSlide?.sub}</p>
            <p className="text-base font-bold text-white">{currentSlide?.label}</p>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 z-20" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            key={`progress-${current}`}
            className="h-full"
            style={{ background: "linear-gradient(90deg, #70A7FF, #52E5E7)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </div>
      </div>

      {/* Dot strip */}
      <div className="flex gap-1.5 mt-4">
        {validSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current % validSlides.length ? 20 : 6,
              height: 6,
              background: i === current % validSlides.length ? "#70A7FF" : "rgba(112,167,255,0.2)",
            }}
          />
        ))}
      </div>

      {/* Stats row below showcase */}
      <div className="flex gap-6 mt-5">
        {[
          { v: "50+", l: "Products Built" },
          { v: "7+", l: "Years" },
          { v: "35+", l: "Games Shipped" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-xl font-black text-gradient-blue">{s.v}</p>
            <p className="text-[10px] text-white/30 mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#70A7FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B7CFF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#52E5E7]/3 rounded-full blur-3xl" />
      </div>
      <ParticleField />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#5EE6A8]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5EE6A8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5EE6A8]" />
              </span>
              <span className="text-[#5EE6A8] text-sm font-medium">Available — Immediate Joiner</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-white">Sourav</span><br />
                <span className="text-gradient-full">Mukherjee</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl font-mono font-medium text-[#9AA7B8] h-8">
              <TypewriterText texts={TITLES} />
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="text-lg text-[#5C6B80] italic font-light">
              &ldquo;{person.tagline}&rdquo;
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-3">
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#70A7FF] to-[#52E5E7] text-[#05070B] font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 hover:scale-105">
                View My Work
              </button>
              <a href="/resume.pdf" download className="px-6 py-3 rounded-xl border border-[#70A7FF]/40 text-[#70A7FF] font-semibold text-sm hover:bg-[#70A7FF]/10 transition-all hover:scale-105">
                Download Resume
              </a>
              <a href="mailto:souravmukherjee7991@gmail.com?subject=Hiring%20Inquiry"
                className="px-6 py-3 rounded-xl border border-[#5EE6A8]/40 text-[#5EE6A8] font-semibold text-sm hover:bg-[#5EE6A8]/10 transition-all hover:scale-105">
                Hire Me
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="grid grid-cols-3 gap-3 pt-2">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + i * 0.07 }}
                  className="glass rounded-xl p-3 text-center border border-white/5 hover:border-[#70A7FF]/20 transition-colors group">
                  <div className="text-2xl font-black text-gradient-blue">{m.value}</div>
                  <div className="text-xs text-[#5C6B80] mt-0.5 group-hover:text-[#9AA7B8] transition-colors">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: product showcase */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <ProductShowcase />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#5C6B80] font-mono">scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[#5C6B80]/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#70A7FF]/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

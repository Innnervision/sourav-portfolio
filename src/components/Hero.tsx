"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { person, metrics } from "@/data/resume";

const TITLES = [
  "Senior AI Engineer",
  "XR Architect",
  "Real-Time 3D Engineer",
  "Unity Tech Lead",
  "Generative AI Builder",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1600);
      return () => clearTimeout(t);
    }
    const target = texts[idx];
    if (!deleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPause(true);
        setIdx((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayed, deleting, idx, pause, texts]);

  return (
    <span className="text-gradient-blue">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(112, 167, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(112, 167, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#70A7FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B7CFF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#52E5E7]/3 rounded-full blur-3xl" />
      </div>

      <ParticleField />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#5EE6A8]/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5EE6A8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5EE6A8]" />
              </span>
              <span className="text-[#5EE6A8] text-sm font-medium">
                Available — Immediate Joiner
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-white">Sourav</span>
                <br />
                <span className="text-gradient-full">Mukherjee</span>
              </h1>
            </motion.div>

            {/* Typewriter title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl font-mono font-medium text-[#9AA7B8] h-8"
            >
              <TypewriterText texts={TITLES} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-[#5C6B80] italic font-light"
            >
              &ldquo;{person.tagline}&rdquo;
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#70A7FF] to-[#52E5E7] text-[#05070B] font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-[#70A7FF]/40 text-[#70A7FF] font-semibold text-sm hover:bg-[#70A7FF]/10 transition-all hover:scale-105"
              >
                Download Resume
              </a>
              <a
                href="mailto:souravmukherjee7991@gmail.com?subject=Hiring%20Inquiry"
                className="px-6 py-3 rounded-xl border border-[#5EE6A8]/40 text-[#5EE6A8] font-semibold text-sm hover:bg-[#5EE6A8]/10 transition-all hover:scale-105"
              >
                Hire Me
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.07 }}
                  className="glass rounded-xl p-3 text-center border border-white/5 hover:border-[#70A7FF]/20 transition-colors group"
                >
                  <div className="text-2xl font-black text-gradient-blue">{m.value}</div>
                  <div className="text-xs text-[#5C6B80] mt-0.5 group-hover:text-[#9AA7B8] transition-colors">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#70A7FF]/20 via-[#8B7CFF]/10 to-[#52E5E7]/20 blur-2xl animate-pulse-slow" />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[#70A7FF]/30 shadow-2xl shadow-blue-500/20">
                {!imgError ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    unoptimized
                    className="object-cover"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#111824] to-[#1a2438] flex items-center justify-center">
                    <span className="text-7xl font-black text-gradient-blue select-none">SM</span>
                  </div>
                )}
              </div>

              {/* Floating badge — location */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 border border-[#52E5E7]/20 shadow-lg"
              >
                <div className="text-xs text-[#9AA7B8]">Based in</div>
                <div className="text-sm font-semibold text-[#52E5E7]">Kolkata, India</div>
              </motion.div>

              {/* Floating badge — years */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 border border-[#70A7FF]/20 shadow-lg"
              >
                <div className="text-xs text-[#9AA7B8]">Experience</div>
                <div className="text-sm font-semibold text-[#70A7FF]">7+ Years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#5C6B80] font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[#5C6B80]/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#70A7FF]/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

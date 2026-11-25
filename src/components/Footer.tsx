"use client";

import Link from "next/link";
import { person } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#70A7FF] to-[#8B7CFF] flex items-center justify-center font-bold text-xs text-white">
            SM
          </div>
          <div>
            <div className="text-sm font-semibold text-white/80">{person.name}</div>
            <div className="text-xs text-[#5C6B80]">{person.title}</div>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-xs text-[#5C6B80]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <a href="https://universeinvedors.tech/white-label" target="_blank" rel="noopener noreferrer" className="text-[#5EE6A8] hover:underline transition-colors">White-Label &amp; Custom Builds</a>
          <a href="mailto:rajmukherjee042@gmail.com?subject=Custom%20Project%20Inquiry" className="text-[#70A7FF] hover:underline transition-colors">Free to Talk</a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#5C6B80]">
          © {year} {person.name}
        </div>
      </div>
    </footer>
  );
}

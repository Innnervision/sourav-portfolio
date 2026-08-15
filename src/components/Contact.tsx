"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { person } from "@/data/resume";

const contactMethods = [
  {
    icon: "✉️",
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    color: "#70A7FF",
    description: "Best for detailed inquiries",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: person.phone,
    href: `https://wa.me/918918487914?text=Hi%20Sourav%2C%20I%27d%20like%20to%20discuss%20an%20opportunity.`,
    color: "#5EE6A8",
    description: "Quick messages & calls",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "souravmukherjee-xr",
    href: person.linkedin,
    color: "#52E5E7",
    description: "Professional network",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "Innnervision",
    href: person.github,
    color: "#8B7CFF",
    description: "Code & projects",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:${person.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#70A7FF]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#70A7FF] font-mono text-sm">06.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#70A7FF]/30 to-transparent ml-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#9AA7B8] text-lg mb-12 max-w-2xl"
        >
          Available for senior engineering roles, technical leadership positions, and consulting engagements. 
          Immediate joiner — let&apos;s build something exceptional.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-white/15 transition-all card-hover group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${method.color}15`, border: `1px solid ${method.color}25` }}
                >
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#5C6B80] font-medium mb-0.5">{method.label}</div>
                  <div
                    className="text-sm font-semibold truncate group-hover:opacity-90 transition-opacity"
                    style={{ color: method.color }}
                  >
                    {method.value}
                  </div>
                  <div className="text-xs text-[#5C6B80] mt-0.5">{method.description}</div>
                </div>
                <span className="text-[#5C6B80] group-hover:text-white transition-colors">↗</span>
              </motion.a>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-5 border border-[#5EE6A8]/20 mt-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5EE6A8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5EE6A8]" />
                </span>
                <span className="text-[#5EE6A8] font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-[#9AA7B8] text-sm">
                Immediate joiner. Available for senior roles in AI engineering, XR development, technical leadership and consulting.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-white/5 space-y-4">
              <h3 className="font-bold text-white text-lg mb-5">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#9AA7B8] mb-1.5 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#5C6B80] focus:outline-none focus:border-[#70A7FF]/50 focus:bg-[#70A7FF]/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#9AA7B8] mb-1.5 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#5C6B80] focus:outline-none focus:border-[#70A7FF]/50 focus:bg-[#70A7FF]/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#9AA7B8] mb-1.5 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Hiring Inquiry / Collaboration / Contract"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#5C6B80] focus:outline-none focus:border-[#70A7FF]/50 focus:bg-[#70A7FF]/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs text-[#9AA7B8] mb-1.5 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#5C6B80] focus:outline-none focus:border-[#70A7FF]/50 focus:bg-[#70A7FF]/5 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#70A7FF] to-[#8B7CFF] text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
              >
                {submitted ? "✓ Message Opened in Email Client" : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

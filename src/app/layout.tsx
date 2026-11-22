import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resume.universeinvedors.tech"),
  title: {
    default: "Sourav Mukherjee — Senior AI, XR & Real-Time 3D Engineer",
    template: "%s | Sourav Mukherjee",
  },
  description:
    "Senior AI, XR & Real-Time 3D Engineer with 7+ years building production-grade AI systems, XR training platforms, metaverse environments, 50+ games and cloud products. Immediate joiner based in Kolkata, India.",
  keywords: [
    "Sourav Mukherjee", "Senior Unity Developer", "XR Engineer", "AI Engineer",
    "Real-Time 3D Engineer", "Unity Developer India", "Metaverse Developer",
    "AR VR Developer", "Generative AI Engineer", "Meta Quest Developer",
    "Game Developer India", "Flutter Developer", "Python AI Engineer",
    "Kolkata Engineer", "Immediate Joiner", "Universe Invedors",
  ],
  authors: [{ name: "Sourav Mukherjee", url: "https://resume.universeinvedors.tech" }],
  creator: "Sourav Mukherjee",
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sourav Mukherjee — Senior AI, XR & Real-Time 3D Engineer",
    description:
      "7+ years building production AI systems, XR training platforms, 50+ games and cloud products. Free to talk — custom projects welcomed across all budgets.",
    url: "https://resume.universeinvedors.tech",
    siteName: "Sourav Mukherjee Portfolio",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/SouravMukherjeeCEO.png", width: 1200, height: 630, alt: "Sourav Mukherjee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Mukherjee — Senior AI, XR & Real-Time 3D Engineer",
    description: "7+ years building production-grade AI, XR and real-time 3D solutions. Custom projects welcomed across all budgets.",
    creator: "@universeinvedors",
    images: ["/images/SouravMukherjeeCEO.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sourav Mukherjee",
  jobTitle: "Senior AI, XR & Real-Time 3D Engineer",
  description: "Senior AI, XR & Real-Time 3D Engineer with 7+ years of experience building production-grade applications, games, metaverse platforms, AI systems and cloud solutions.",
  url: "https://resume.universeinvedors.tech",
  image: "https://resume.universeinvedors.tech/images/SouravMukherjeeCEO.png",
  email: "souravmukherjee7991@gmail.com",
  telephone: "+91-8918487914",
  address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
  sameAs: [
    "https://www.linkedin.com/in/sourav-mukherjee-xr-architect/",
    "https://github.com/Innnervision",
    "https://universeinvedors.tech",
    "https://universeinvedors.tech/white-label",
  ],
  worksFor: { "@type": "Organization", name: "Universe Invedors", url: "https://universeinvedors.tech" },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Haldia Institute of Technology" },
    { "@type": "EducationalOrganization", name: "Techno India Salt Lake" },
  ],
  knowsAbout: ["Unity", "XR Development", "Artificial Intelligence", "Generative AI", "Computer Vision", "Flutter", "AWS", "Python", "PyTorch", "Game Development", "WebGL", "Three.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#05070B" />
        {/* Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-8759032363251002" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

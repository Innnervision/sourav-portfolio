import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sourav Mukherjee — Senior AI, XR & Real-Time 3D Engineer",
  description:
    "Senior AI, XR & Real-Time 3D Engineer with 7+ years building production-grade games, metaverse platforms, AI systems and cloud solutions. Available for immediate joining.",
  keywords: [
    "Sourav Mukherjee",
    "XR Engineer",
    "Unity Developer",
    "AI Engineer",
    "Real-Time 3D",
    "Metaverse",
    "AR VR",
    "Generative AI",
    "Kolkata",
  ],
  authors: [{ name: "Sourav Mukherjee" }],
  openGraph: {
    title: "Sourav Mukherjee — Senior AI, XR & Real-Time 3D Engineer",
    description:
      "Senior AI, XR & Real-Time 3D Engineer with 7+ years building production-grade games, metaverse platforms, AI systems and cloud solutions.",
    url: "https://resume.universeinvedors.tech",
    siteName: "Sourav Mukherjee Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Mukherjee — Senior AI, XR & Real-Time 3D Engineer",
    description:
      "7+ years building production-grade AI, XR and real-time 3D solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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

export const person = {
  name: "Sourav Mukherjee",
  title: "Senior AI, XR & Real-Time 3D Engineer",
  tagline: "I don't avoid difficult problems — I look for them.",
  location: "Kolkata, India",
  phone: "+91 8918487914",
  email: "souravmukherjee7991@gmail.com",
  github: "https://github.com/Innnervision",
  portfolio: "https://universeinvedors.tech",
  linkedin: "https://linkedin.com/in/souravmukherjee-xr",
  photo: "/images/SouravMukherjeeCEO.png",
  availability: "Immediate Joiner",
  bio: "Senior AI, XR & Real-Time 3D Engineer with 7+ years of experience building complex, production-grade applications, games, metaverse platforms, AI systems, and cloud solutions across multiple platforms.",
  philosophy:
    "I am passionate about solving highly complex technical challenges, learning new technologies, and taking ownership from concept to production. I strongly believe in growing with my team, sharing knowledge, mentoring others, and continuously learning whatever is needed to build better products together.",
};

export const metrics = [
  { value: "7+", label: "Years Engineering" },
  { value: "50+", label: "Games & Apps" },
  { value: "14+", label: "Team Leadership" },
  { value: "5+", label: "Platforms Shipped" },
  { value: "8+", label: "Industries Served" },
  { value: "A-Z", label: "Delivery Ownership" },
];

export const skills = [
  {
    category: "AI / GenAI",
    color: "#70A7FF",
    items: [
      "LLMs","AI Agents","RAG/Tool Workflows","Prompt Engineering","Hugging Face",
      "Stable Diffusion","TTS/STT","Model Orchestration","AI Automation","Transformers/Diffusers",
    ],
  },
  {
    category: "Unity / XR / 3D",
    color: "#52E5E7",
    items: [
      "Unity","C#","Unity 6","OpenXR","Meta Quest/Oculus","XR Interaction Toolkit",
      "AR Foundation","ARCore","ARKit","Vuforia","Zappar","WebXR","URP/HDRP","Shader Graph",
    ],
  },
  {
    category: "Generative 3D / CV",
    color: "#8B7CFF",
    items: [
      "Text-to-3D","Image-to-3D","NeRF","Gaussian Splatting","PyTorch3D",
      "Open3D","Kaolin","3D Reconstruction","Mesh Pipelines","Computer Vision","Sensor Fusion",
    ],
  },
  {
    category: "Full Stack",
    color: "#5EE6A8",
    items: [
      "Python","PyTorch","FastAPI","Flutter/Dart","React","Next.js","TypeScript",
      "Node.js","Express","Three.js","WebGL","REST APIs","Firebase","PostgreSQL","Redis",
    ],
  },
  {
    category: "Cloud / DevOps",
    color: "#F0B429",
    items: [
      "AWS Lambda","EC2","VPC","IAM","S3","CloudFront","Docker","Nginx",
      "GCP","Cloud Run","GKE","Kubernetes","Terraform","GitHub Actions","CI/CD",
    ],
  },
  {
    category: "Delivery",
    color: "#70A7FF",
    items: [
      "System Design","Technical Leadership","Agile/Scrum","Sprint Planning",
      "Code Reviews","Performance Profiling","Release Engineering","Google Play/App Store",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "Vinove Software Services",
    role: "Senior XR / Unity Developer",
    period: "Nov 2025 — Present",
    location: "Kolkata, India",
    color: "#52E5E7",
    achievements: [
      "Led engineering of BathXpertZ, a real-time 3D bathroom configuration and quotation platform supporting configurable layouts, catalog selection, BOQ/pricing, design cloning and CRM-oriented proposal workflows.",
      "Designed modular product-catalog, scene, material, pricing and multi-bathroom project architecture using reusable Unity components and data-driven workflows.",
      "Optimized interactive 3D performance through asset structuring, prefab reuse, material control, scene cleanup and platform-aware rendering decisions.",
      "Contributed to ChefConnect, a mobile-responsive home-chef marketplace with ordering, chef/admin dashboards, OTP authentication, payment flows and real-time order tracking.",
    ],
    technologies: ["Unity 3D","3D Product Visualisation","CRM Integration","React","Node.js","NestJS"],
  },
  {
    id: 2,
    company: "MGS Global Systems",
    role: "Tech Lead — Unity & XR",
    period: "March 2025 — Nov 2025",
    location: "Kolkata, India",
    color: "#70A7FF",
    achievements: [
      "Owned Unity/XR architecture for enterprise simulation, industrial metaverse and investor-facing product demonstrations across Android, iOS, WebGL and XR targets.",
      "Defined standards for scene structure, asset import, code quality, version control, CI/CD, profiling and release readiness for an 8+ member engineering group.",
      "Designed digital-twin and telemetry interaction patterns combining real-time 3D environments, cloud data and GenAI-assisted workflows.",
      "Mentored engineers on XR interaction design, debugging, performance optimization, Git workflows and production delivery discipline.",
    ],
    technologies: ["Unity 3D","GenAI","AR/VR","AWS","IoT Sensors","WebGL","Digital Twins"],
  },
  {
    id: 3,
    company: "Mobile Programming LLC",
    role: "Senior Software Developer",
    period: "Jan 2024 — Feb 2025",
    location: "Remote (US Client)",
    color: "#8B7CFF",
    achievements: [
      "Led R&D and end-to-end development of a cross-platform AR landscape application for Android, iOS and web, prioritizing tracking stability on real-world mobile devices.",
      "Evaluated AR Foundation, Vuforia, Zappar and WebAR approaches; designed computer-vision landmark detection and anchor-persistence concepts for improved tracking reliability.",
      "Applied camera and motion sensor-fusion concepts and native plugin integration while optimizing memory, textures, battery usage and runtime performance.",
    ],
    technologies: ["ARCore","ARKit","AR Foundation","Computer Vision","Sensor Fusion","Unity","Vuforia"],
  },
  {
    id: 4,
    company: "CBNITS India Pvt. Ltd.",
    role: "Senior Unity Developer",
    period: "Jan 2023 — Dec 2023",
    location: "Kolkata, India",
    color: "#5EE6A8",
    achievements: [
      "Led development of a Zuellig Pharma healthcare metaverse connecting doctors and patients through virtual consultation spaces, prescription workflows, medicine discovery and purchasing paths.",
      "Integrated Unity with REST APIs, payment SDKs and healthcare workflows while maintaining responsive real-time rendering and multi-scene UX.",
      "Coordinated with backend, design and stakeholder teams to deliver production-focused demonstrations and cross-platform releases.",
    ],
    technologies: ["Unity","WebXR","REST APIs","Payment SDKs","Meta Quest","C#"],
  },
  {
    id: 5,
    company: "SDLC Corp",
    role: "Full Stack XR Developer",
    period: "Jul 2021 — Dec 2022",
    location: "Remote (Japan Client)",
    color: "#F0B429",
    achievements: [
      "Built a Fujitsu industrial metaverse and digital-twin visualization platform that synchronized 2D analytics dashboards with interactive 3D environments.",
      "Implemented browser-based 3D workflows using Unity/WebGL and Three.js concepts with React, Node.js and real-time backend data patterns.",
      "Worked across scene management, data binding, frontend architecture and performance optimization for enterprise visualization use cases.",
    ],
    technologies: ["Three.js","WebGL","React","Node.js","WebSocket","PostgreSQL","Unity"],
  },
  {
    id: 6,
    company: "Virtualindocom",
    role: "Lead Game Developer",
    period: "Jun 2019 — Jun 2021",
    location: "Kolkata, India",
    color: "#52E5E7",
    achievements: [
      "Designed, developed and shipped 35+ Unity games for Android and iOS across arcade, casual, puzzle, card, educational and simulation genres.",
      "Owned prototype-to-publish delivery including gameplay systems, UI, ads and monetization SDKs, analytics, testing, optimization, store builds and post-launch support.",
      "Improved mobile runtime performance using object pooling, batching, texture compression, lightweight shaders, scene cleanup and memory-aware asset workflows.",
      "Mentored 10+ junior developers through code reviews, pair programming, onboarding, debugging and production delivery standards.",
    ],
    technologies: ["Unity","C#","Mobile Games","Monetization SDKs","Analytics","iOS/Android"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Haldia Institute of Technology",
    year: "2021",
    color: "#70A7FF",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Techno India Salt Lake",
    year: "2018",
    color: "#52E5E7",
  },
];

export const preferredRoles = [
  "Senior/Lead Unity Engineer",
  "XR Architect",
  "Generative AI Engineer",
  "AI/3D Engineer",
  "Technical Lead",
  "Full-Stack 3D Engineer",
];

export const languages = ["English (Fluent)", "Bengali (Native)", "Hindi (Conversational)"];

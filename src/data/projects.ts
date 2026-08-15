export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: "XR" | "AI" | "Games" | "Web" | "Digital Twin";
  description: string;
  technologies: string[];
  status: "Shipped" | "In Progress" | "R&D" | "Concept";
  year: string;
  featured: boolean;
  links: { live?: string; github?: string };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BathXpertZ",
    subtitle: "Real-Time 3D Bathroom Configurator",
    category: "XR",
    description:
      "Production-grade real-time 3D bathroom configuration and quotation platform. Users configure layouts, select from a product catalog, generate BOQ/pricing, clone designs and create CRM-oriented proposals — all rendered in interactive 3D.",
    technologies: ["Unity 3D","C#","3D Visualisation","CRM Integration","React","Node.js","NestJS"],
    status: "Shipped",
    year: "2025",
    featured: true,
    links: {},
  },
  {
    id: 2,
    title: "ChefConnect",
    subtitle: "Home-Chef Marketplace Platform",
    category: "Web",
    description:
      "Mobile-responsive marketplace connecting home chefs with customers. Features ordering flows, chef/admin dashboards, OTP authentication, payment integration, and real-time order tracking.",
    technologies: ["React","Node.js","NestJS","PostgreSQL","Firebase","Stripe"],
    status: "Shipped",
    year: "2025",
    featured: true,
    links: {},
  },
  {
    id: 3,
    title: "Airport Security VR Training",
    subtitle: "Enterprise VR Training Simulator",
    category: "XR",
    description:
      "Immersive VR training platform for airport security personnel. Simulates security checkpoint scenarios, threat detection, protocol compliance and emergency response in a safe virtual environment.",
    technologies: ["Unity","C#","Meta Quest","OpenXR","XR Interaction Toolkit","URP"],
    status: "Shipped",
    year: "2024",
    featured: true,
    links: {},
  },
  {
    id: 4,
    title: "Torrent Power VR Training",
    subtitle: "Industrial Safety VR Simulator",
    category: "XR",
    description:
      "VR-based safety training platform for Torrent Power plant operations. Enables workers to practice high-risk procedures — equipment handling, emergency protocols and safety compliance — in an immersive virtual environment.",
    technologies: ["Unity","C#","Meta Quest","OpenXR","URP","3D Modelling"],
    status: "Shipped",
    year: "2024",
    featured: true,
    links: {},
  },
  {
    id: 5,
    title: "Zuellig Pharma Medical Metaverse",
    subtitle: "Healthcare Virtual Consultation Platform",
    category: "XR",
    description:
      "Healthcare metaverse connecting doctors and patients through virtual consultation spaces. Supports prescription workflows, medicine discovery and purchasing paths with integrated payment SDKs and REST APIs.",
    technologies: ["Unity","C#","WebXR","REST APIs","Payment SDKs","Meta Quest"],
    status: "Shipped",
    year: "2023",
    featured: true,
    links: {},
  },
  {
    id: 6,
    title: "Fujitsu Industrial Metaverse",
    subtitle: "Digital-Twin Visualization Platform",
    category: "Digital Twin",
    description:
      "Industrial metaverse and digital-twin platform for Fujitsu synchronizing 2D analytics dashboards with interactive 3D environments. Built for enterprise-scale visualization of factory floor operations and IoT telemetry.",
    technologies: ["Three.js","WebGL","React","Node.js","WebSocket","PostgreSQL","Unity"],
    status: "Shipped",
    year: "2022",
    featured: true,
    links: {},
  },
  {
    id: 7,
    title: "Warehouse XR + Odoo",
    subtitle: "XR-Integrated Warehouse Management",
    category: "Digital Twin",
    description:
      "XR-powered warehouse management system integrated with Odoo ERP. Provides spatial navigation, inventory tracking overlays, pick-and-pack guidance and real-time data sync with the Odoo backend.",
    technologies: ["Unity","C#","OpenXR","Odoo","REST APIs","AR Foundation"],
    status: "Shipped",
    year: "2025",
    featured: false,
    links: {},
  },
  {
    id: 8,
    title: "AR Landscape (Government)",
    subtitle: "Cross-Platform AR Application",
    category: "XR",
    description:
      "Government-commissioned cross-platform AR landscape application for Android, iOS and web. Features computer-vision landmark detection, anchor persistence and sensor fusion for stable real-world tracking.",
    technologies: ["ARCore","ARKit","AR Foundation","Vuforia","Zappar","Unity","Computer Vision"],
    status: "Shipped",
    year: "2024",
    featured: false,
    links: {},
  },
  {
    id: 9,
    title: "AutoGameGen",
    subtitle: "AI-Powered Game Generation System",
    category: "AI",
    description:
      "Automated game generation pipeline using LLMs and generative AI to produce playable game prototypes from text prompts. Includes asset generation, level design, game logic scripting and Unity scene assembly.",
    technologies: ["Python","LLMs","Stable Diffusion","FastAPI","Unity","C#","RAG","Prompt Engineering"],
    status: "R&D",
    year: "2024",
    featured: true,
    links: { github: "https://github.com/Innnervision" },
  },
  {
    id: 10,
    title: "Boat Rescue Training",
    subtitle: "Maritime Emergency VR Simulator",
    category: "XR",
    description:
      "VR simulation for maritime rescue personnel covering emergency response scenarios, vessel operations and water rescue techniques in a realistic real-time 3D environment.",
    technologies: ["Unity","C#","OpenXR","URP","Water Simulation","XR Interaction Toolkit"],
    status: "Shipped",
    year: "2024",
    featured: false,
    links: {},
  },
  {
    id: 11,
    title: "AI Scientific Video Generator",
    subtitle: "Automated Research Video Pipeline",
    category: "AI",
    description:
      "End-to-end AI pipeline that converts scientific papers and research content into narrated explainer videos. Combines LLMs for scripting, TTS for voiceover, image generation for visuals and automated video assembly.",
    technologies: ["Python","LLMs","TTS","Stable Diffusion","FastAPI","FFmpeg","Hugging Face"],
    status: "Shipped",
    year: "2024",
    featured: true,
    links: {},
  },
  {
    id: 12,
    title: "CreatorBridge",
    subtitle: "AI-Powered Content Creator Platform",
    category: "AI",
    description:
      "Platform connecting brands with content creators through AI-driven matching, campaign management and performance analytics. Uses LLM agents for automated brief generation and creator discovery.",
    technologies: ["React","Next.js","Node.js","PostgreSQL","Python","LLMs","FastAPI"],
    status: "Shipped",
    year: "2025",
    featured: false,
    links: {},
  },
  {
    id: 13,
    title: "CareerMaster AI",
    subtitle: "AI Career Coaching Platform",
    category: "AI",
    description:
      "AI-driven career coaching platform with resume analysis, interview simulation, personalized learning roadmaps and job matching. Powered by RAG workflows and LLM agents.",
    technologies: ["Python","LLMs","RAG","FastAPI","React","Next.js","PostgreSQL","Redis"],
    status: "In Progress",
    year: "2025",
    featured: false,
    links: {},
  },
  {
    id: 14,
    title: "CityVerse",
    subtitle: "Urban Planning Metaverse Platform",
    category: "Digital Twin",
    description:
      "Metaverse platform for urban planning and smart city visualization. Enables city planners and citizens to explore proposed infrastructure projects, simulate traffic flow, and collaborate in shared virtual spaces.",
    technologies: ["Unity","C#","WebXR","Three.js","GIS Data","REST APIs","React"],
    status: "Concept",
    year: "2025",
    featured: false,
    links: {},
  },
  {
    id: 15,
    title: "Chess Kingdom",
    subtitle: "3D Multiplayer Chess Game",
    category: "Games",
    description:
      "Premium 3D chess game for Android and iOS with AI opponent at multiple difficulty levels, multiplayer matchmaking, ranking system, animated pieces and immersive board environments.",
    technologies: ["Unity","C#","Mirror Networking","PlayFab","Android","iOS"],
    status: "Shipped",
    year: "2021",
    featured: false,
    links: {},
  },
  {
    id: 16,
    title: "Neural Ninja",
    subtitle: "Fast-Paced Arcade Action Game",
    category: "Games",
    description:
      "High-energy arcade action game with procedurally generated levels, combo-based combat, power-up systems and global leaderboards. Optimized for smooth 60fps mobile gameplay.",
    technologies: ["Unity","C#","Android","iOS","AdMob","Unity Analytics"],
    status: "Shipped",
    year: "2020",
    featured: false,
    links: {},
  },
  {
    id: 17,
    title: "Neon Eclipse",
    subtitle: "Cyberpunk Endless Runner",
    category: "Games",
    description:
      "Cyberpunk-themed endless runner with dynamic obstacle generation, neon visual effects, shader-driven environments, in-app purchases and rewarded ad integration.",
    technologies: ["Unity","C#","Shader Graph","URP","Android","iOS","Unity IAP"],
    status: "Shipped",
    year: "2020",
    featured: false,
    links: {},
  },
  {
    id: 18,
    title: "CultivationInVR",
    subtitle: "VR Farming & Cultivation Simulator",
    category: "XR",
    description:
      "Immersive VR farming simulation covering crop cultivation, soil management, irrigation and harvest. Designed for agricultural education and training with realistic plant growth mechanics.",
    technologies: ["Unity","C#","Meta Quest","OpenXR","URP","Interaction Toolkit"],
    status: "Shipped",
    year: "2023",
    featured: false,
    links: {},
  },
  {
    id: 19,
    title: "AstroNavigator",
    subtitle: "Educational Space Exploration Game",
    category: "Games",
    description:
      "Educational space exploration game for kids covering astronomy, planets, stars and space navigation. Features interactive 3D solar system, quizzes and mission-based learning.",
    technologies: ["Unity","C#","Android","iOS","3D Modelling","Unity Analytics"],
    status: "Shipped",
    year: "2020",
    featured: false,
    links: {},
  },
  {
    id: 20,
    title: "Kids Math Adventure",
    subtitle: "Gamified Math Learning App",
    category: "Games",
    description:
      "Gamified mathematics learning app for children ages 5-12. Covers arithmetic, geometry and logic with adaptive difficulty, reward systems and parent progress dashboards.",
    technologies: ["Unity","C#","Android","iOS","Firebase","Unity Ads"],
    status: "Shipped",
    year: "2021",
    featured: false,
    links: {},
  },
  {
    id: 21,
    title: "Kids Anatomy Adventure",
    subtitle: "Interactive 3D Anatomy Learning",
    category: "Games",
    description:
      "Interactive 3D human anatomy exploration app for children. Features animated organ systems, health facts, quizzes and a guided journey through the human body with age-appropriate content.",
    technologies: ["Unity","C#","3D Modelling","Android","iOS","AR Foundation"],
    status: "Shipped",
    year: "2021",
    featured: false,
    links: {},
  },
  {
    id: 22,
    title: "Human Body Simulation",
    subtitle: "Medical Training Simulation Platform",
    category: "XR",
    description:
      "Detailed VR simulation of human body systems for medical training. Covers cardiovascular, respiratory and nervous systems with interactive anatomy, procedure simulation and clinical case studies.",
    technologies: ["Unity","C#","Meta Quest","OpenXR","3D Medical Assets","URP"],
    status: "Shipped",
    year: "2023",
    featured: false,
    links: {},
  },
];

export const categories = ["All", "XR", "AI", "Games", "Web", "Digital Twin"] as const;
export type Category = (typeof categories)[number];

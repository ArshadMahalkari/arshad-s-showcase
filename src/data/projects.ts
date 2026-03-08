export interface Project {
  id: string;
  title: string;
  category: string[];
  stack: string[];
  problem: string;
  role: string;
  features: string[];
  impact: string;
  flagship?: boolean;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "mentoros",
    title: "MentorOS",
    category: ["Full-Stack", "AI/ML"],
    stack: ["Next.js", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase Auth", "OpenAI API"],
    problem: "Students struggle to track and plan learning across DSA, AI, and development simultaneously.",
    role: "Solo Full-Stack Developer",
    features: ["AI-generated learning plans", "Progress tracking", "Smart reminders", "Goal dashboard"],
    impact: "Demonstrates full-stack ability, AI integration, and product thinking at student level.",
    flagship: true,
    github: "#",
    live: "#",
  },
  {
    id: "meet-ai",
    title: "Meet.AI",
    category: ["Full-Stack", "AI/ML"],
    stack: ["Next.js 15", "React", "Better Auth", "Polar database"],
    problem: "Developers need a platform to build and deploy AI agents with proper auth and scalable backend.",
    role: "Full-Stack Developer",
    features: ["User authentication", "Role management", "Scalable backend", "AI-driven agent capabilities", "Modular architecture", "Real-world automation tasks"],
    impact: "Production-grade AI agent platform with enterprise-level authentication.",
    github: "#",
    live: "#",
  },
  {
    id: "medilens",
    title: "MediLens",
    category: ["AI/ML"],
    stack: ["Multimodal AI", "Python", "React"],
    problem: "Patients struggle to understand complex medical reports and prescriptions.",
    role: "AI Developer",
    features: ["Upload medical reports", "Extract key parameters", "Highlight abnormal values", "Generate plain-language summaries", "Role-based workflow for patients and healthcare providers"],
    impact: "Healthcare AI bringing accessibility to medical report comprehension.",
    github: "#",
  },
  {
    id: "cryptox",
    title: "CryptoX",
    category: ["Full-Stack", "AI/ML"],
    stack: ["React", "Node.js", "MongoDB", "Crypto APIs", "AI"],
    problem: "Crypto investors need real-time analytics and AI-driven price forecasting in one place.",
    role: "Full-Stack Developer",
    features: ["Real-time market data", "Portfolio tracking", "Interactive dashboards", "Secure auth", "AI-assisted trend analysis", "Price forecasting"],
    impact: "Full-stack fintech with AI-powered analytics.",
    github: "#",
    live: "#",
  },
  {
    id: "stockpredicta",
    title: "StockPredicta",
    category: ["AI/ML"],
    stack: ["Python", "LSTM Neural Networks", "Time-Series Analysis"],
    problem: "Retail investors lack accessible stock trend forecasting tools.",
    role: "ML Engineer",
    features: ["Data collection", "Cleaning & preprocessing", "Feature engineering", "Model training", "Prediction visualization"],
    impact: "Deep learning applied to real-world financial forecasting.",
    github: "#",
  },
  {
    id: "kolhapur-explorer",
    title: "Kolhapur Explorer",
    category: ["Full-Stack"],
    stack: ["Web App", "Google Maps API"],
    problem: "Tourists and locals in Kolhapur have no unified platform to discover heritage, food, and facilities.",
    role: "Full-Stack Developer",
    features: ["Heritage Explorer", "Know Your Town", "Kolhapur Foodies modules"],
    impact: "Civic tech — real-world community problem solving.",
    github: "#",
    live: "#",
  },
];

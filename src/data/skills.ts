export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "Vercel"],
  },
  {
    title: "AI / ML / Data Science",
    icon: "🤖",
    skills: ["Machine Learning", "Deep Learning", "LSTM Models", "Generative AI", "Data Analysis", "Predictive Modeling", "Prompt Engineering"],
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    skills: ["Git", "GitHub", "Firebase", "Vercel", "Polar", "Arduino", "OpenAI API", "Google Maps API", "AWS Cloud", "Docker"],
  },
  {
    title: "CS Fundamentals",
    icon: "📚",
    skills: ["DSA", "OOPs", "OS", "DBMS", "Computer Networks"],
  },
];

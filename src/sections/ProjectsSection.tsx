import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { Github, ExternalLink, Star, ArrowRight } from "lucide-react";

const filters = ["All", "Full-Stack", "AI/ML", "Open Source"];

const ProjectCard = ({ project }: { project: Project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative h-[380px] perspective-1000"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div className="absolute inset-0 glass-card-hover p-6 flex flex-col" style={{ backfaceVisibility: "hidden" }}>
          {project.flagship && (
            <div className="absolute top-4 right-4 flex items-center gap-1 badge-chip-accent text-xs">
              <Star size={12} /> Flagship
            </div>
          )}
          <div className="h-32 rounded-lg mb-4 flex items-center justify-center"
               style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(139,92,246,0.08), rgba(236,72,153,0.05))" }}>
            <span className="font-heading text-2xl font-bold gradient-text">{project.title}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.category.map((c) => (
              <span key={c} className="badge-chip-accent text-[10px]">{c}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.slice(0, 5).map((s) => (
              <span key={s} className="badge-chip text-muted-foreground text-[10px]">{s}</span>
            ))}
            {project.stack.length > 5 && (
              <span className="badge-chip text-muted-foreground text-[10px]">+{project.stack.length - 5}</span>
            )}
          </div>
          <div className="mt-auto flex items-center gap-1 text-xs text-muted-foreground">
            <span>Click to flip</span> <ArrowRight size={12} />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card p-6 flex flex-col overflow-auto"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{project.title}</h3>
          <p className="text-xs text-muted-foreground mb-2"><strong className="text-foreground">Problem:</strong> {project.problem}</p>
          <p className="text-xs text-muted-foreground mb-2"><strong className="text-foreground">Role:</strong> {project.role}</p>
          <div className="mb-2">
            <strong className="text-xs text-foreground">Key Features:</strong>
            <ul className="mt-1 space-y-0.5">
              {project.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-start gap-1">
                  <span className="text-primary mt-0.5">•</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-muted-foreground mb-4"><strong className="text-foreground">Impact:</strong> {project.impact}</p>
          <div className="mt-auto flex gap-3">
            {project.github && (
              <a href={project.github} onClick={(e) => e.stopPropagation()} className="glow-button text-xs text-foreground flex items-center gap-1.5 px-4 py-2">
                <Github size={14} /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} onClick={(e) => e.stopPropagation()} className="glow-button-solid text-xs flex items-center gap-1.5 px-4 py-2">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category.some((c) => c === activeFilter || (activeFilter === "Open Source" && false)));

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground font-body">I build solutions, not just study technologies.</p>
      </motion.div>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {filters.map((f) => (
          <motion.button
            key={f}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
              activeFilter === f
                ? "glow-button-solid"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

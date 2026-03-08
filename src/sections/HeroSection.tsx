import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import HeroBackground from "../components/HeroBackground";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 2.8 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(240 20% 4%) 80%)" }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* Profile photo placeholder */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full gradient-border animate-pulse-glow flex items-center justify-center"
               role="img" aria-label="Arshad Mahalkari profile avatar"
               style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(139,92,246,0.1))" }}>
            <span className="font-heading text-4xl font-bold gradient-text" aria-hidden="true">A</span>
          </div>
        </motion.div>

        <motion.p variants={item} className="text-sm md:text-base text-muted-foreground font-body mb-2 tracking-widest uppercase">
          Hi, I'm
        </motion.p>
        <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold gradient-text mb-4">
          Arshad Mahalkari
        </motion.h1>
        <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground font-body mb-4">
          Software Engineer | Full-Stack & AI/ML Developer
        </motion.p>
        <motion.p variants={item} className="text-sm md:text-base text-muted-foreground/70 font-body max-w-2xl mx-auto mb-8">
          Building AI-powered applications and scalable web solutions focused on real-world impact.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="glow-button-solid text-sm font-semibold"
          >
            View Projects
          </button>
          <a href="/resume/ArshadMahalkari_Resume.pdf" download className="glow-button text-sm text-foreground">
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="flex gap-5 justify-center">
          {[
            { icon: <Github size={20} />, href: "#", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:arshadmahalkari@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full glass-card-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-16 flex justify-center"
        >
          <ChevronDown size={24} className="text-muted-foreground animate-scroll-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

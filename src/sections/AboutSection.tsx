import { motion } from "framer-motion";

const AboutSection = () => {
  const languages = ["English", "Hindi", "Marathi"];
  const interests = ["AI", "Machine Learning", "Web Development", "DSA"];
  const personality = ["Curious", "Self-driven", "Builder Mindset", "Community-oriented"];

  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 id="about-heading" className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="glass-card p-6 md:p-10 grid md:grid-cols-[280px_1fr] gap-8">
          {/* Left */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-2xl gradient-border mb-4 flex items-center justify-center"
                 role="img" aria-label="Arshad Mahalkari initials"
                 style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(139,92,246,0.08))" }}>
              <span className="font-heading text-5xl font-bold gradient-text">AM</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Arshad Mahalkari</h3>
            <span className="badge-chip-accent mt-2">Software Engineer</span>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <p className="font-body text-muted-foreground leading-relaxed">
              2nd-year Computer Science Engineering student at DYPCET (Class of 2028) passionate about building AI-powered applications, scalable web systems, and solving real-world problems. Curious, self-driven, and community-oriented — I don't just learn technologies, I build solutions.
            </p>

            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => <span key={l} className="badge-chip text-muted-foreground">{l}</span>)}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="badge-chip-accent"
                  >
                    {i}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Personality</h4>
              <div className="flex flex-wrap gap-2">
                {personality.map((p) => <span key={p} className="badge-chip text-muted-foreground">{p}</span>)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

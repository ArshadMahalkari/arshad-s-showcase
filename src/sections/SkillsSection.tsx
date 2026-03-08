import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Skills & <span className="gradient-text">Tech Stack</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card-hover p-6 group"
          >
            <div className="text-3xl mb-3">{cat.icon}</div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="badge-chip text-muted-foreground text-xs group-hover:border-primary/20 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

import { motion } from "framer-motion";
import { experiences } from "../data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] timeline-line opacity-30" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-[11px] md:left-[19px] top-2 w-3 h-3 rounded-full border-2 border-primary"
                   style={{ background: "hsl(240 20% 4%)", boxShadow: "0 0 10px rgba(0,245,255,0.4)" }} />

              <div className="glass-card-hover p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading text-base font-semibold text-foreground">{exp.title}</h3>
                  <span className="badge-chip text-muted-foreground text-xs">{exp.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 shrink-0">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

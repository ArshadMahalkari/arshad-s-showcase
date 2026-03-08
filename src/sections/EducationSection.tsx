import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        <span className="gradient-text">Education</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-hover p-6"
        >
          <GraduationCap size={24} className="text-primary mb-3" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">B.Tech — Computer Science Engineering</h3>
          <p className="text-sm text-muted-foreground mb-2">D. Y. Patil College of Engineering and Technology (DYPCET)</p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
            <span className="badge-chip">2024 – 2028</span>
            <span className="badge-chip-accent">CGPA: 9.4</span>
          </div>
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Coursework:</strong> DSA · Algorithms · DBMS · OS · ML · CN
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-hover p-6"
        >
          <GraduationCap size={24} className="text-primary mb-3" />
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">HSC — Rajaram College</h3>
              <div className="flex gap-3 mt-1">
                <span className="badge-chip text-xs text-muted-foreground">2024</span>
                <span className="badge-chip text-xs text-muted-foreground">70%</span>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">SSC — Private High School</h3>
              <div className="flex gap-3 mt-1">
                <span className="badge-chip text-xs text-muted-foreground">2022</span>
                <span className="badge-chip-accent text-xs">91.8%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 text-center gradient-border"
      >
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          Want to know more about my work?
        </h2>
        <p className="text-muted-foreground font-body mb-6">
          Download my resume for a detailed overview of my skills, projects, and experience.
        </p>
        <a
          href="/resume/ArshadMahalkari_Resume.pdf"
          download
          className="glow-button-solid inline-flex items-center gap-2 text-sm font-semibold"
        >
          <Download size={16} /> Download Resume PDF
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeSection;

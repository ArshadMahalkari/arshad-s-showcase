import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        <span className="gradient-text">Certifications</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -3 }}
            className="glass-card-hover p-5 gradient-border"
          >
            <Award size={20} className="text-primary mb-3" />
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{cert.name}</h3>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground/60 mt-1">{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;

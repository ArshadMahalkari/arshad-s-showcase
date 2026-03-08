import { motion } from "framer-motion";
import { Trophy, Globe, Github, Youtube, Users } from "lucide-react";

const achievements = [
  { icon: <Trophy size={20} />, text: "Adobe Hackathon 2025 — Round 1A Qualified" },
  { icon: <Trophy size={20} />, text: "Participated in SIH, Imagine Cup, DeepMind, Kaggle Hackathons" },
  { icon: <Globe size={20} />, text: "GitHub Student Developer Pack Member" },
  { icon: <Youtube size={20} />, text: "Tech Content Creator — CodeCuriosity (YouTube Channel)" },
  { icon: <Users size={20} />, text: "Active in GDG & E-Cell Communities" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Achievements & <span className="gradient-text">Community</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card-hover p-5 flex items-start gap-3"
          >
            <span className="text-primary shrink-0 mt-0.5">{a.icon}</span>
            <p className="font-body text-sm text-muted-foreground">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;

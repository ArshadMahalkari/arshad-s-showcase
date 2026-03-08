import { useState } from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import GlowCursor from "../components/ui/GlowCursor";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import CertificationsSection from "../sections/CertificationsSection";
import AchievementsSection from "../sections/AchievementsSection";
import EducationSection from "../sections/EducationSection";
import ResumeSection from "../sections/ResumeSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <GlowCursor />
      {loaded && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <AchievementsSection />
            <EducationSection />
            <ResumeSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;

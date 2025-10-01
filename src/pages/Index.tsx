import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import AdminPanel from "@/components/AdminPanel";
import portfolioDataImport from "@/data/portfolio.json";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState(portfolioDataImport);

  useEffect(() => {
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error("Failed to load saved portfolio data:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Animate skill bars on scroll
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  const handleLogoClick = () => {
    setLogoClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setIsAdminOpen(true);
        return 0;
      }
      return newCount;
    });
  };

  const handleSavePortfolioData = (newData: any) => {
    setPortfolioData(newData);
    localStorage.setItem("portfolioData", JSON.stringify(newData));
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onLogoClick={handleLogoClick} />
      <main>
        <HeroSection profile={portfolioData.profile} />
        <AboutSection profile={portfolioData.profile} />
        <ExperienceSection experiences={portfolioData.experiences} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <AwardsSection awards={portfolioData.awards} />
        <ContactSection profile={portfolioData.profile} />
      </main>
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        portfolioData={portfolioData}
        onSave={handleSavePortfolioData}
      />
    </div>
  );
};

export default Index;

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  profile: {
    name: string;
    tagline: string;
    shortIntro: string;
    profileImage: string;
  };
}

const HeroSection = ({ profile }: HeroSectionProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-3xl overflow-hidden ring-4 ring-primary/20 animate-scale-in">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {profile.tagline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {profile.shortIntro}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="hero-gradient text-white hover:opacity-90 transition-opacity px-8"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => {
                const projectsSection = document.querySelector("#projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

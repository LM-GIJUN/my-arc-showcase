import { Calendar, Briefcase, Users, GitCommit } from "lucide-react";

interface AboutSectionProps {
  profile: {
    name: string;
    tagline: string;
    detailedIntro: string;
    kpis: Array<{
      label: string;
      value: string;
      icon: string;
    }>;
  };
}

const iconMap: Record<string, any> = {
  calendar: Calendar,
  briefcase: Briefcase,
  users: Users,
  "git-commit": GitCommit,
};

const AboutSection = ({ profile }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-xl animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{profile.name}</h3>
            <p className="text-xl text-primary mb-6">{profile.tagline}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.detailedIntro}
            </p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {profile.kpis.map((kpi, index) => {
              const Icon = iconMap[kpi.icon];
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{kpi.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

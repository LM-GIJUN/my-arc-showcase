import { Award, Trophy, GraduationCap, BadgeCheck, BookOpen } from "lucide-react";

interface Award {
  id: string;
  title: string;
  category: string;
  period: string;
  organization: string;
  description: string;
  icon: string;
}

interface AwardsSectionProps {
  awards: Award[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  trophy: Trophy,
  "graduation-cap": GraduationCap,
  "badge-check": BadgeCheck,
  "book-open": BookOpen,
};

const categoryColors: Record<string, string> = {
  certification: "bg-blue-500",
  achievement: "bg-amber-500",
  training: "bg-green-500",
};

const AwardsSection = ({ awards }: AwardsSectionProps) => {
  return (
    <section id="awards" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Awards & Certifications</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = iconMap[award.icon] || Award;
            const bgColor = categoryColors[award.category] || "bg-primary";

            return (
              <div
                key={award.id}
                className="glass-card p-6 rounded-xl hover:shadow-xl transition-all group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">
                      {award.period}
                    </div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-medium text-primary mb-2">
                  {award.organization}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {award.description}
                </p>

                <div className="inline-block">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${bgColor} text-white capitalize`}
                  >
                    {award.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

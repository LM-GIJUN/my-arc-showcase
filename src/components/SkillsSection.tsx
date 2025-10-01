import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  success: "bg-green-500",
  warning: "bg-amber-500",
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((category, catIndex) => (
            <div
              key={category.category}
              className="glass-card p-8 rounded-xl shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className={`w-1 h-8 ${colorMap[category.color]} rounded-full`} />
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span
                        className={`text-sm font-bold transition-all ${
                          hoveredSkill === skill.name
                            ? "text-primary scale-110"
                            : "text-muted-foreground"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colorMap[category.color]} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

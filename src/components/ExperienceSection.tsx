import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-[7px] rounded-full bg-primary ring-4 ring-background animate-glow" />

                  {/* Content Card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="glass-card p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Key Achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

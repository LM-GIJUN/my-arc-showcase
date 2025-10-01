import { Mail, Phone, MapPin, Github, Linkedin, Globe, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ContactSectionProps {
  profile: {
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      website: string;
      kakao: string;
    };
  };
}

const ContactSection = ({ profile }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-xl animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let's Work Together
              </h3>
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-muted-foreground">{profile.phone}</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <p className="font-semibold">Location</p>
                <p className="text-sm text-muted-foreground">{profile.location}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="hero-gradient text-white"
                asChild
              >
                <a href={`mailto:${profile.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={copyEmail}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href={profile.social.kakao} target="_blank" rel="noopener noreferrer">
                  KakaoTalk
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href={profile.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

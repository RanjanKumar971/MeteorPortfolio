import { Briefcase, Code, Cpu, Layers, Layout, User } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {

  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };
  
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm passionate about turning complex problems into elegant,
              efficient solutions.
            </p>
            <p className="text-muted-foreground">
              I enjoy exploring new technologies, improving my fundamentals, and
              staying updated in the fast-evolving world of web development.
            </p>
            <p className="text-muted-foreground">
              Learning, experimenting, and building meaningful projects are what
              drive me to grow as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Resume'.pdf"
                download="Ranjan_Resume.pdf"
                onClick={handleDownload}
                className="cosmic-button bg-transparent border border-primary text-primary"
              >
                {downloading ? "Downloading…" : "Download Resume"}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover border border-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Java Development</h4>
                  <p className="text-muted-foreground">
                    Building robust backend systems using Java, OOP principles,
                    and clean architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover border border-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, user-focused web applications using
                    MERN and modern UI frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover border border-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA & LeetCode</h4>
                  <p className="text-muted-foreground">
                    Strengthening problem-solving skills through consistent
                    coding and algorithm practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

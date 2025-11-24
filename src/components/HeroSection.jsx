import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Ranjan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Kumar
            </span>
          </h1>
          <h2 className="text-primary">
            Java Developer <span className="text-white">•</span> Full-Stack Web
            Developer <span className="text-white">•</span> DSA/LeetCode
            Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            I build scalable backend systems, clean user interfaces, and solve
            complex problems through data structures and algorithms. Passionate
            about creating real-world projects and constantly improving my
            skills.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        {/* <span className="text-sm text-muted-foreground mb-2"> Scroll </span> */}
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

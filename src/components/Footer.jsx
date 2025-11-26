import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
      <footer className="relative z-10 bg-transparent w-full px-4 py-6 flex flex-col items-center md:flex-row md:justify-between md:items-center text-[hsl(var(--foreground))]">
        {/* Left Section */}
        <div className="flex flex-col items-center md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
          <a className="text-xl text-primary flex items-centre">
            <span className="">
              <span className="text-glow text-foreground"> Ranjan's </span>
              Portfolio
            </span>
          </a>
          <p className="text-lg text-[hsl(var(--foreground))]">
            | {new Date().getFullYear()} &copy; Copyright
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center mt-4 md:mt-0">
          <section className="w-80">
            <div className="flex justify-center space-x-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ranjan-kumar-1b14b6250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={30} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/RanjanKumar971"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-300"
              >
                <Github size={30} />
              </a>
              <a href="#hero" className=" rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp />{" "}
              </a>
            </div>
          </section>
        </div>
      </footer>
    );
}
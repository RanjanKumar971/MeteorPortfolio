import { ArrowRight, ExternalLink, Github, X, Check } from "lucide-react";
import { useEffect, useState } from "react";

//in 344 original : className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"


const projects = [
  {
    id: 1,
    title: "Blog Website",
    description:
      "A sleek and responsive blog website that lets users create and explore content effortlessly.",
    image: "/projects/blog/img1.png",
    tags: ["React", "MongoDB", "Node.js", "Express.js"],
    demourl: "#",
    githuburl: "https://github.com/RanjanKumar971/Blog",
    detailedDescription:
      "A modern blog platform built to create, manage and showcase articles with a clean responsive design. Built using React for the frontend and a MongoDB-backed API (Node.js + Express) for content management.",
    features: [
      "Create / edit / publish posts",
      "Tags & categories for better organization",
      "Responsive layout and fast navigation",
      "Markdown support for rich content",
    ],
    workflowImages: [
      {
        id: 1,
        src: "/projects/blog/img1.png",
        description: "Login and Account Creation Page",
      },
      {
        id: 2,
        src: "/projects/blog/img2.png",
        description: "Home page showing latest blog posts",
      },
      {
        id: 3,
        src: "/projects/blog/img3.png",
        description: "Create / edit post interface for authors",
      },
    ],
  },
  {
    id: 2,
    title: "Bank Management System",
    description:
      "A Java-based banking application that manages accounts, transactions, and customer operations efficiently.",
    image: "/projects/banksystem/img3.png",
    tags: ["Java", "JDBC", "MySQL"],
    demourl: "#",
    githuburl: "https://github.com/RanjanKumar971/Bank-management-system",
    detailedDescription:
      "A console/desktop Java banking system covering account creation, deposits, withdrawals, transaction history, and transaction statement generation. Built as an educational project to demonstrate core OOP concepts, JDBC-based persistence, and safe transaction handling.",
    features: [
      "Account creation and management",
      "Deposit and withdrawal workflows",
      "Transaction statements & history",
      "Secure input validation and MySQL/JDBC persistence",
    ],
    workflowImages: [
      {
        id: 1,
        src: "/projects/banksystem/img1.png",
        description: "Login Page",
      },
      {
        id: 2,
        src: "/projects/banksystem/img2.png",
        description: "Account creation and details screen",
      },
      {
        id: 3,
        src: "/projects/banksystem/img3.png",
        description: "Main menu for banking operations",
      },
    ],
  },
  {
    id: 3,
    title: "Snake Game",
    description:
      "A classic Snake game built in Java using arrays, where the snake grows as it eats food and the player avoids collisions.",
    image: "/projects/snakegame/img1.png",
    tags: ["Java", "Arrays", "Game Logic"],
    demourl: "#",
    githuburl: "#",
    detailedDescription:
      "A classic Snake game implemented in Java focusing on core logic using arrays. The player controls the snake, eats food to grow longer, and must avoid running into walls or itself. Built to practice Java fundamentals like arrays, game loops, and keyboard input handling.",
    features: [
      "Smooth keyboard-based snake movement",
      "Growing snake length with each food item",
      "Collision detection with walls and self",
      "Score tracking and game over handling",
    ],
    workflowImages: [
      {
        id: 1,
        src: "/projects/snakegame/img1.png",
        description: "Main Menu",
      },
      {
        id: 2,
        src: "/projects/snakegame/img2.png",
        description: "Snake grows as you eat more food",
      },
      {
        id: 3,
        src: "/projects/snakegame/img3.png",
        description: "Game over screen with final score",
      },
    ],
  },
  {
    id: 4,
    title: "Timber Man",
    description:
      "A simple and fast-paced arcade game where players chop wood while avoiding falling branches.",
    image: "/projects/timberman/img1.png",
    tags: ["C++", "SFML"],
    demourl: "#",
    githuburl: "https://github.com/RanjanKumar971/Timber-Man",
    detailedDescription:
      "An arcade-style game implemented using C++ and SFML. Players chop wood while dodging falling branches. The game features score tracking and progressively harder levels to keep the gameplay engaging.",
    features: [
      "Keyboard controls for quick gameplay",
      "Score & level system that scales difficulty",
      "Collision detection for branches",
      "Simple sprite-based animations using SFML",
    ],
    workflowImages: [
      {
        id: 1,
        src: "/projects/timberman/img1.png",
        description: "Start Game",
      },
      {
        id: 2,
        src: "/projects/timberman/img2.png",
        description: "Avoid falling branches as you chop",
      },
      {
        id: 3,
        src: "/projects/timberman/img3.png",
        description: "Game Over",
      },
    ],
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 h-screen backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <h2 className="text-3xl mb-4 text-primary">{project.title}</h2>

          {/* Links */}
          <div className="flex justify-center items-center gap-4 pt-4">
            {project.demourl !== "#" && (
              <a
                href={project.demourl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githuburl !== "#" && (
              <a
                href={project.githuburl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <Github size={18} />
                <span>View Code</span>
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mt-16 mb-6 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 font-medium text-secondary-foreground px-3 py-1.5 text-sm border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Project Details
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Features Section */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-card border-[1px] border-primary/40 rounded-lg"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <Check size={18} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workflow Section (shows all 3 images) */}
          {project.workflowImages && project.workflowImages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Workflow
              </h3>
              <div className="relative pl-12">
                {project.workflowImages
                  .sort((a, b) => a.id - b.id)
                  .map((workflow, index) => (
                    <div key={workflow.id} className="relative mb-6">
                      {/* Step Number */}
                      <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold z-10">
                        {workflow.id}
                      </div>

                      {/* Horizontal Line to Content */}
                      <div className="absolute -left-8 top-4 w-8 h-0.5 bg-primary" />

                      {/* Vertical Line (only if not last item) */}
                      {index < project.workflowImages.length - 1 && (
                        <div className="absolute -left-8 top-8 w-0.5 h-[calc(100%+1.5rem)] bg-primary" />
                      )}

                      {/* Content */}
                      <div className="bg-card rounded-lg p-4 border-[1px] border-primary/40">
                        <div className="w-full aspect-[478/228] overflow-hidden rounded mb-3">
                          <img
                            src={workflow.src}
                            alt={workflow.description}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-foreground font-medium">
                          {workflow.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl mb-12 text-center">
            Featured<span className="text-primary"> Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dive into my curated lineup of projects—packed with creativity,
            problem-solving, and real-world impact. Each build pushes my limits
            and reflects my passion for turning ideas into powerful solutions!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-12 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border-[1px] border-primary/40 rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-colors duration-200"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full aspect-[478/228] border border-primary/19 overflow-hidden rounded mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${
                      project.id === 3
                        ? "object-contain bg-black"
                        : "object-cover"
                    } transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 font-medium text-secondary-foreground px-2 py-1 text-sm border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-primary/10 font-medium text-secondary-foreground px-2 py-1 text-sm border rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center items-center text-primary hover:text-primary/70 transition-colors duration-200 gap-3">
                    View Details
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              className="cosmic-button inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RanjanKumar971"
            >
              <span>My Github Profile</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsSection;

import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", level: 4, category: "programming" },
  { name: "SQL", level: 3.99, category: "programming" },
  { name: "C++", level: 3, category: "programming" },
  { name: "JavaScript", level: 3, category: "programming" },
  { name: "Python", level: 2.5, category: "programming" },

  // Web Technologies
  { name: "HTML/CSS", level: 5, category: "web" },
  { name: "Tailwind CSS", level: 4, category: "web" },
  { name: "React", level: 2.49, category: "web" },
  { name: "MySQL", level: 3.5, category: "web" },
  { name: "MongoDB", level: 2.5, category: "web" },

  // Tools
  { name: "Git/GitHub", level: 3.5, category: "tools" },
  { name: "VS Code", level: 4.5, category: "tools" },
  { name: "Vercel", level: 3, category: "tools" },

  // DSA
  { name: "Data Structures & Algorithms", level: 3.5, category: "dsa" },
];

const categories = ["all", "programming", "web", "tools", "dsa"];

export const SkillsSection = () => {
  const getLevelText = (level) => {
    if (level < 2.5) return "Beginner";
    if (level < 4) return "Intermediate";
    return "Advanced";
  };

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-primary/40"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondar/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[glow_1.5s_ease_out"
                  style={{ width: skill.level * 20 + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {getLevelText(skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

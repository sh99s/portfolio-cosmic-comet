import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Javascript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Typescript", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },

  //   backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 65, category: "Backend" },

  //   DevOps
  { name: "Git/Github", level: 90, category: "Tools" },
  { name: "Prisma", level: 75, category: "Tools" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "Kubernetes", level: 60, category: "DevOps" },
  { name: "VS-Code", level: 90, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "DevOps", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setISActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              key={key}
              onClick={() => setISActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className={"text-left mb-4"}>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hiden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[glow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Layout,
  Server,
  Cloud,
  Workflow,
  Database,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import SkillMarquee from "./SkillMarquee";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "programming",
      title: "Programming",
      icon: Code,
      color: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(34,211,238,0.2)]",
      skills: ["C", "Java", "Python", "JavaScript"],
    },
    {
      id: "cs",
      title: "CSIT Fundamentals",
      icon: Cpu,
      color: "border-blue-400/40 text-blue-300 bg-blue-500/10 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Computer Networks",
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: Layout,
      color: "border-teal-400/40 text-teal-300 bg-teal-500/10 shadow-[0_0_12px_rgba(20,184,166,0.2)]",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      color: "border-indigo-400/40 text-indigo-300 bg-indigo-500/10 shadow-[0_0_12px_rgba(99,102,241,0.2)]",
      skills: ["Java", "Spring Boot", "REST APIs"],
    },
    {
      id: "cloud",
      title: "Cloud",
      icon: Cloud,
      color: "border-sky-400/40 text-sky-300 bg-sky-500/10 shadow-[0_0_12px_rgba(14,165,233,0.2)]",
      skills: ["AWS", "EC2", "EKS", "S3", "RDS", "CloudWatch"],
    },
    {
      id: "devops",
      title: "DevOps",
      icon: Workflow,
      color: "border-purple-400/40 text-purple-300 bg-purple-500/10 shadow-[0_0_12px_rgba(168,85,247,0.2)]",
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      id: "databases",
      title: "Databases",
      icon: Database,
      color: "border-emerald-400/40 text-emerald-300 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.2)]",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden bg-[#070d19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] font-mono">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>03 // SKILLS & TOOLKIT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Technical Stack & Capabilities
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Core technologies, programming languages, cloud infrastructure, and DevOps tools I utilize for software engineering.
          </p>
        </motion.div>

        {/* Interactive Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105"
                : "border border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-400/40 hover:text-white"
            }`}
          >
            All Categories ({categories.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105"
                  : "border border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Skill Ticker Marquee */}
      <div className="mt-8">
        <SkillMarquee />
      </div>

      {/* Grid of Skill Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${cat.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-900 hover:text-cyan-200 shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
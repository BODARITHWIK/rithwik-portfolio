import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Cloud,
  Sparkles,
} from "lucide-react";
import SkillMarquee from "./SkillMarquee";

function Skills() {
  const skillCategories = [
    {
      title: "Marketing & Content",
      icon: Sparkles,
      color: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(34,211,238,0.2)]",
      skills: [
        "Digital Marketing Research",
        "Content Strategy",
        "Advertising & Sales Promotion",
        "Customer Relationship Management",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "border-blue-400/40 text-blue-300 bg-blue-500/10 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
      skills: ["C", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Web & Full Stack",
      icon: Layout,
      color: "border-indigo-400/40 text-indigo-300 bg-indigo-500/10 shadow-[0_0_12px_rgba(99,102,241,0.2)]",
      skills: ["React.js", "Node.js", "Spring Boot", "REST APIs", "Authentication"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "border-amber-400/40 text-amber-300 bg-amber-500/10 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
      skills: [
        "AWS",
        "Oracle Cloud (OCI)",
        "Kubernetes",
        "Docker",
        "CI/CD Pipelines",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>02 // SKILLS & TOOLKIT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Skills & Technical Stack
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            A breakdown of technologies, frameworks, cloud services, and tools I
            leverage to craft resilient end-to-end applications.
          </p>
        </motion.div>
      </div>

      {/* Infinite Skill Ticker Marquee */}
      <div className="mt-8">
        <SkillMarquee />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${cat.color}`}
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
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-900 hover:text-cyan-200 hover:shadow-[0_0_10px_rgba(34,211,238,0.15)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
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
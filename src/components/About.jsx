import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Cpu,
  Sparkles,
  Server,
  Terminal,
  Workflow,
  CheckCircle2,
  GraduationCap,
  FolderKanban,
  Award
} from "lucide-react";

function About() {
  const stats = [
    {
      title: "B.Tech CSIT",
      value: "CGPA 8.51",
      sub: "First Priority Degree",
      icon: GraduationCap,
      color: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    },
    {
      title: "Cloud Native",
      value: "AWS & K8s",
      sub: "Microservices & Containers",
      icon: Cloud,
      color: "border-teal-400/40 text-teal-300 bg-teal-500/10 shadow-[0_0_15px_rgba(20,184,166,0.2)]",
    },
    {
      title: "DevOps",
      value: "CI/CD & Docker",
      sub: "Automation & Monitoring",
      icon: Workflow,
      color: "border-indigo-400/40 text-indigo-300 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]",
    },
    {
      title: "Projects",
      value: "4+ Production Specs",
      sub: "Full-Stack & Cloud Systems",
      icon: FolderKanban,
      color: "border-purple-400/40 text-purple-300 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    },
  ];

  const focusAreas = [
    { title: "Software Development", desc: "Building modular, maintainable full-stack software using modern Java, Spring Boot, React, and REST APIs." },
    { title: "Cloud Computing & AWS", desc: "Provisioning resilient cloud environments utilizing Amazon Web Services (EC2, S3, RDS, Lambda, EKS)." },
    { title: "Cloud Native Applications", desc: "Architecting microservices with containerization, API gateways, service discovery, and distributed caching." },
    { title: "DevOps & Automation", desc: "Automating end-to-end integration and delivery pipelines with Docker, Kubernetes, Terraform, and GitHub Actions." },
    { title: "Distributed Systems", desc: "Designing scalable backend architectures with Redis caching, PostgreSQL/MySQL data persistence, and load balancing." },
    { title: "Full Stack Development", desc: "Crafting intuitive responsive frontends paired with robust enterprise backend microservices." },
    { title: "System Automation", desc: "Writing infrastructure-as-code scripts, deployment automation, and predictive auto-scaling algorithms." },
    { title: "Problem Solving & DSA", desc: "Applying Data Structures, Algorithms, OOP principles, and computer science fundamentals to solve complex challenges." },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#070d19]">
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
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Computer Science & Cloud Engineering
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I am a B.Tech Computer Science & Information Technology student at KL University specializing in cloud-native software development, microservices architecture, and DevOps engineering.
          </p>
        </motion.div>

        {/* 4 Stat Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                    STAT 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-outfit group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </h3>
                <div className="text-sm font-bold text-slate-200 mt-1 font-sans">
                  {stat.title}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5 font-mono">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recruiter Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 p-7 sm:p-9 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.12)]"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl font-outfit">
                Recruiter Summary
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Driven by a strong foundation in <strong className="text-cyan-300 font-semibold">Computer Science & Information Technology (B.Tech CSIT - CGPA: 8.51)</strong>, I engineer production-ready cloud applications. My technical capabilities span full-stack development with <strong className="text-white">React</strong> and <strong className="text-white">Spring Boot</strong>, infrastructure automation using <strong className="text-white">Docker</strong> & <strong className="text-white">Kubernetes</strong>, and cloud deployments on <strong className="text-cyan-300 font-semibold">AWS</strong> and <strong className="text-cyan-300 font-semibold">Oracle Cloud</strong>.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Additionally, pursuing a <strong className="text-slate-200">BBA dual degree (CGPA: 8.68)</strong> has enriched my analytical perspective, business communication, and cross-functional project management skill set.
              </p>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-slate-950/80 p-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Key Professional Focus
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Cloud Native Systems & Microservices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Full Stack Application Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>DevOps Pipelines & Infrastructure as Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Data Structures & System Problem Solving</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Interests & Focus Areas Grid */}
        <div className="mt-14 space-y-6">
          <h3 className="text-xl font-bold text-white sm:text-2xl font-outfit">
            Core Areas of Expertise & Interest
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-cyan-300 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-400">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
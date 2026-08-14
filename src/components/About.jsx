import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  TrendingUp,
  Cpu,
  Sparkles,
} from "lucide-react";

function About() {
  const cards = [
    {
      icon: Cloud,
      title: "Cloud Native Development",
      description:
        "Building containerized, scalable microservices architectures using Docker, Kubernetes, AWS, and serverless infrastructure.",
      color: "from-cyan-500/25 to-blue-500/15 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Designing responsive frontend UIs with React & Tailwind, paired with robust Spring Boot RESTful microservices backends.",
      color: "from-blue-500/25 to-indigo-500/15 border-blue-500/40 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Business Strategy",
      description:
        "Leveraging BBA dual-degree insights for digital marketing strategies, brand growth, market analysis, and business development.",
      color: "from-amber-500/25 to-orange-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
    },
    {
      icon: Cpu,
      title: "Problem Solving",
      description:
        "Applying solid Computer Science fundamentals, Data Structures & Algorithms, and distributed system design concepts.",
      color: "from-purple-500/25 to-pink-500/15 border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28">
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
            <span>02 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Full Stack Developer & Cloud Native Engineer
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            B.Tech CSIT (Computer Science & Information Technology) (<span className="font-bold text-cyan-300">CGPA: 8.51</span>) + BBA dual-degree (<span className="font-bold text-cyan-300">CGPA: 8.68</span>) undergraduate at KL University. Seeking a fresher role in software development or cloud engineering.
          </p>

          {/* 3 Bullet Dot Points */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 backdrop-blur-xl">
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>
                  <strong className="text-white font-semibold">01. B.Tech in CSIT (Computer Science & Info Tech)</strong> — First Priority degree (<span className="text-cyan-300 font-bold">CGPA: 8.51 / 10.0</span>) focusing on Data Structures, Algorithms, Microservices & Cloud-Native Architecture.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>
                  <strong className="text-white font-semibold">02. BBA Dual Degree (Business Administration)</strong> — Second Priority degree (<span className="text-cyan-300 font-bold">CGPA: 8.68 / 10.0</span>) specializing in digital marketing strategy & business management.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>
                  <strong className="text-white font-semibold">03. Verified Certifications</strong> — Microsoft Certified Azure Fundamentals (AZ-900) & Oracle Cloud Infrastructure 2025 Certified DevOps Professional.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${card.color} mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
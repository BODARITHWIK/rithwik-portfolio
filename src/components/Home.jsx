import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Code2,
  Award,
} from "lucide-react";

function Home() {
  const techStackBadges = [
    "React.js",
    "Java / Spring Boot",
    "Docker & K8s",
    "AWS",
    "Terraform",
    "CI/CD Pipelines",
    "Microservices",
  ];

  // Editorial Reveal Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16"
    >
      {/* Background Mesh Glows */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[150px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        {/* Left Hero Editorial Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={textItemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-slate-900/80 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Large Editorial Headline Display with Fluid Typography */}
          <motion.div variants={textItemVariants} className="space-y-3 sm:space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400/90 font-mono">
              // HELLO, I'M
            </div>
            <h1 className="text-[clamp(2.3rem,8vw,6.5rem)] font-black tracking-normal text-white font-outfit uppercase leading-[0.98] flex flex-wrap items-center gap-x-3 sm:gap-x-5">
              <span>BODA</span>
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                RITHWIK
              </span>
            </h1>
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-cyan-300 font-outfit">
              Cloud-Native Software Engineer <span className="text-slate-500">|</span> Full-Stack Developer
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
              B.Tech CSIT (Computer Science & Information Technology) (<span className="text-cyan-300 font-semibold">CGPA: 8.51</span>) + BBA dual-degree (<span className="text-cyan-300 font-semibold">CGPA: 8.68</span>) undergraduate at KL University.
              Specializing in full stack development, containerized microservices architectures, and cloud engineering.
            </p>

            {/* 3 Key Bullet Dot Points */}
            <ul className="space-y-2.5 pt-2 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>
                  <strong className="text-white font-semibold">B.Tech CSIT (Computer Science & Info Tech)</strong> — First Priority Degree (<span className="text-cyan-300 font-bold">CGPA: 8.51 / 10.0</span>)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>
                  <strong className="text-white font-semibold">BBA Dual Degree (Business Administration)</strong> — Second Priority Degree (<span className="text-cyan-300 font-bold">CGPA: 8.68 / 10.0</span>)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>
                  <strong className="text-white font-semibold">Full-Stack & Cloud Engineering</strong> — React.js, Spring Boot, Microservices, AWS, Docker & Kubernetes
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons (Touch friendly & Mobile responsive) */}
          <motion.div variants={textItemVariants} className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2 w-full">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:from-cyan-300 hover:to-cyan-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-[1.02] min-h-[48px]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            <a
              href="#resumes"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("resumes")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] min-h-[48px]"
            >
              <FileText className="h-4 w-4 text-cyan-400" />
              <span>Explore Resumes</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pt-1 sm:pt-0 sm:pl-2">
              <a
                href="https://github.com/BODARITHWIK"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] hover:scale-105"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Tech Badges */}
          <motion.div variants={textItemVariants} className="pt-3 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {techStackBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-900 hover:text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Hero Editorial Portrait Frame (Mobile Responsive) */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center w-full"
        >
          {/* Glowing Backlight Circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-3xl animate-pulse-glow" />

          {/* Large Editorial Portrait Container */}
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-3 sm:p-4 shadow-[0_0_50px_rgba(34,211,238,0.15)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
              <img
                src="/profile.jpg"
                alt="Boda Rithwik - Professional Portrait"
                className="h-[360px] sm:h-[480px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl border border-white/15 bg-slate-950/85 p-3 sm:p-3.5 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      <span>KL University</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-cyan-300 mt-0.5 font-mono">
                      B.Tech CSIT (CGPA: 8.51) + BBA (CGPA: 8.68)
                    </div>
                  </div>
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/20 text-cyan-300">
                    <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Explore Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 sm:mt-12 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById("resumes")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
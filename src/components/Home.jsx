import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Code2,
  Cloud,
  Download,
  Mail
} from "lucide-react";

function Home() {
  const badges = [
    "B.Tech CSIT",
    "Cloud Native",
    "DevOps",
    "Full Stack",
    "AWS",
    "Docker",
    "Kubernetes",
    "Spring Boot",
    "React",
    "CI/CD"
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#070d19]"
    >
      {/* Background Mesh Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[160px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[450px] w-[450px] rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        
        {/* LEFT COLUMN: HERO ESSENTIAL CONTENT (Spans 7 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-slate-900/90 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono">
              B.Tech CSIT • KL University
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-cyan-400 font-mono">
              Hi, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.02] font-outfit">
              BODA{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
                RITHWIK
              </span>
            </h1>
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-300 font-outfit pt-1">
              B.Tech CSIT Student <span className="text-slate-500">|</span> Cloud Native Software Engineering
            </h3>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
            Building scalable software, cloud-native applications, and modern DevOps solutions.
          </p>

          {/* Quick Technical Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2 max-w-xl">
            <div className="flex items-center gap-2.5 rounded-2xl border border-cyan-400/25 bg-slate-900/70 p-3 backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">B.Tech CSIT</div>
                <div className="text-[11px] text-cyan-300 font-mono font-semibold">Primary • CGPA: 8.51</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-900/70 p-3 backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Cloud className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Cloud & DevOps</div>
                <div className="text-[11px] text-slate-300 font-mono font-semibold">AWS • K8s • Docker</div>
              </div>
            </div>
          </div>

          {/* Badges Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-900 hover:text-cyan-300"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-3.5 text-sm font-black text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:from-cyan-300 hover:to-teal-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-[1.02] min-h-[48px]"
            >
              <span>View My Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            <a
              href="/B.Tech-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/50 bg-slate-900/90 px-6 py-3.5 text-sm font-bold text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] min-h-[48px]"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              <span>Download B.Tech Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-slate-950/70 px-5 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-slate-900 hover:text-white min-h-[48px]"
            >
              <Mail className="h-4 w-4 text-slate-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Profiles:
            </span>
            <a
              href="https://github.com/BODARITHWIK"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Github className="h-4 w-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="h-4 w-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: CLEAN HERO PORTRAIT FRAME (Spans 5 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center w-full"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-md rounded-3xl border border-cyan-400/30 bg-slate-900/85 p-4 shadow-[0_0_50px_rgba(34,211,238,0.15)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
              <img
                src="/profile.jpg"
                alt="Boda Rithwik - B.Tech CSIT Student"
                className="h-[380px] sm:h-[480px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

              {/* Floating Info Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-cyan-400/40 bg-slate-950/90 p-4 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-cyan-400" />
                      <span>KL University</span>
                    </div>
                    <div className="text-xs font-semibold text-cyan-300 mt-1 font-mono">
                      B.Tech CSIT (CGPA: 8.51) • PRIMARY
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                      Dual Degree BBA (CGPA: 8.68)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
          Explore Portfolio
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
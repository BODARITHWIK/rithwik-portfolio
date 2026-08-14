import { motion } from "framer-motion";

function SkillMarquee() {
  const row1 = [
    "React.js",
    "Java",
    "Spring Boot",
    "JavaScript",
    "Node.js",
    "REST APIs",
    "Microservices",
    "HTML5",
    "CSS3",
    "C Language",
  ];

  const row2 = [
    "AWS",
    "Oracle Cloud (OCI)",
    "Kubernetes",
    "Docker",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Digital Marketing",
    "Content Strategy",
    "CRM",
    "SWOT Analysis",
  ];

  // Repeat items for seamless continuous looping
  const marqueeItems1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeItems2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="relative w-full overflow-hidden py-8 my-6 bg-slate-950/40 border-y border-white/10 backdrop-blur-md">
      {/* Subtle Gradient Fades on Edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent" />

      {/* Row 1: Leftward Infinite Marquee */}
      <div className="flex overflow-hidden group select-none py-2">
        <motion.div
          className="flex shrink-0 items-center gap-4 group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {marqueeItems1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-200 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-300 hover:scale-105"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward Infinite Marquee */}
      <div className="flex overflow-hidden group select-none py-2 mt-2">
        <motion.div
          className="flex shrink-0 items-center gap-4 group-hover:[animation-play-state:paused]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {marqueeItems2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-slate-900/80 px-5 py-2.5 text-xs sm:text-sm font-bold text-cyan-200 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-800 hover:text-cyan-300 hover:scale-105"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillMarquee;

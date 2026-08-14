import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Star, BookOpen } from "lucide-react";

function Education() {
  const educationItems = [
    {
      school: "KL University",
      course: "B.Tech in Computer Science & Information Technology (CSIT)",
      specialization: "Specialization: Cloud Native Software Engineering",
      period: "June 2023 - June 2027",
      cgpa: "CGPA: 8.51 / 10.0",
      location: "Vijayawada, Andhra Pradesh, India",
      description:
        "Comprehensive Computer Science & Information Technology (CSIT) curriculum with hands-on focus on cloud-native systems, containerization, microservices architecture, DevOps workflows, Data Structures & Algorithms, and distributed computing.",
      badge: "01. PRIMARY B.TECH DEGREE",
      isPrimary: true,
    },
    {
      school: "KL University",
      course: "BBA – Bachelor of Business Administration (Dual Degree)",
      specialization: "Dual Degree Program",
      period: "June 2024 - June 2027",
      cgpa: "CGPA: 8.68 / 10.0",
      location: "Vijayawada, Andhra Pradesh, India",
      description:
        "Pursuing a dual degree in business administration to build foundational business strategy, management, communication, and leadership capabilities alongside technical software engineering skills.",
      badge: "02. DUAL DEGREE BBA",
      isPrimary: false,
    },
    {
      school: "Narayana Junior College",
      course: "Intermediate (MPC) - Class XII",
      specialization: "Mathematics, Physics & Chemistry",
      period: "2021 - 2023",
      cgpa: null,
      location: "Andhra Pradesh, India",
      description:
        "Completed higher secondary education specializing in core sciences and advanced mathematics with strong analytical problem-solving skills.",
      badge: "Class XII",
      isPrimary: false,
    },
    {
      school: "Bhashyam High School",
      course: "Secondary School Certificate - Class X",
      specialization: "General Academics",
      period: "2019 - 2021",
      cgpa: null,
      location: "Andhra Pradesh, India",
      description:
        "Completed secondary education with high academic achievement and active participation in science and technology competitions.",
      badge: "Class X",
      isPrimary: false,
    },
  ];

  return (
    <section id="education" className="relative py-20 lg:py-28">
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
            <GraduationCap className="h-3.5 w-3.5" />
            <span>04 // EDUCATION JOURNEY</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Education & Background
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            My academic journey combining technical computer science excellence with business administration fundamentals.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14 space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500/50 before:to-transparent">
          {educationItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={`${item.school}-${item.course}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.isPrimary ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-ping" : "bg-cyan-400"}`} />
                </div>

                {/* Content Card Side */}
                <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)]">
                  <div
                    className={`group rounded-3xl backdrop-blur-xl transition-all duration-300 p-6 sm:p-7 ${
                      item.isPrimary
                        ? "border-2 border-cyan-400/60 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:-translate-y-1.5"
                        : "border border-white/10 bg-slate-900/60 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30 hover:-translate-y-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold font-mono ${
                          item.isPrimary
                            ? "border border-cyan-400/50 bg-cyan-500/20 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)] flex items-center gap-1"
                            : "border border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                        }`}
                      >
                        {item.isPrimary && <Star className="h-3 w-3 fill-cyan-300 text-cyan-300" />}
                        <span>{item.badge}</span>
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                        <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                      {item.school}
                    </h3>
                    <p className={`mt-1 text-sm font-semibold ${item.isPrimary ? "text-cyan-200 text-base font-bold" : "text-cyan-300"}`}>
                      {item.course}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">
                      {item.specialization}
                    </p>

                    {item.cgpa && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                        <Award className="h-3.5 w-3.5" />
                        <span>{item.cgpa}</span>
                      </div>
                    )}

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400 pt-3 border-t border-white/10">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
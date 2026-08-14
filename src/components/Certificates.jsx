import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles, Eye, X, ShieldCheck, CheckCircle2 } from "lucide-react";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: "azure",
      image: "/Azure.jpg",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2025",
      badge: "Cloud Certification",
      description:
        "Validates foundational knowledge of cloud concepts, Azure core services, security, compliance, governance, and cloud cost management.",
    },
    {
      id: "oracle",
      image: "/oracle.jpg",
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle Cloud",
      year: "2025",
      badge: "DevOps Professional",
      description:
        "Certifies competency in automating CI/CD pipelines, container orchestration, microservices deployment, infrastructure-as-code, and monitoring on OCI.",
    },
    {
      id: "linguaskill",
      image: "/linguaskill.jpg",
      title: "Linguaskill Certification – Cambridge Assessment English",
      issuer: "Cambridge University",
      year: "2024",
      badge: "Language Proficiency",
      description:
        "International standard assessment demonstrating professional English language proficiency across speaking, writing, reading, and listening skills.",
    },
  ];

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="relative py-20 lg:py-28 bg-[#070d19]">
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
            <Award className="h-3.5 w-3.5 text-cyan-400" />
            <span>05 // CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Verified Certifications
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Recognized industry credentials validating cloud engineering, DevOps pipelines, and communication skills.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              <div>
                {/* Image Container with View Overlay */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative cursor-pointer overflow-hidden border-b border-white/10 group-hover:border-cyan-400/30"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                      <Eye className="h-4 w-4" />
                      <span>View Credential</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300 font-mono">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 font-mono">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-1 font-mono">
                    Issuer: {cert.issuer}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-xs font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Verify Credential Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/95">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-outfit">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-cyan-300 font-medium font-mono">
                      {selectedCert.issuer} • {selectedCert.year}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-slate-300 transition-colors hover:bg-cyan-400 hover:text-slate-950"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-4 sm:p-6 flex justify-center bg-slate-950">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;
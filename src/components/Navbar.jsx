import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X, Code2, Sparkles, ChevronDown, Award, FolderKanban, GraduationCap, UserCheck, Mail } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Career Guidance", href: "#career-guidance" },
    { name: "Certifications", href: "#certificates" },
    { name: "Resumes", href: "#resumes" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-cyan-500/15 bg-[#050b14]/90 py-3 shadow-2xl backdrop-blur-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Icon & Title */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-900 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-wider uppercase font-outfit text-white leading-tight flex items-center gap-1">
              BODA RITHWIK<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] font-bold text-cyan-300 font-mono tracking-wider uppercase">
              B.Tech CSIT & BBA • Dual Degree
            </span>
          </div>
        </a>

        {/* Desktop Navigation Bar */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 backdrop-blur-xl md:flex lg:gap-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs font-bold transition-colors duration-200 lg:text-sm ${
                  isActive
                    ? "text-cyan-300 font-extrabold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/15 border border-cyan-400/35 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA Buttons & Social Icons */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href="https://github.com/BODARITHWIK"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* Quick Resumes Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsResumeDropdownOpen(true)}
            onMouseLeave={() => setIsResumeDropdownOpen(false)}
          >
            <button
              onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 px-4 py-2 text-xs font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_22px_rgba(34,211,238,0.45)]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resumes</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isResumeDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isResumeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl border border-cyan-400/30 bg-slate-950/95 p-2.5 shadow-2xl backdrop-blur-2xl z-50"
                >
                  <a
                    href="/B.Tech-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-cyan-500/20 border border-cyan-400/20 bg-cyan-950/30"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300 font-bold text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>B.Tech Resume</span>
                        <span className="text-[9px] bg-cyan-400 text-slate-950 px-1.5 py-0.5 rounded font-black">PRIMARY</span>
                      </div>
                      <div className="text-[10px] text-cyan-300 font-mono mt-0.5">Computer Science / Cloud</div>
                    </div>
                  </a>

                  <a
                    href="/BBA-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-slate-900 border border-white/10 mt-1.5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400 font-bold text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">BBA Resume</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">Business Administration</div>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="#resumes"
            onClick={(e) => handleNavClick(e, "#resumes")}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-300"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resumes</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/90 text-slate-300 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-cyan-400" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-b border-cyan-500/20 bg-[#050b14]/98 px-4 pt-2 pb-6 backdrop-blur-2xl sm:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Resume Action Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
              <a
                href="/B.Tech-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-400/50 bg-cyan-500/20 py-2.5 text-xs font-bold text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>B.Tech Resume (01)</span>
              </a>
              <a
                href="/BBA-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-slate-900 py-2.5 text-xs font-semibold text-slate-300"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>BBA Resume (02)</span>
              </a>
            </div>

            <div className="mt-4 flex items-center justify-around pt-3 border-t border-white/10">
              <a
                href="https://github.com/BODARITHWIK"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-300"
              >
                <Github className="h-4 w-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-300"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
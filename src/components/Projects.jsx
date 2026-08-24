import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Cpu,
  Boxes,
  Briefcase,
  BookOpen,
  X,
  FileText,
  ArrowUpRight,
  Download,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Layers,
  Search,
  Users,
  ShieldCheck,
  Award
} from "lucide-react";

function Projects() {
  const [selectedResearch, setSelectedResearch] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedResearch(false);
      }
    };
    if (selectedResearch) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedResearch]);

  const projects = [
    {
      id: "predictive-autoscaling",
      number: "01",
      title: "Predictive Autoscaling with Load Forecasting",
      subtitle: "Machine Learning Driven Cloud Infrastructure Optimization",
      category: "Cloud Native & AI/ML",
      description:
        "A cloud-native system that predicts future application load and automatically adjusts infrastructure capacity before traffic increases, preventing downtime and reducing cloud spending.",
      technologies: [
        "Python",
        "Machine Learning",
        "Kubernetes",
        "Docker",
        "Prometheus",
        "Grafana",
        "AWS",
      ],
      githubUrl: "https://github.com/BODARITHWIK",
      demoUrl: null,
      isResearch: false,
      icon: Cpu,
      badge: "Cloud Architecture",
    },
    {
      id: "cloud-native-logistics",
      number: "02",
      title: "Cloud Native Logistics System",
      subtitle: "Microservices & Distributed Fleet Management",
      category: "Microservices & Distributed Systems",
      description:
        "Enterprise logistics platform featuring Spring Boot microservices, Eureka service discovery, API gateway routing, real-time tracking, Redis caching, and automated EKS cluster deployments.",
      technologies: [
        "React",
        "Spring Boot Microservices",
        "Eureka",
        "API Gateway",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "AWS EKS",
      ],
      githubUrl: "https://github.com/BODARITHWIK",
      demoUrl: null,
      isResearch: false,
      icon: Boxes,
      badge: "Enterprise Full Stack",
    },
    {
      id: "bba-business-strategy",
      number: "03",
      title: "BBA Strategic Business & Digital Marketing Analytics",
      subtitle: "Business Administration & Strategy Management",
      category: "Business Administration & Strategy",
      description:
        "Strategic business administration model applying digital marketing channels, ROI analytics, consumer behavior evaluation, market positioning, financial insights, and operational management.",
      technologies: [
        "Business Administration",
        "Digital Marketing Strategy",
        "Business Analytics",
        "Strategic Management",
        "Financial Insights",
        "Market Positioning",
      ],
      githubUrl: null,
      demoUrl: null,
      isResearch: true,
      docUrl: "/bba-research-paper.pdf",
      icon: Briefcase,
      badge: "BBA Dual Degree Core",
    },
  ];

  const comparativeData = [
    { metric: "Cost Structure", traditional: "High capital expenditure (TV, print, billboards)", digital: "Cost-effective, pay-for-performance, scalable" },
    { metric: "Communication Flow", traditional: "One-way broadcast (Company to audience)", digital: "Bi-directional interactive dialogue (Real-time feedback)" },
    { metric: "Lead Time & Speed", traditional: "Long production & editorial distribution cycles", digital: "Instant campaign launch & real-time creative updates" },
    { metric: "Audience Scope", traditional: "Narrow / regional demographic reach", digital: "Global reach with hyper-targeted audience segmentation" },
    { metric: "Campaign Availability", traditional: "Time-bound & static media exposure", digital: "24/7 continuous global visibility & access" },
    { metric: "Analytics & Tracking", traditional: "Delayed, indirect, hard-to-measure ROI", digital: "Granular real-time analytics, CTR, CPA & ROAS" },
    { metric: "Consumer Trust", traditional: "High institutional credibility & brand recall", digital: "Dynamic social proof, peer reviews & influencer trust" },
    { metric: "Operational Agility", traditional: "Static once printed or broadcasted", digital: "Dynamic A/B testing & real-time optimization" },
    { metric: "Brand Voice", traditional: "Formal, authoritative, curated tone", digital: "Conversational, personalized, community-centric" },
  ];

  const findingsList = [
    "Digital marketing is substantially more cost-effective with lower barriers to entry than traditional media.",
    "Online platforms provide unmatched precision in audience segmentation (demographics, intent, behaviors).",
    "Traditional marketing continues to establish higher foundational consumer trust and institutional credibility.",
    "Digital channels provide real-time performance analytics, click-through attribution, and instantaneous ROI metrics.",
    "Organizations that deploy integrated hybrid strategies achieve significantly higher conversion rates.",
    "Social media recommendations and customer reviews directly sway over 78% of modern consumer purchase decisions.",
    "Digital marketing facilitates borderless global scale without geographic distribution overhead.",
    "Traditional marketing remains essential for dense local market penetration and mass broadcast awareness.",
    "Customers prefer personalized advertisements that are commonly provided through digital marketing.",
    "Digital marketing campaigns can be modified quickly based on customer feedback and market trends.",
    "Traditional marketing advertisements often create stronger brand recall among consumers.",
    "The increasing use of smartphones and the internet has accelerated the growth of digital marketing.",
    "Digital marketing provides higher customer interaction through comments, reviews, and online engagement.",
    "Traditional marketing is still preferred by some older age groups who rely on conventional media.",
    "Integrated marketing strategies improve overall brand visibility and customer satisfaction.",
    "Digital marketing generates measurable Return on Investment (ROI) compared to traditional methods.",
    "Online advertising helps businesses reach niche audiences more effectively.",
    "Companies that adopt digital technologies gain a competitive advantage in the marketplace.",
    "Consumer behavior is increasingly influenced by online reviews and social media recommendations.",
    "Both digital and traditional marketing play important roles in achieving business growth."
  ];

  const suggestionsList = [
    "Organizations should adopt a balanced marketing strategy that combines digital and traditional methods.",
    "Small businesses should focus more on digital marketing due to its lower cost and wider reach.",
    "Large organizations should integrate both marketing channels for maximum effectiveness.",
    "Companies should invest in social media marketing and content creation.",
    "Regular performance analysis should be conducted to improve marketing effectiveness.",
    "Businesses should use customer data analytics to understand consumer behavior.",
    "Organizations should increase investment in search engine optimization (SEO) to improve online visibility.",
    "Companies should create engaging and relevant content to attract customers.",
    "Businesses should maintain an active presence on social media platforms.",
    "Traditional marketing should be used for strengthening brand awareness and credibility.",
    "Organizations should provide training programs to improve digital marketing skills among employees.",
    "Marketing campaigns should be regularly updated to match changing customer preferences.",
    "Businesses should use email marketing to maintain long-term customer relationships.",
    "Companies should encourage customer feedback and use it to improve products and services.",
    "Organizations should adopt mobile-friendly marketing strategies due to the increasing use of smartphones.",
    "Businesses should allocate marketing budgets based on target audience preferences.",
    "Companies should monitor competitor marketing strategies to remain competitive.",
    "Digital and traditional campaigns should be aligned to deliver a consistent brand message.",
    "Organizations should focus on customer experience to increase loyalty and retention.",
    "Continuous innovation and technology adoption should be encouraged to improve marketing performance."
  ];

  const modulesList = [
    { title: "Market Analysis", desc: "Understanding customer needs, competitive landscape, and real-time market trends." },
    { title: "Subscription Marketing", desc: "Building recurring value propositions and long-term customer relationships." },
    { title: "Search Engine Optimization (SEO)", desc: "Organic search ranking optimization, keyword mapping, and domain authority." },
    { title: "Newsletter Marketing", desc: "Direct-to-consumer email nurturing and product lifecycle campaigns." },
    { title: "Customer Buying Trends", desc: "Behavioral tracking, purchase trigger analysis, and intent profiling." },
    { title: "Search Engine Marketing (SEM)", desc: "High-intent PPC ads, Google Ads bidding strategies, and conversion tracking." },
    { title: "Advertising Campaigns", desc: "Multi-channel creative assets and programmatic ad placement." },
    { title: "Statistics & Analytics", desc: "Data-driven attribution models, cohort analysis, and ROAS calculations." },
    { title: "Customer Surveys", desc: "Direct consumer feedback, NPS measurement, and product-market fit metrics." },
    { title: "Digital Marketing Integration", desc: "Harmonizing omnichannel touchpoints into a unified marketing funnel." }
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#070d19]">
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
            <span>04 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Featured Projects & Systems
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            A portfolio of cloud-native architecture, microservices, predictive scaling models, and business strategy analytics.
          </p>
        </motion.div>

        {/* Projects Cards List */}
        <div className="mt-14 space-y-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-slate-900/95 hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]"
              >
                {/* Top Subtle Beam Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  
                  {/* Left Project Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono tracking-tighter">
                        PROJECT // {project.number}
                      </span>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300 font-mono">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl group-hover:text-cyan-300 transition-colors font-outfit">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-semibold text-cyan-300 font-mono">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl border border-white/10 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action Side */}
                  <div className="lg:col-span-4 flex flex-col justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                    {project.isResearch ? (
                      <div className="flex flex-col gap-2.5 w-full">
                        <button
                          onClick={() => setSelectedResearch(true)}
                          className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:from-cyan-400 hover:to-teal-300 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.02] min-h-[48px]"
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>Read Research Doc & Insights</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </button>

                        <a
                          href="/bba-research-paper.pdf"
                          target="_blank"
                          rel="noreferrer"
                          download="Boda_Rithwik_BBA_Research_Paper.pdf"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-400/40 bg-slate-950/90 px-4 py-3 text-xs sm:text-sm font-bold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white min-h-[44px]"
                        >
                          <Download className="h-4 w-4 text-purple-400" />
                          <span>Download Full 30-Page Doc (PDF)</span>
                        </a>
                      </div>
                    ) : (
                      <>
                        <a
                          href={project.githubUrl || "https://github.com/BODARITHWIK"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] min-h-[48px]"
                        >
                          <Github className="h-4 w-4 text-cyan-400" />
                          <span>GitHub Repository</span>
                          <ArrowUpRight className="h-4 w-4 text-slate-400" />
                        </a>

                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] min-h-[48px]"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Research Paper & Doc Lightbox Reader Modal */}
      <AnimatePresence>
        {selectedResearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedResearch(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-3 sm:p-6 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-900 shadow-[0_0_80px_rgba(34,211,238,0.25)]"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/95 gap-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/15 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                        PROJECT // 03 RESEARCH DOCUMENT
                      </span>
                      <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                        30-Page Study
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white font-outfit">
                      Digital Marketing vs Traditional Marketing
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/bba-research-paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="Boda_Rithwik_BBA_Research_Paper.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-3.5 py-2 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-slate-950"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span> PDF
                  </a>

                  <a
                    href="/bba-research-paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">Open in Tab</span>
                  </a>

                  <button
                    onClick={() => setSelectedResearch(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-slate-300 transition-colors hover:bg-red-500 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Tabs Bar */}
              <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 bg-slate-950/60 px-6 py-2.5 text-xs font-mono scrollbar-none shrink-0">
                {[
                  { id: "overview", label: "Overview & Abstract", icon: FileText },
                  { id: "matrix", label: "Comparison Matrix", icon: BarChart3 },
                  { id: "swot", label: "SWOT Analysis", icon: ShieldCheck },
                  { id: "findings", label: "20 Findings & Suggestions", icon: CheckCircle2 },
                  { id: "modules", label: "10 Core Modules", icon: Layers },
                  { id: "literature", label: "Literature & Refs", icon: Award },
                ].map((tab) => {
                  const TabIcon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-1.5 font-bold transition-all ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                          : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                      }`}
                    >
                      <TabIcon className="h-3.5 w-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Modal Body Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 custom-scrollbar">
                
                {/* TAB 1: OVERVIEW & ABSTRACT */}
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Academic Metadata Banner */}
                    <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-slate-950/80 p-5 backdrop-blur-md">
                      <div className="grid gap-4 sm:grid-cols-2 text-xs">
                        <div className="space-y-1">
                          <p className="text-slate-400 font-bold uppercase tracking-wider font-mono">Researcher & Author:</p>
                          <p className="text-white font-black text-sm">Boda Rithwik (ID: 23923020121)</p>
                          <p className="text-cyan-300 font-medium">Bachelor of Business Administration (BBA Dual Degree)</p>
                          <p className="text-slate-400">KL University, Guntur, Andhra Pradesh, India</p>
                        </div>
                        <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                          <p className="text-slate-400 font-bold uppercase tracking-wider font-mono">Faculty Guide & Supervisor:</p>
                          <p className="text-white font-black text-sm">Durgaprasad Navulla, Asst. Professor</p>
                          <p className="text-cyan-300 font-medium">Department of Management Studies</p>
                          <p className="text-slate-400">School of Management, KL University</p>
                        </div>
                      </div>
                    </div>

                    {/* Executive Abstract */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-3">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                        <Sparkles className="h-5 w-5 text-cyan-400" />
                        <span>Executive Abstract</span>
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-300">
                        Marketing is one of the most important business functions that helps organizations communicate with customers and promote their products and services. Over the years, marketing has evolved significantly from traditional methods such as newspapers, magazines, television, radio, brochures, and billboards to modern digital platforms including social media, websites, search engines, email marketing, and mobile applications.
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300">
                        The primary objective of this research paper is to compare Digital Marketing and Traditional Marketing in terms of cost, effectiveness, audience reach, customer engagement, communication, and impact on consumer behavior. Digital marketing offers businesses the opportunity to reach a global audience, target specific customer groups, measure campaign performance in real time, and establish direct communication with consumers. On the other hand, traditional marketing continues to play a vital role in building brand credibility, increasing public awareness, and reaching customers who may have limited access to digital technologies.
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300">
                        The research concludes that organizations can achieve better business performance and customer satisfaction by integrating digital and traditional marketing techniques. A balanced marketing strategy enables businesses to maximize customer reach, improve brand recognition, strengthen customer relationships, and maintain a competitive advantage in today's rapidly changing marketplace.
                      </p>
                      <div className="pt-2">
                        <span className="text-xs font-bold text-cyan-400 font-mono">Keywords: </span>
                        <span className="text-xs text-slate-300">
                          Digital Marketing, Traditional Marketing, Social Media Marketing, Consumer Behavior, Advertising, Business Strategy, Customer Engagement.
                        </span>
                      </div>
                    </div>

                    {/* Research Objectives */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-4">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                        <span>Research Objectives</span>
                      </h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          { num: "01", title: "Conceptual Foundations", desc: "Understand the core meaning, features, and evolution of Digital & Traditional Marketing." },
                          { num: "02", title: "Comparative Evaluation", desc: "Compare strengths, limitations, cost models, reach, and interaction flexibility." },
                          { num: "03", title: "Digital Effectiveness", desc: "Analyze business growth drivers across social media, SEO, SEM, email, and digital ads." },
                          { num: "04", title: "Traditional Customer Engagement", desc: "Examine the role of television, print, and outdoor media in establishing brand credibility." },
                          { num: "05", title: "Omnichannel Hybrid Framework", desc: "Identify optimal marketing approaches tailored to diverse enterprise contexts and budgets." },
                        ].map((obj) => (
                          <div key={obj.num} className="rounded-xl border border-white/5 bg-slate-900/80 p-4 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-cyan-400 font-mono">OBJECTIVE {obj.num}</span>
                            </div>
                            <h5 className="text-sm font-bold text-white">{obj.title}</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">{obj.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: COMPARISON MATRIX */}
                {activeTab === "matrix" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                      <div className="p-4 border-b border-white/10 bg-slate-900/90 flex items-center justify-between">
                        <div>
                          <h4 className="text-base font-bold text-white font-outfit">
                            Direct Comparative Analysis Matrix
                          </h4>
                          <p className="text-xs text-slate-400">
                            Evaluating strategic dimensions between Traditional and Digital channels
                          </p>
                        </div>
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-300 font-mono">
                          9 Key Dimensions
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-900 text-slate-300 uppercase tracking-wider font-mono border-b border-white/10">
                            <tr>
                              <th className="p-4">Dimension</th>
                              <th className="p-4 text-purple-300">Traditional Marketing</th>
                              <th className="p-4 text-cyan-300">Digital Marketing</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {comparativeData.map((row, idx) => (
                              <tr key={row.metric} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/30"}>
                                <td className="p-4 font-bold text-white whitespace-nowrap">{row.metric}</td>
                                <td className="p-4 text-slate-300">{row.traditional}</td>
                                <td className="p-4 text-cyan-200 font-medium">{row.digital}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Macro Trend Highlight */}
                    <div className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5 space-y-2">
                      <h5 className="text-sm font-bold text-white flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-cyan-400" />
                        <span>US Total Media Advertising Expenditure Shift (2018 - 2023)</span>
                      </h5>
                      <p className="text-xs leading-relaxed text-slate-300">
                        In 2018, Traditional Marketing led with $114.84B (51.4%) vs Digital Marketing at $108.64B (48.6%). By 2023, Digital Marketing expanded to $201.83B (66.8%) while Traditional leveled at $100.48B (33.2%), underscoring the permanent structural migration to digital channels.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: SWOT ANALYSIS */}
                {activeTab === "swot" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Digital Marketing SWOT */}
                    <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/70 p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-cyan-300 flex items-center gap-2 font-outfit">
                          <Sparkles className="h-5 w-5 text-cyan-400" />
                          <span>SWOT Analysis: Digital Marketing</span>
                        </h4>
                        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-mono font-bold text-cyan-300">
                          Digital Channels
                        </span>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">Strengths</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>High cost-effectiveness & lower barrier to entry</li>
                            <li>Instantaneous global audience reach</li>
                            <li>Real-time performance tracking & attribution</li>
                            <li>High customer engagement via interactive platforms</li>
                            <li>Hyper-personalized and targeted campaigns</li>
                          </ul>
                        </div>

                        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider font-mono">Weaknesses</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Total dependence on internet and technology infrastructure</li>
                            <li>Intense competition and digital ad saturation</li>
                            <li>Privacy and cybersecurity data compliance challenges</li>
                            <li>Requires continuous monitoring and daily content refresh</li>
                            <li>Requires technical expertise and analytics capability</li>
                          </ul>
                        </div>

                        <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">Opportunities</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Exponential growth in global smartphone & 5G usage</li>
                            <li>Rapid expansion of e-commerce & social commerce</li>
                            <li>Adoption of AI and predictive analytics in ad targeting</li>
                            <li>Access to previously untapped international markets</li>
                          </ul>
                        </div>

                        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">Threats</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Rapid search engine & social media algorithm volatility</li>
                            <li>Rising digital ad bidding costs (CPC/CAC inflation)</li>
                            <li>Escalating cybersecurity threats and privacy legislation</li>
                            <li>Negative viral reviews impacting brand reputation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Traditional Marketing SWOT */}
                    <div className="rounded-2xl border border-purple-400/40 bg-slate-950/70 p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-purple-300 flex items-center gap-2 font-outfit">
                          <Briefcase className="h-5 w-5 text-purple-400" />
                          <span>SWOT Analysis: Traditional Marketing</span>
                        </h4>
                        <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-mono font-bold text-purple-300">
                          Traditional Channels
                        </span>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">Strengths</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Superior brand credibility and consumer trust</li>
                            <li>Unmatched penetration for local and regional markets</li>
                            <li>Broad audience reach via mass television & print</li>
                            <li>Simple for diverse demographics to understand & remember</li>
                            <li>Strong sensory visual and emotional impact</li>
                          </ul>
                        </div>

                        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider font-mono">Weaknesses</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Prohibitive upfront advertising and production costs</li>
                            <li>Difficult to measure campaign performance accurately</li>
                            <li>Limited granular audience targeting capabilities</li>
                            <li>One-way communication with low customer engagement</li>
                            <li>Inflexible static creatives once deployed</li>
                          </ul>
                        </div>

                        <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">Opportunities</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Strong continued influence in rural/less digital areas</li>
                            <li>Large-scale brand awareness and prestige sponsorship</li>
                            <li>Hybrid integration with digital (QR codes, broadcast CTAs)</li>
                            <li>Continued effectiveness among senior demographics</li>
                          </ul>
                        </div>

                        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-2">
                          <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">Threats</h5>
                          <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                            <li>Declining readership of print newspapers & magazines</li>
                            <li>Migration of younger audiences to on-demand digital screens</li>
                            <li>Rising television & print ad rates despite declining eyeballs</li>
                            <li>Severe competition from agile, low-cost digital ad channels</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 4: 20 FINDINGS & 20 SUGGESTIONS */}
                {activeTab === "findings" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Findings */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                          <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                          <span>20 Key Research Findings</span>
                        </h4>
                        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-mono font-bold text-cyan-300">
                          Empirical Results
                        </span>
                      </div>

                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {findingsList.map((finding, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-slate-900/60 p-3 text-xs">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-bold text-cyan-300 font-mono">
                              {idx + 1}
                            </span>
                            <span className="text-slate-300 leading-relaxed">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suggestions */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                          <TrendingUp className="h-5 w-5 text-emerald-400" />
                          <span>20 Strategic Recommendations & Suggestions</span>
                        </h4>
                        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-300">
                          Action Plan
                        </span>
                      </div>

                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {suggestionsList.map((suggestion, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-slate-900/60 p-3 text-xs">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-300 font-mono">
                              {idx + 1}
                            </span>
                            <span className="text-slate-300 leading-relaxed">{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 5: 10 CORE MODULES */}
                {activeTab === "modules" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                          <Layers className="h-5 w-5 text-cyan-400" />
                          <span>10 Core Digital Marketing Implementation Modules</span>
                        </h4>
                        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-mono font-bold text-cyan-300">
                          Framework Components
                        </span>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {modulesList.map((mod, idx) => (
                          <div key={mod.title} className="rounded-xl border border-cyan-400/20 bg-slate-900/80 p-4 space-y-1.5 transition-all hover:border-cyan-400/50">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-cyan-400 font-mono">MODULE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                            </div>
                            <h5 className="text-sm font-bold text-white font-outfit">{mod.title}</h5>
                            <p className="text-xs text-slate-300 leading-relaxed">{mod.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 6: LITERATURE & REFERENCES */}
                {activeTab === "literature" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Literature Review */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-4">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                        <Award className="h-5 w-5 text-cyan-400" />
                        <span>Academic Review of Literature</span>
                      </h4>

                      <div className="space-y-3">
                        {[
                          {
                            author: "Kotler and Keller (2016)",
                            work: "Marketing Management — Pearson Education",
                            summary: "Analyzed the strategic paradigm transition from product-centered marketing to customer-centric engagement models. Proved that digital channels enable personalized direct communication, driving higher customer satisfaction and lifetime retention."
                          },
                          {
                            author: "Chaffey (2020)",
                            work: "Digital Marketing: Strategy, Implementation and Practice — Pearson",
                            summary: "Explored how digital platforms transcend geographical boundaries at low unit cost, demonstrating that real-time analytical reporting enables dynamic campaign optimization and higher resource efficiency."
                          },
                          {
                            author: "Smith and Zook (2019)",
                            work: "Marketing Communications: Integrating Offline and Online — Kogan Page",
                            summary: "Focused on consumer purchase behavior across social networks, establishing that peer recommendations, reviews, and community conversations strongly dictate modern consumer decision journeys."
                          },
                          {
                            author: "Ryan (2018)",
                            work: "Understanding Digital Marketing — Kogan Page",
                            summary: "Evaluated the sustained legitimacy and brand recall of traditional media (television, newspapers, outdoor), validating its importance for building trust and reaching non-digital-native demographics."
                          }
                        ].map((item) => (
                          <div key={item.author} className="rounded-xl border border-white/5 bg-slate-900/80 p-4 space-y-1">
                            <h5 className="text-sm font-bold text-cyan-300">{item.author}</h5>
                            <p className="text-xs font-mono text-slate-400">{item.work}</p>
                            <p className="text-xs text-slate-300 leading-relaxed pt-1">{item.summary}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Academic References */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 space-y-3">
                      <h4 className="text-base font-bold text-white font-outfit">Academic Bibliography & References</h4>
                      <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside font-mono">
                        <li>Kotler, P., & Keller, K. L. (2016). Marketing Management. Pearson Education.</li>
                        <li>Chaffey, D. (2020). Digital Marketing: Strategy, Implementation and Practice. Pearson.</li>
                        <li>Ryan, D. (2018). Understanding Digital Marketing. Kogan Page.</li>
                        <li>Smith, P. R., & Zook, Z. (2019). Marketing Communications: Integrating Offline and Online. Kogan Page.</li>
                        <li>Armstrong, G., & Kotler, P. (2021). Principles of Marketing. Pearson Education.</li>
                      </ol>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="border-t border-white/10 bg-slate-950/90 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="text-xs text-slate-400 font-mono">
                  Boda Rithwik • KL University School of Management
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/bba-research-paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="Boda_Rithwik_BBA_Research_Paper.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-black text-slate-950 transition-all hover:bg-cyan-300"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={() => setSelectedResearch(false)}
                    className="rounded-xl border border-white/15 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
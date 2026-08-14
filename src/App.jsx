import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CareerGuidance from "./components/CareerGuidance";
import Certificates from "./components/Certificates";
import Resumes from "./components/Resumes";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen w-full bg-[#070d19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />

      <main className="w-full">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CareerGuidance />
        <Certificates />
        <Resumes />
        <GitHubActivity />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resumes from "./components/Resumes";
import Certificates from "./components/Certificates";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <CustomCursor />
      <Navbar />
      <main className="w-full">
        <Hero />
        <Resumes />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
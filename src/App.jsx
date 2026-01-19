import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#030014] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Experience />
      <Achievements />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

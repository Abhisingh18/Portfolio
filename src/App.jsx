import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Freelancing from "./components/Freelancing";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      {/* Order follows how a recruiter reads a portfolio: who, then proof,
          then work, then how to reach him. */}
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Freelancing />
        <Achievements />
        <Skills />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

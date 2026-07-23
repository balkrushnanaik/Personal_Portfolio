import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Achievements from "./components/Achievements/Achievements";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Achievements />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
          >
            <Link to="home" smooth duration={500} className="scroll-top-btn" aria-label="Scroll to top">
              <FaArrowUp size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="loading-mark"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 24 24" width="30" height="30">
          <rect x="3" y="12" width="4" height="9" rx="1" fill="#fff" />
          <rect x="10" y="7" width="4" height="14" rx="1" fill="#fff" opacity="0.85" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#fff" opacity="0.6" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

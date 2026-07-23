import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { siteConfig } from "../../data/siteConfig";
import "./Navbar.css";

const NAV_ITEMS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "certifications", label: "Certifications" },
  { to: "education", label: "Education" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-progress" style={{ width: `${progress}%` }} />
      <div className="container navbar-inner">
        <Link to="home" smooth duration={500} className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="navbar-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" />
              <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.85" />
              <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.6" />
            </svg>
          </span>
          <span>Balkrushna<span className="navbar-logo-dot">.</span></span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              duration={500}
              offset={-76}
              activeClass="is-active"
              className="navbar-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={siteConfig.resumeUrl} className="btn btn-primary btn-sm" download>
            Resume
          </a>
          <button
            className="navbar-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                offset={-64}
                activeClass="is-active"
                className="navbar-mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.resumeUrl} className="btn btn-primary" download>
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

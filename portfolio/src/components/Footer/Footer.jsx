import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa6";
import { siteConfig } from "../../data/siteConfig";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Balkrushna<span className="footer-logo-dot">.</span></span>
          <p className="footer-tag">Data Analyst turning raw data into actionable business insights.</p>
        </div>

        <div className="footer-social">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email"><FaEnvelope size={18} /></a>
        </div>

        <Link to="home" smooth duration={500} className="footer-top" aria-label="Back to top">
          <FaArrowUp size={14} />
        </Link>
      </div>

      <div className="container footer-bottom">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

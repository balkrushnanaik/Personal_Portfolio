import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { siteConfig } from "../../data/siteConfig";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const chips = [
  { label: "SQL", top: "6%", left: "2%", delay: 0 },
  { label: "Python", top: "34%", left: "-8%", delay: 0.6 },
  { label: "Power BI", top: "68%", left: "0%", delay: 1.2 },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.p className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            Data Analyst · Fresher · Pune, India
          </motion.p>

          <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={1}>
            {siteConfig.name}
          </motion.h1>

          <motion.h2 className="hero-tagline" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            {siteConfig.tagline}
          </motion.h2>

          <motion.p className="hero-intro" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            {siteConfig.intro}
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            <a href={siteConfig.resumeUrl} className="btn btn-primary" download>
              <HiOutlineDownload size={18} /> Download Resume
            </a>
            <Link to="contact" smooth duration={500} offset={-76} className="btn btn-ghost">
              Contact Me
            </Link>
            <Link to="projects" smooth duration={500} offset={-76} className="btn btn-ghost">
              View Projects <FaArrowRight size={13} />
            </Link>
          </motion.div>

          <motion.div className="hero-social" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FaGithub size={18} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FaLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-panel-wrap"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <DashboardMock />
          {chips.map((c) => (
            <motion.span
              key={c.label}
              className="hero-chip"
              style={{ top: c.top, left: c.left }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const bars = [38, 62, 48, 80, 56, 70, 90];
  return (
    <div className="dash-mock">
      <div className="dash-mock-head">
        <div className="dash-dots">
          <span /><span /><span />
        </div>
        <span className="dash-title">insights.overview()</span>
      </div>

      <div className="dash-mock-body">
        <div className="dash-metric-row">
          <div className="dash-metric">
            <span className="dash-metric-label">Revenue</span>
            <span className="dash-metric-value">₹42.8L</span>
            <span className="dash-metric-delta up">+18.4%</span>
          </div>
          <div className="dash-metric">
            <span className="dash-metric-label">Churn</span>
            <span className="dash-metric-value">3.1%</span>
            <span className="dash-metric-delta down">-0.6%</span>
          </div>
        </div>

        <div className="dash-bars" role="img" aria-label="Sample analytics bar chart">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="dash-bar"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.07, ease: "easeOut" }}
            />
          ))}
        </div>

        <svg className="dash-line" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
          <motion.polyline
            points="0,45 40,38 80,42 120,20 160,28 200,12 240,18 300,4"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

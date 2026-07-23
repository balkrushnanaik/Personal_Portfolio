import { motion } from "framer-motion";
import { FaDatabase, FaChartPie, FaLightbulb, FaLayerGroup } from "react-icons/fa6";
import "./About.css";

const points = [
  {
    icon: FaDatabase,
    title: "SQL & Data Handling",
    desc: "Comfortable extracting, joining and aggregating data across relational databases like MySQL and Snowflake.",
  },
  {
    icon: FaChartPie,
    title: "Business Intelligence",
    desc: "Building Power BI and Tableau dashboards that turn raw numbers into decisions leadership can act on.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    desc: "Approaching every dataset by asking what business question it actually needs to answer first.",
  },
  {
  icon: FaLayerGroup,
  title: "Continuous Learner",
  desc: "Solving Python and SQL problems daily, from basic to intermediate level, and regularly sharing my progress on LinkedIn.",
},
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">
            A Data Analyst fresher who treats every dataset as a business problem first.
          </h2>
          <p className="about-text">
            I'm a final-year Computer Engineering student at SPPU with a strong pull toward
            Data Analytics and Business Intelligence. I enjoy the full cycle of a project —
            cleaning messy data, writing SQL to shape it, building dashboards in Power BI or
            Excel, and, most importantly, pulling out the one or two insights that actually
            change a decision.
          </p>
          <p className="about-text">
            Alongside my degree, I've built a portfolio of ten-plus analytics projects across
            retail, HR, healthcare and sports data, and completed a UI/UX Designer internship
            that sharpened how I think about presenting data to non-technical audiences.
          </p>
        </motion.div>

        <div className="about-grid">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              className="about-point"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="about-point-icon"><p.icon size={18} /></span>
              <h3 className="about-point-title">{p.title}</h3>
              <p className="about-point-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

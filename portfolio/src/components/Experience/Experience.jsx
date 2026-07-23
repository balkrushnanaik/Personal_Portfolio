import { motion } from "framer-motion";
import { FaBriefcase, FaCircleCheck } from "react-icons/fa6";
import { experience } from "../../data/education";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Hands-on, project-driven experience</h2>
        </div>

        <motion.div
          className="exp-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="exp-card-top">
            <span className="exp-icon"><FaBriefcase size={18} /></span>
            <div>
              <h3 className="exp-title">{experience.title}</h3>
              <p className="exp-meta">{experience.org} · {experience.period}</p>
            </div>
          </div>
          <ul className="exp-list">
            {experience.points.map((point) => (
              <li key={point}>
                <FaCircleCheck size={14} className="exp-check" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

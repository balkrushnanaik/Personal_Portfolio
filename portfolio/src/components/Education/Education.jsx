import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { education } from "../../data/education";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="edu-timeline">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              className="edu-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="edu-marker">
                <FaGraduationCap size={16} />
              </div>
              <div className="edu-card">
                <span className="edu-period metric-num">{e.period}</span>
                <h3 className="edu-degree">{e.degree}</h3>
                <p className="edu-institute">{e.institute}</p>
                <span className="tag">{e.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import Icon from "../IconMap";
import { certifications } from "../../data/education";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Credentials that back up the work</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="cert-icon"><Icon name={c.icon} size={20} /></span>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

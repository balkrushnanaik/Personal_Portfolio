import { motion } from "framer-motion";
import Icon from "../IconMap";
import { services } from "../../data/education";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">What I can help with</h2>
          <p className="section-sub">Practical, end-to-end analytics work — not just pretty charts.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="service-icon"><Icon name={s.icon} size={19} /></span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

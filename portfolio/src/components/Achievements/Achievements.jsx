import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { achievements } from "../../data/education";
import "./Achievements.css";

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="ach-number metric-num">
      {value}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="section achievements">
      <div className="container">
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              className="ach-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Counter to={a.number} suffix={a.suffix} />
              <span className="ach-label">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

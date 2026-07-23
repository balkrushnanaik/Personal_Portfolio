import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../IconMap";
import { skillCategories, flatSkills } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...skillCategories.map((c) => c.label)];
  const visible =
    active === "All" ? flatSkills : skillCategories.find((c) => c.label === active)?.skills || [];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Technical Skills</p>
          <h2 className="section-title">The toolkit I use to turn data into decisions</h2>
          <p className="section-sub">
            From cleaning raw exports to shipping a polished Power BI dashboard — here's what I
            reach for at each stage.
          </p>
        </div>
      </div>

      <div className="skills-marquee-wrap">
        <div className="skills-marquee-track">
          {[...flatSkills, ...flatSkills].map((s, i) => (
            <SkillChip key={`${s.name}-${i}`} skill={s} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              className={`skills-tab ${active === t ? "is-active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visible.map((s, i) => (
            <motion.div
              key={s.name}
              className="skills-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="skills-card-head">
                <span className="skills-card-icon"><Icon name={s.icon} size={17} /></span>
                <span className="skills-card-name">{s.name}</span>
                <span className="skills-card-pct metric-num">{s.level}%</span>
              </div>
              <div className="skills-bar-track">
                <motion.div
                  className="skills-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillChip({ skill }) {
  return (
    <div className="skill-chip">
      <span className="skill-chip-icon"><Icon name={skill.icon} size={18} /></span>
      <span>{skill.name}</span>
    </div>
  );
}

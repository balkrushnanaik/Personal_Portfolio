import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaGithub, FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { projects } from "../../data/projects";
import "swiper/css";
import "swiper/css/pagination";
import "./Projects.css";

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Ten dashboards. Ten business questions, actually answered.</h2>
            <p className="section-sub">Each project starts with a real business problem, not just a dataset.</p>
          </div>
          <div className="projects-nav">
            <button ref={prevRef} className="projects-nav-btn" aria-label="Previous project">
              <FaChevronLeft size={14} />
            </button>
            <button ref={nextRef} className="projects-nav-btn" aria-label="Next project">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="container projects-swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.08}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 20 },
            900: { slidesPerView: 2.2, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="projects-swiper"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={p.id}>
              <ProjectCard project={p} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-cover" style={{ background: `linear-gradient(135deg, ${project.accent}, #0B1220)` }}>
        <span className="project-index metric-num">0{index + 1}</span>
        <div className="project-cover-chart" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ height: `${28 + ((i * 13) % 55)}%` }} />
          ))}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <dl className="project-facts">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Insight</dt>
            <dd>{project.insight}</dd>
          </div>
          <div>
            <dt>Impact</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>

        <div className="project-tools">
          {project.tools.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            <FaGithub size={14} /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Live Demo <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

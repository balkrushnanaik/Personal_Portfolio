import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { siteConfig } from "../../data/siteConfig";
import "./Contact.css";

const SERVICE_ID = import.meta.env.service_x5e2qze;
const TEMPLATE_ID = import.meta.env.template_rbo3b8l;
const PUBLIC_KEY = import.meta.env.f8SfZHZlIY5u7TEkU;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's talk about your data</h2>
          <p className="section-sub">
            Open to Data Analyst, Business Analyst, MIS Analyst and Reporting Analyst roles.
            Feel free to reach out — I usually reply within a day.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon"><FaLocationDot size={16} /></span>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">{siteConfig.location}</span>
              </div>
            </li>
            <li>
              <span className="contact-icon"><FaEnvelope size={16} /></span>
              <div>
                <span className="contact-label">Email</span>
                <a className="contact-value" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><FaGithub size={16} /></span>
              <div>
                <span className="contact-label">GitHub</span>
                <a className="contact-value" href={siteConfig.github} target="_blank" rel="noreferrer">
                  {siteConfig.github.replace("https://", "")}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><FaLinkedin size={16} /></span>
              <div>
                <span className="contact-label">LinkedIn</span>
                <a className="contact-value" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                  {siteConfig.linkedin.replace("https://", "")}
                </a>
              </div>
            </li>
          </ul>

          <a href={siteConfig.resumeUrl} className="btn btn-ghost" download>
            <HiOutlineDownload size={17} /> Download Resume
          </a>
        </motion.div>

        <motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="user_name" type="text" placeholder="Your full name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="user_email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me a bit about the role or project..." required />
          </div>

          <button type="submit" className="btn btn-primary contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && <p className="form-status ok">Thanks — your message has been sent!</p>}
          {status === "error" && (
            <p className="form-status err">
              Message service isn't configured yet. Please reach out directly via email instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import najwaImg from "./assets/najwa.jpg";
import { projects } from "./data/projects";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const organizations = [
    {
      id: 1,
      name: "Nihon no Matsuri",
      institution: "Telkom University",
      division: "Desain & Publikasi",
      period: "2023–2024",
      description: "Mengelola materi visual dan publikasi acara.",
    },
    {
      id: 2,
      name: "Laboratorium Rangkaian Listrik",
      institution: "Telkom University",
      division: "Asisten Praktikum",
      period: "2023–2025",
      description: "Membimbing praktikum rangkaian listrik.",
    },
  ];

  return (
    <div className="portfolio-container">
      {/* SCROLL PROGRESS */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-box">Najwa</div>
          <div className="brand-name">PORTFOLIO</div>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#hero">Beranda</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#organizations">Organisasi</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="hero-grid">
          <div>
            <div className="hero-label">MAHASISWA TEKNIK KOMPUTER</div>
            <h1 className="hero-title">
              <span className="title-line highlight">PORTFOLIO</span>
              <span className="title-line">NAJWA SYAFIRA</span>
              <span className="title-line">FIRDAUS</span>
            </h1>
          </div>

          <div className="hero-sidebar">
            <img src={najwaImg} alt="Najwa" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <span className="section-number">[ 02 ]</span>
          <h2 className="section-title">PROYEK</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              to={`/project/${p.id}`}
              className="project-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-header">
                <span className="project-number">
                  {String(p.id).padStart(2, "0")}
                </span>
                <span className="project-year">{p.year}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <div className="project-category">{p.category}</div>
              <p className="project-description">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="project-tag">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section id="organizations" className="organizations-section">
        <div className="section-header">
          <span className="section-number">[ 03 ]</span>
          <h2 className="section-title">ORGANISASI</h2>
        </div>

        <div className="organizations-list">
          {organizations.map((o) => (
            <div key={o.id} className="org-card">
              <div className="org-header">
                <div className="org-number">
                  {String(o.id).padStart(2, "0")}
                </div>
                <div className="org-period">{o.period}</div>
              </div>

              <div className="org-content">
                <h3 className="org-name">{o.name}</h3>
                <div className="org-institution">{o.institution}</div>
                <div className="org-division">{o.division}</div>
                <p className="org-description">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <span className="section-number">[ 04 ]</span>
          <h2 className="section-title">KONTAK</h2>
        </div>

        <a href="mailto:najwasyafiraf@gmail.com" className="contact-link">
          <span className="link-label">EMAIL</span>
          <span className="link-value">najwasyafiraf@gmail.com</span>
        </a>
      </section>
    </div>
  );
};

export default Portfolio;

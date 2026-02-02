import { useParams, Link } from "react-router-dom";
import { projects } from "./data/projects";
import "./portfolio.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <p>Project tidak ditemukan</p>;
  }

  return (
    <div className="portfolio-container">
      <section className="projects-section">
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          ← Kembali
        </Link>

        <h1 className="project-title" style={{ marginTop: "2rem" }}>
          {project.title}
        </h1>

        <p className="project-category">{project.category} • {project.year}</p>
        <p className="project-description">{project.detail}</p>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

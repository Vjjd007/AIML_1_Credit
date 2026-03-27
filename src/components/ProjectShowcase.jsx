export default function ProjectShowcase({ projects }) {
  return (
    <div className="projects-showcase">
      {projects.map((project) => (
        <a key={project.id} href={project.link} className="project-item">
          <div className="project-image">{project.image}</div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-overlay"></div>
        </a>
      ))}
    </div>
  )
}

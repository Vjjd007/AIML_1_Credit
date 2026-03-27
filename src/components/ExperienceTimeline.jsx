export default function ExperienceTimeline({ experience }) {
  return (
    <div className="timeline">
      {experience.map((exp, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="exp-header">
              <h4 className="exp-role">{exp.role}</h4>
              <span className="exp-period">{exp.period}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-description">{exp.description}</p>
            <div className="exp-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="exp-skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

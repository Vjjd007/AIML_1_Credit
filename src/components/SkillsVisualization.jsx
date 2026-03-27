export default function SkillsVisualization({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skillGroup, idx) => (
        <div key={idx} className="skill-category">
          <h4>{skillGroup.category}</h4>
          <div className="skill-items">
            {skillGroup.items.map((skill, i) => (
              <div key={i} className="skill-badge">
                <span>{skill}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ animationDelay: `${i * 0.1}s` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

import { useState } from 'react'
import Hero3D from './components/Hero3D'
import SkillsVisualization from './components/SkillsVisualization'
import ExperienceTimeline from './components/ExperienceTimeline'
import StatsCounter from './components/StatsCounter'
import ProjectShowcase from './components/ProjectShowcase'
import ContactForm from './components/ContactForm'

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  const stats = [
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Happy Clients', value: 8, suffix: '+' },
    { label: 'Years Experience', value: 4, suffix: '' },
    { label: 'Tech Stack', value: 20, suffix: '+' },
  ]

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Vue.js', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'] },
    { category: 'Tools & DevOps', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Vite'] },
    { category: '3D & Animation', items: ['Babylon.js', 'Canvas API', 'GSAP', 'Framer Motion', 'Blender', 'WebGL Shaders'] },
  ]

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc',
      period: '2023 - Present',
      description: 'Led frontend architecture redesign, improved performance by 45%, mentored 3 junior developers.',
      skills: ['React', 'TypeScript', 'Performance Optimization']
    },
    {
      role: 'Full Stack Developer',
      company: 'Creative Digital Agency',
      period: '2021 - 2023',
      description: 'Built 10+ interactive web applications, implemented real-time features, maintained 99.5% uptime.',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Developed responsive UIs, fixed critical bugs, contributed to API design discussions.',
      skills: ['JavaScript', 'React', 'CSS']
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'web',
      description: 'Real-time data visualization with ML-powered insights and predictive analytics.',
      image: '📊',
      tags: ['React', 'D3.js', 'WebGL', 'Node.js'],
      featured: true,
      link: '#'
    },
    {
      id: 2,
      title: 'Immersive 3D E-Commerce',
      category: '3d',
      description: 'Interactive product showcase with WebGL, real-time 3D model manipulation.',
      image: '🎮',
      tags: ['Three.js', 'React', 'Babylon.js'],
      featured: true,
      link: '#'
    },
    {
      id: 3,
      title: 'Meditation App with 3D Environments',
      category: '3d',
      description: 'Immersive meditation platform with procedurally generated 3D soundscapes.',
      image: '🧘',
      tags: ['React', 'Three.js', 'Web Audio API'],
      link: '#'
    },
    {
      id: 4,
      title: 'Microservices Architecture Platform',
      category: 'backend',
      description: 'Scalable backend infrastructure with containerized microservices and monitoring.',
      image: '⚙️',
      tags: ['Node.js', 'Docker', 'Kubernetes', 'GraphQL'],
      featured: true,
      link: '#'
    },
    {
      id: 5,
      title: 'Real-Time Collaboration Tool',
      category: 'web',
      description: 'Live document editing with WebSockets and operational transformation.',
      image: '👥',
      tags: ['React', 'Socket.io', 'MongoDB'],
      link: '#'
    },
    {
      id: 6,
      title: 'AR-enabled Mobile App',
      category: 'mobile',
      description: 'Augmented reality furniture visualization using ARKit and WebAR.',
      image: '📱',
      tags: ['React Native', 'ARKit', 'WebAR'],
      link: '#'
    },
  ]

  const testimonials = [
    {
      text: 'Vijay transformed our outdated frontend into a modern, performant masterpiece. His attention to detail and problem-solving skills are exceptional.',
      author: 'Sarah Johnson',
      role: 'Product Manager, TechCorp',
      rating: 5
    },
    {
      text: 'Working with Vijay on the 3D visualization project was amazing. He delivered beyond expectations with creative solutions.',
      author: 'Alex Chen',
      role: 'CEO, Creative Labs',
      rating: 5
    },
    {
      text: 'Vijay is a rockstar developer who can handle both frontend and backend challenges with grace and efficiency.',
      author: 'Maria Garcia',
      role: 'CTO, StartUp Innovations',
      rating: 5
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="app-container">
      <Hero3D />

      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, i) => (
            <StatsCounter key={i} {...stat} />
          ))}
        </div>
      </section>

      <main className="content">
        <section id="about" className="panel panel-gradient">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="accent-bar"></div>
          </div>
          <p className="intro-text">
            Hi! I'm a full-stack developer passionate about building interactive, performance-optimized web experiences. 
            I specialize in <span className="highlight">React, Three.js, and Cloud Architecture</span>, with a focus on 
            creating immersive 3D applications and scalable backend systems.
          </p>
          <p className="intro-text">
            When I'm not coding, I explore emerging web technologies, contribute to open-source projects, and mentor aspiring developers.
          </p>
        </section>

        <section id="skills" className="panel panel-dark">
          <div className="section-header">
            <h2>Skills & Expertise</h2>
            <div className="accent-bar"></div>
          </div>
          <SkillsVisualization skills={skills} />
        </section>

        <section id="experience" className="panel panel-gradient">
          <div className="section-header">
            <h2>Experience</h2>
            <div className="accent-bar"></div>
          </div>
          <ExperienceTimeline experience={experience} />
        </section>

        <section id="projects" className="panel panel-dark">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <div className="accent-bar"></div>
          </div>
          
          <div className="filter-buttons">
            {['all', 'web', '3d', 'backend', 'mobile'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All Projects' : filter.toUpperCase()}
              </button>
            ))}
          </div>

          <ProjectShowcase projects={filteredProjects} />
        </section>

        <section id="testimonials" className="panel panel-gradient">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <div className="accent-bar"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="panel panel-dark">
          <div className="section-header">
            <h2>Let's Connect</h2>
            <div className="accent-bar"></div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Vijay Portfolio • Crafted with React, Three.js & ✨</p>
          <div className="social-links">
            <a href="#" title="GitHub">💻</a>
            <a href="#" title="LinkedIn">🔗</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Email">✉️</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

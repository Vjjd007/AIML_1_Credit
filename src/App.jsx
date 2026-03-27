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
    { label: 'Projects Completed', value: 3, suffix: '' },
    { label: 'CGPA', value: 7.5, suffix: '' },
    { label: 'Skills Mastered', value: 7, suffix: '+' },
    { label: 'Current Year', value: 3, suffix: 'rd' },
  ]

  const skills = [
    { category: 'Programming Languages', items: ['Java (Basics)', 'Python (Basics)', 'C++ (Basics)'] },
    { category: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Other', items: ['Hardware & IoT'] },
  ]

  const experience = [
    {
      role: 'Bachelor of Engineering (B.E) – Artificial Intelligence & Machine Learning',
      company: 'K.S. Rangasamy College of Technology, Tiruchengode',
      period: '2023 – 2027 (Currently 3rd Year)',
      description: 'CGPA: 7.5',
      skills: ['AI & ML']
    },
    {
      role: 'Higher Secondary Education (HSC)',
      company: 'URC Palaniammal Matric Higher Secondary School, Thindal',
      period: 'Completed',
      description: '12TH Percentage: 79.9%',
      skills: ['Science']
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'Phono Kit – Assistive Learning Device for Speech-Challenged Individuals',
      category: 'iot',
      description: 'Designed a toy-shaped interactive assistive device to help physically challenged individuals who face speech and pronunciation difficulties. Developed a word display and reading practice system with points and star-based rewards.',
      image: '🗣️',
      tags: ['Python', 'C++', 'Raspberry Pi 5', 'IoT'],
      featured: true,
      link: '#'
    },
    {
      id: 2,
      title: 'River Pollution Monitoring and Alert System',
      category: 'iot',
      description: 'Developed an IoT-based system to detect river water pollution caused by illegal industrial discharge. Used sensors to monitor pH level, temperature, turbidity, and water quality parameters.',
      image: '🌊',
      tags: ['IoT', 'Sensors', 'Raspberry Pi', 'GSM'],
      featured: true,
      link: '#'
    },
    {
      id: 3,
      title: 'AI-Based Fake Certificate Detection Using Image Forensics',
      category: 'ai',
      description: 'Designed a machine learning model to detect tampered or forged certificates from uploaded PDF documents. Applied image forensic analysis techniques to identify editing and manipulation.',
      image: '🔍',
      tags: ['Python', 'Machine Learning', 'Image Forensics'],
      featured: true,
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

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-name">VIJAY E</h1>
          <p className="hero-title">AI & ML Engineering Student & Web Developer</p>
          <p className="hero-location">Erode, Tamilnadu</p>
        </div>
      </section>

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
            A motivated and technically focused Web Developer and AI & ML Engineering student with a strong foundation in programming, web technologies, and emerging AI-based solutions. Passionate about designing innovative, user-centric, and socially impactful systems by leveraging modern technologies.
          </p>
          <p className="intro-text">
            Seeking opportunities to apply my technical knowledge, problem-solving skills, and creativity in real world projects while continuously learning and growing in the field of software development and artificial intelligence.
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
            <h2>Education</h2>
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
            {['all', 'iot', 'ai'].map(filter => (
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
            <a href="https://github.com/Vjjd007" title="GitHub">💻</a>
            <a href="#" title="LinkedIn">🔗</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="mailto:vjjdvjjd0@gmail.com" title="Email">✉️</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

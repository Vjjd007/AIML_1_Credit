import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:vijay@email.com">vijay@email.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <span className="contact-icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href="#" target="_blank" rel="noopener noreferrer">Connect with me</a>
              </div>
            </div>
            
            <div className="contact-method">
              <span className="contact-icon">🐙</span>
              <div>
                <h4>GitHub</h4>
                <a href="#" target="_blank" rel="noopener noreferrer">View my projects</a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          
          {submitted && <p className="form-success">Message sent! I'll get back to you soon. ✨</p>}
        </form>
      </div>
    </div>
  )
}

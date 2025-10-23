// src/pages/Home.jsx
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section id="home" className="section hero">
      <div className="container grid two-col">
        <div className="hero-content">
          <p className="eyebrow">💻 Full-Stack Web Developer | Freelancer</p>
          <h1>👋 Hi, I’m Dev Star</h1>
          <p className="lead">I build modern, responsive, and scalable web applications. Let’s turn your ideas into reality 🚀</p>
          <div className="cta-group">
            <Link to="/contact" className="btn btn-primary">Hire Me</Link>
            <Link to="/projects" className="btn btn-ghost">See My Work</Link>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <span className="badge">Available for work</span>
            <h3>Let’s build something great</h3>
            <p>Open to frontend, full‑stack, and AI integrations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
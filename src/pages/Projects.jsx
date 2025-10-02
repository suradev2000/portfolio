// src/pages/Projects.jsx
export default function Projects() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Selected work with code and demos.</p>
          </div>
          <div className="grid three-col projects-grid">
            <article className="card project">
              <h3>📝 To-Do List App</h3>
              <p>A simple task manager with LocalStorage support.</p>
              <div className="chip-group">
                <span className="chip">HTML</span><span className="chip">CSS</span><span className="chip">JavaScript</span>
              </div>
              <div className="link-group">
                <a href="#" target="_blank" rel="noopener" className="text-link">Live Demo</a>
                <a href="#" target="_blank" rel="noopener" className="text-link">GitHub</a>
              </div>
            </article>
            <article className="card project">
              <h3>🎬 Movie Search App</h3>
              <p>Search movies using an API (built with React).</p>
              <div className="chip-group">
                <span className="chip">React</span><span className="chip">API</span>
              </div>
              <div className="link-group">
                <a href="#" target="_blank" rel="noopener" className="text-link">Live Demo</a>
                <a href="#" target="_blank" rel="noopener" className="text-link">GitHub</a>
              </div>
            </article>
            <article className="card project">
              <h3>📓 Notes API</h3>
              <p>REST API built with Node.js & Express, connected to MongoDB.</p>
              <div className="chip-group">
                <span className="chip">Node.js</span><span className="chip">Express</span><span className="chip">MongoDB</span>
              </div>
              <div className="link-group">
                <a href="#" target="_blank" rel="noopener" className="text-link">Live Demo</a>
                <a href="#" target="_blank" rel="noopener" className="text-link">GitHub</a>
              </div>
            </article>
            <article className="card project">
              <h3>📰 Full-Stack Blog App</h3>
              <p>Complete MERN application with login, post creation, and deployment.</p>
              <div className="chip-group">
                <span className="chip">MongoDB</span><span className="chip">Express</span><span className="chip">React</span><span className="chip">Node</span>
              </div>
              <div className="link-group">
                <a href="#" target="_blank" rel="noopener" className="text-link">Live Demo</a>
                <a href="#" target="_blank" rel="noopener" className="text-link">GitHub</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
  }
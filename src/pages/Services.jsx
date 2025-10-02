// src/pages/Services.jsx
export default function Services() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>How I can help you ship faster and better.</p>
          </div>
          <div className="grid three-col">
            <article className="card">
              <h3>🌐 Website Development</h3>
              <p>I create responsive and modern websites for businesses, startups, and personal brands.</p>
            </article>
            <article className="card">
              <h3>⚡ Frontend Development</h3>
              <p>Custom React applications with interactive and dynamic UIs.</p>
            </article>
            <article className="card">
              <h3>🛠 Backend Development</h3>
              <p>REST APIs and full-stack apps using Node.js, Express, and MongoDB.</p>
            </article>
            <article className="card">
              <h3>🐞 Bug Fixing & Optimization</h3>
              <p>Fix errors, improve performance, and add new features to existing projects.</p>
            </article>
          </div>
        </div>
      </section>
    )
  }
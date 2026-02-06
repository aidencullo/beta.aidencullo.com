import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

function App() {
  return (
    <div className="magazine">
      <div className="magazine-content">
        <header className="masthead">
          <span className="issue-label">Personal Site</span>
          <span className="issue-label">2025</span>
        </header>

        <div className="main-grid">
          <div className="headline-section">
            <h1 className="name">
              Aiden<br />Cullo
            </h1>
            <div className="divider" />
            <h2 className="title">Full Stack Software Engineer</h2>
          </div>

          <div className="feature-section">
            <div className="photo-frame">
              <img src="/profile.jpg" alt="Aiden Cullo" className="photo" />
            </div>
            <p className="bio">
              Building a firm-wide LLM tracking system at JP Morgan.
              Based in New York City.
            </p>
          </div>
        </div>

        <footer className="links-bar">
          <div className="divider" />
          <nav className="links">
            <a href="https://github.com/aidencullo" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aidencullo" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:aidencullo@gmail.com">
              <FaEnvelope /> Email
            </a>
            <a href="https://aidencullo.github.io/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt /> Resume
            </a>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default App

import React from 'react'

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1 className="name">Welcome</h1>
      <div className="links-container">
        <a href="https://github.com/aidencullo" target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        <a href="https://stackoverflow.com/users/6447634/aiden-cullo" target="_blank" rel="noopener noreferrer" className="link">
          Stack Overflow
        </a>
        <a href="https://www.linkedin.com/in/aidencullo" target="_blank" rel="noopener noreferrer" className="link">
          LinkedIn
        </a>
        <a href="mailto:aidencullo@gmail.com" className="link">
          Email
        </a>
      </div>
    </div>
  )
}

export default Welcome

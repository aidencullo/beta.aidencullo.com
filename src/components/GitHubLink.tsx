import React from 'react'
import { FaGithub } from 'react-icons/fa'

const GitHubLink: React.FC = () => {
  const url = "https://github.com/aidencullo"
  const title = "GitHub"
  
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="link"
      title={title}
    >
      <span className="link-icon"><FaGithub /></span>
    </a>
  )
}

export default GitHubLink

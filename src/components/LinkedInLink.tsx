import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const LinkedInLink: React.FC = () => {
  const url = "https://www.linkedin.com/in/aidencullo"
  const title = "LinkedIn"
  
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="link"
      title={title}
    >
      <span className="link-icon"><FaLinkedin /></span>
    </a>
  )
}

export default LinkedInLink

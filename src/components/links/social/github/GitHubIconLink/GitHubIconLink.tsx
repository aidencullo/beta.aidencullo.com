import React from 'react'
import { FaGithub } from 'react-icons/fa'
import GitHubLink from '../GitHubLink/GitHubLink'
import './GitHubIconLink.css'

const GitHubIconLink: React.FC = () => {
  return (
    <GitHubLink>
      <span className="link-icon"><FaGithub /></span>
    </GitHubLink>
  )
}

export default GitHubIconLink

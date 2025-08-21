import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ExternalLink from './ExternalLink'

const GitHubLink: React.FC = () => {
  const url = "https://github.com/aidencullo"
  const title = "GitHub"
  
  return (
    <ExternalLink href={url} title={title}>
      <span className="link-icon"><FaGithub /></span>
    </ExternalLink>
  )
}

export default GitHubLink

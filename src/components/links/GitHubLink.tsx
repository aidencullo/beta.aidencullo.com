import React from 'react'
import ExternalLink from './ExternalLink/ExternalLink'

interface GitHubLinkProps {
  children: React.ReactNode
  className?: string
}

const GitHubLink: React.FC<GitHubLinkProps> = ({ children, className }) => {
  const url = "https://github.com/aidencullo"
  const title = "GitHub"
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default GitHubLink

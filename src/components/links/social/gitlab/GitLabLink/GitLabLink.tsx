import React from 'react'
import ExternalLink from '@links/ExternalLink/ExternalLink'

interface GitLabLinkProps {
  children: React.ReactNode
  className?: string
}

const GitLabLink: React.FC<GitLabLinkProps> = ({ children, className }) => {
  const url = "https://gitlab.com/aidencullo"
  const title = "GitLab"
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default GitLabLink

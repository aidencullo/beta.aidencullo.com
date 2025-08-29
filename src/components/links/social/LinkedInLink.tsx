import React from 'react'
import ExternalLink from '../ExternalLink/ExternalLink'

interface LinkedInLinkProps {
  children: React.ReactNode
  className?: string
}

const LinkedInLink: React.FC<LinkedInLinkProps> = ({ children, className }) => {
  const url = "https://www.linkedin.com/in/aidencullo"
  const title = "LinkedIn"
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default LinkedInLink

import React from 'react'
import ExternalLink from '@links/ExternalLink/ExternalLink'

interface ResumeLinkProps {
  children: React.ReactNode
  className?: string
}

const ResumeLink: React.FC<ResumeLinkProps> = ({ children, className }) => {
  const url = "/resume.pdf"
  const title = "Resume"
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default ResumeLink

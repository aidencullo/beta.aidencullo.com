import React from 'react'
import ExternalLink from '../ExternalLink/ExternalLink'

interface BlogLinkProps {
  children: React.ReactNode
  className?: string
}

const BlogLink: React.FC<BlogLinkProps> = ({ children, className }) => {
  const url = "https://zhegemeiguoren.substack.com/"
  const title = "Substack"
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default BlogLink

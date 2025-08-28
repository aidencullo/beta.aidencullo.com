import React from 'react'
import Link from '../Link/Link'

interface ExternalLinkProps {
  href: string
  title: string
  children: React.ReactNode
  className?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  title, 
  children, 
  className
}) => {
  return (
    <Link 
      href={href} 
      title={title} 
      isExternal={true}
      className={className}
    >
      {children}
    </Link>
  )
}

export default ExternalLink

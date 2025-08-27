import React from 'react'
import Link from './Link'

interface InternalLinkProps {
  href: string
  title: string
  children: React.ReactNode
  className?: string
}

const InternalLink: React.FC<InternalLinkProps> = ({ 
  href, 
  title, 
  children, 
  className
}) => {
  return (
    <Link 
      href={href} 
      title={title} 
      isExternal={false}
      className={className}
    >
      {children}
    </Link>
  )
}

export default InternalLink

import React from 'react'

interface LinkProps {
  href: string
  title: string
  children: React.ReactNode
  isExternal?: boolean
  className?: string
}

const Link: React.FC<LinkProps> = ({ 
  href, 
  title, 
  children, 
  isExternal = false,
  className
}) => {
  const target = isExternal ? "_blank" : undefined
  const rel = isExternal ? "noopener noreferrer" : undefined
  
  return (
    <a 
      href={href} 
      title={title}
      target={target}
      rel={rel}
      className={`link ${className || ''}`}
    >
      {children}
    </a>
  )
}

export default Link

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
  className = "link"
}) => {
  return (
    <a 
      href={href} 
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={className}
      title={title}
    >
      {children}
    </a>
  )
}

export default Link

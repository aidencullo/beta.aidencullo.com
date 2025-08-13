import React from 'react'

interface LinkProps {
  name: string
  url: string
  isExternal?: boolean
  icon: string
}

const Link: React.FC<LinkProps> = ({ name, url, isExternal = false, icon }) => {
  return (
    <a 
      href={url} 
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="link"
    >
      <span className="link-icon">{icon}</span>
      <span className="link-text">{name}</span>
    </a>
  )
}

export default Link

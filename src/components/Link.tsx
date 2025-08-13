import React from 'react'

interface LinkProps {
  name: string
  url: string
  isExternal?: boolean
  icon: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ name, url, isExternal = false, icon }) => {
  return (
    <a 
      href={url} 
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="link"
      title={name}
    >
      <span className="link-icon">{icon}</span>
    </a>
  )
}

export default Link

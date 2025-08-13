import React from 'react'

interface LinkProps {
  name: string
  url: string
  isExternal?: boolean
}

const Link: React.FC<LinkProps> = ({ name, url, isExternal = false }) => {
  return (
    <a 
      href={url} 
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="link"
    >
      {name}
    </a>
  )
}

export default Link

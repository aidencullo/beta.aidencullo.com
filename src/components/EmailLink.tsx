import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const EmailLink: React.FC = () => {
  const email = "aidencullo@gmail.com"
  const title = "Email"
  const url = `mailto:${email}`
  
  return (
    <a 
      href={url} 
      className="link"
      title={title}
    >
      <span className="link-icon"><FaEnvelope /></span>
    </a>
  )
}

export default EmailLink

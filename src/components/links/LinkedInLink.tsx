import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import ExternalLink from './ExternalLink'

const LinkedInLink: React.FC = () => {
  const url = "https://www.linkedin.com/in/aidencullo"
  const title = "LinkedIn"
  
  return (
    <ExternalLink href={url} title={title}>
      <span className="link-icon"><FaLinkedin /></span>
    </ExternalLink>
  )
}

export default LinkedInLink

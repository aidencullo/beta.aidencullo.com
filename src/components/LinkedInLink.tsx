import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import BaseLink from './BaseLink'

const LinkedInLink: React.FC = () => {
  const url = "https://www.linkedin.com/in/aidencullo"
  const title = "LinkedIn"
  
  return (
    <BaseLink href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaLinkedin /></span>
    </BaseLink>
  )
}

export default LinkedInLink

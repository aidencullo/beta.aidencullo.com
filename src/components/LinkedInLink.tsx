import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import Link from './Link'

const LinkedInLink: React.FC = () => {
  const url = "https://www.linkedin.com/in/aidencullo"
  const title = "LinkedIn"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaLinkedin /></span>
    </Link>
  )
}

export default LinkedInLink

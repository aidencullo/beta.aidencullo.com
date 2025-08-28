import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import LinkedInLink from './LinkedInLink'

const LinkedInIconLink: React.FC = () => {
  return (
    <LinkedInLink>
      <span className="link-icon"><FaLinkedin /></span>
    </LinkedInLink>
  )
}

export default LinkedInIconLink

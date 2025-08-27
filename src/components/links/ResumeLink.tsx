import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import ExternalLink from './ExternalLink'

const ResumeLink: React.FC = () => {
  const url = "/resume.pdf"
  const title = "Resume"
  
  return (
    <ExternalLink href={url} title={title}>
      <span className="link-icon"><FaFileAlt /></span>
    </ExternalLink>
  )
}

export default ResumeLink

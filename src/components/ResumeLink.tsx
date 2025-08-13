import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import BaseLink from './BaseLink'

const ResumeLink: React.FC = () => {
  const url = "/resume.pdf"
  const title = "Resume"
  
  return (
    <BaseLink href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaFileAlt /></span>
    </BaseLink>
  )
}

export default ResumeLink

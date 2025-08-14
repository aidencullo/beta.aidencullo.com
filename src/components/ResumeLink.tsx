import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import Link from './Link'

const ResumeLink: React.FC = () => {
  const url = "/resume.pdf"
  const title = "Resume"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaFileAlt /></span>
    </Link>
  )
}

export default ResumeLink

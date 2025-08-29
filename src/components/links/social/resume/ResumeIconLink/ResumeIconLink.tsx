import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import ResumeLink from '../ResumeLink/ResumeLink'

const ResumeIconLink: React.FC = () => {
  return (
    <ResumeLink>
      <span className="link-icon"><FaFileAlt /></span>
    </ResumeLink>
  )
}

export default ResumeIconLink

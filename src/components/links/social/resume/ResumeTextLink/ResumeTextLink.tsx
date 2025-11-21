import React from 'react'
import ResumeLink from '../ResumeLink/ResumeLink'

const ResumeTextLink: React.FC = () => {
  const title = "Resume"
  
  return (
    <ResumeLink>
      {title}
    </ResumeLink>

  )
}

export default ResumeTextLink

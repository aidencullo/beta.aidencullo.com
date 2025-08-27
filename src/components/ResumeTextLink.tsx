import React from 'react'
import Link from './Link'

const ResumeTextLink: React.FC = () => {
  const url = "/resume.pdf"
  const title = "Resume"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      Resume
    </Link>
  )
}

export default ResumeTextLink

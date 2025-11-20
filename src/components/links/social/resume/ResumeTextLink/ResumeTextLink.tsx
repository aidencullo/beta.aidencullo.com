import React from 'react'
import Link from '@links/Link/Link'

const ResumeTextLink: React.FC = () => {
  const url = "/resume.pdf"
  const title = "Resume"
  
  return (
    <Link href={url} title={title} isExternal={true} download={true}>
      {title}
    </Link>
  )
}

export default ResumeTextLink

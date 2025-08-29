import React from 'react'
import Link from './Link/Link'

const LinkedInTextLink: React.FC = () => {
  const url = "https://www.linkedin.com/in/aidencullo/"
  const title = "LinkedIn"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default LinkedInTextLink

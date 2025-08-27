import React from 'react'
import Link from './Link'

const GitHubTextLink: React.FC = () => {
  const url = "https://github.com/aidencullo"
  const title = "GitHub"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      GitHub
    </Link>
  )
}

export default GitHubTextLink

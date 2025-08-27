import React from 'react'
import Link from './Link'

const GitHubPagesTextLink: React.FC = () => {
  const url = "https://pages.github.com/"
  const title = "GitHub Pages"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      GitHub Pages
    </Link>
  )
}

export default GitHubPagesTextLink

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Link from './Link'

const GitHubLink: React.FC = () => {
  const url = "https://github.com/aidencullo"
  const title = "GitHub"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaGithub /></span>
    </Link>
  )
}

export default GitHubLink

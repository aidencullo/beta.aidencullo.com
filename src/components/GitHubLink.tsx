import React from 'react'
import { FaGithub } from 'react-icons/fa'
import BaseLink from './BaseLink'

const GitHubLink: React.FC = () => {
  const url = "https://github.com/aidencullo"
  const title = "GitHub"
  
  return (
    <BaseLink href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaGithub /></span>
    </BaseLink>
  )
}

export default GitHubLink

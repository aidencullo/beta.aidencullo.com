import React from 'react'
import { FaGitlab } from 'react-icons/fa'
import GitLabLink from '../GitLabLink/GitLabLink'

const GitLabIconLink: React.FC = () => {
  return (
    <GitLabLink>
      <span className="link-icon"><FaGitlab /></span>
    </GitLabLink>
  )
}

export default GitLabIconLink

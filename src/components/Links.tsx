import React from 'react'
import GitHubLink from './GitHubLink'
import StackOverflowLink from './StackOverflowLink'
import LinkedInLink from './LinkedInLink'
import EmailLink from './EmailLink'

const Links: React.FC = () => {
  return (
    <div className="links-container">
      <GitHubLink />
      <StackOverflowLink />
      <LinkedInLink />
      <EmailLink />
    </div>
  )
}

export default Links

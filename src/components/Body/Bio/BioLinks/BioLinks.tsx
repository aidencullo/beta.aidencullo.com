import React from 'react'
import GitHubIconLink from '@links/social/github/GitHubIconLink/GitHubIconLink'
import GitLabIconLink from '@links/social/gitlab/GitLabIconLink/GitLabIconLink'
import StackOverflowIconLink from '@links/social/stackoverflow/StackOverflowIconLink/StackOverflowIconLink'
import LinkedInIconLink from '@links/social/linkedin/LinkedInIconLink/LinkedInIconLink'
import EmailIconLink from '@links/social/email/EmailIconLink/EmailIconLink'
import ResumeIconLink from '@links/social/resume/ResumeIconLink/ResumeIconLink'
import BlogIconLink from '@links/social/blog/BlogIconLink/BlogIconLink'
import './BioLinks.css'

const BioLinks: React.FC = () => {
  return (
    <div className="bio-links">
      <GitHubIconLink />
      {/* <GitLabIconLink />
      <StackOverflowIconLink /> */}
      <LinkedInIconLink />
      <EmailIconLink />
      <ResumeIconLink />
      {/* <BlogIconLink /> */}
    </div>
  )
}

export default BioLinks

import React from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import GitHubIconLink from '@links/social/github/GitHubIconLink/GitHubIconLink'
import StackOverflowIconLink from '@links/social/stackoverflow/StackOverflowIconLink/StackOverflowIconLink'
import LinkedInIconLink from '@links/social/linkedin/LinkedInIconLink/LinkedInIconLink'
import EmailIconLink from '@links/social/email/EmailIconLink/EmailIconLink'
import ResumeIconLink from '@links/social/resume/ResumeIconLink/ResumeIconLink'
import BlogIconLink from '@links/social/blog/BlogIconLink/BlogIconLink'
import './Bio.css'

const Bio: React.FC = () => {
  const bioRef = useScrollAnimation()
  const bioText = "Hello! My name is Aiden. I'm a software engineer based out of New York City. I'm a full stack engineer at JP Morgan where I'm developing a firm-wide LLM tracking system."

  return (
    <div ref={bioRef} className="bio-container" id="bio">
      <div className="profile-picture">
        <img src="/profile.jpg" alt="Aiden Cullo" />
      </div>
      
      <div className="bio-text">
        <p>{bioText}</p>
      </div>
      
      <div className="bio-links">
        <GitHubIconLink />
        <StackOverflowIconLink />
        <LinkedInIconLink />
        <EmailIconLink />
        <ResumeIconLink />
        <BlogIconLink />
      </div>
    </div>
  )
}

export default Bio

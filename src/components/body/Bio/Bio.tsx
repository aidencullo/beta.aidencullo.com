import React from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import GitHubIconLink from '../../links/social/GitHubIconLink'
import StackOverflowIconLink from '../../links/social/StackOverflowIconLink'
import LinkedInIconLink from '../../links/social/LinkedInIconLink'
import EmailIconLink from '../../links/social/EmailIconLink'
import ResumeIconLink from '../../links/social/ResumeIconLink'
import BlogIconLink from '../../links/social/BlogIconLink'
import './Bio.css'

const Bio: React.FC = () => {
  const bioRef = useScrollAnimation()

  return (
    <div ref={bioRef} className="bio-container" id="bio">
      <div className="profile-picture">
        <img src="/profile.jpg" alt="Aiden Cullo" />
      </div>
      
      <div className="bio-text">
        <p>Hello! My name is Aiden. I'm a software engineer based out of New York City. I'm a full stack engineer at JP Morgan where I'm developing a firm-wide LLM tracking system.</p>
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

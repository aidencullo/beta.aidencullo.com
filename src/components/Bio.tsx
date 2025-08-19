import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import GitHubLink from './GitHubLink'
import StackOverflowLink from './StackOverflowLink'
import LinkedInLink from './LinkedInLink'
import EmailLink from './EmailLink'
import ResumeLink from './ResumeLink'

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
        <GitHubLink />
        <StackOverflowLink />
        <LinkedInLink />
        <EmailLink />
        <ResumeLink />
      </div>
    </div>
  )
}

export default Bio

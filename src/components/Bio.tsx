import React from 'react'
import GitHubLink from './GitHubLink'
import StackOverflowLink from './StackOverflowLink'
import LinkedInLink from './LinkedInLink'
import EmailLink from './EmailLink'
import ResumeLink from './ResumeLink'

const Bio: React.FC = () => {
  return (
    <div className="bio-container" id="bio">
      <div className="profile-picture">
        <img src="/profile.jpg" alt="Aiden Cullo" />
      </div>
      
      <div className="bio-text">
        <p>My name is Aiden. I'm a software engineer based out of Brooklyn. I am a full stack engineer at JP Morgan where I'm developing a firm-wide LLM tracking system.</p>
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

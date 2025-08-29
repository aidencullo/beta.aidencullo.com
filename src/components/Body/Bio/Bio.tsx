import React from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import BioText from './BioText/BioText'
import BioLinks from './BioLinks/BioLinks'
import './Bio.css'

const Bio: React.FC = () => {
  const bioRef = useScrollAnimation()
  const bioText = "Hello! My name is Aiden. I'm a software engineer based out of New York City. I'm a full stack engineer at JP Morgan where I'm developing a firm-wide LLM tracking system."

  return (
    <div ref={bioRef} className="bio-container" id="bio">
      <ProfilePicture />
      <BioText text={bioText} />
      <BioLinks />
    </div>
  )
}

export default Bio

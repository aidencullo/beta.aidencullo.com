import React from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import BioText from './BioText/BioText'
import BioLinks from './BioLinks/BioLinks'
import './Bio.css'

const Bio: React.FC = () => {
  const bioRef = useScrollAnimation()

  return (
    <div ref={bioRef} className="bio-container" id="bio">
      <ProfilePicture />
      <BioText />
      <BioLinks />
    </div>
  )
}

export default Bio

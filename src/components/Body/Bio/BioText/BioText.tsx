import React from 'react'
import './BioText.css'

interface BioTextProps {
  text: string
}

const BioText: React.FC<BioTextProps> = ({ text }) => {
  return (
    <div className="bio-text">
      <p>{text}</p>
    </div>
  )
}

export default BioText

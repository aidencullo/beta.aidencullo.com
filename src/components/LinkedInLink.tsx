import React from 'react'
import Link from './Link'

const LinkedInLink: React.FC = () => {
  return (
    <Link 
      name="LinkedIn" 
      url="https://www.linkedin.com/in/aidencullo" 
      isExternal={true}
    />
  )
}

export default LinkedInLink

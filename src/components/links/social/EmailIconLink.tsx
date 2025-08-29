import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import EmailLink from './EmailLink'

const EmailIconLink: React.FC = () => {
  return (
    <EmailLink>
      <span className="link-icon"><FaEnvelope /></span>
    </EmailLink>
  )
}

export default EmailIconLink

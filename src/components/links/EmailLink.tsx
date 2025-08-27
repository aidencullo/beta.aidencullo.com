import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import ExternalLink from './ExternalLink'

const EmailLink: React.FC = () => {
  const email = "aidencullo@gmail.com"
  const title = "Email"
  const url = `mailto:${email}`
  
  return (
    <ExternalLink href={url} title={title}>
      <span className="link-icon"><FaEnvelope /></span>
    </ExternalLink>
  )
}

export default EmailLink

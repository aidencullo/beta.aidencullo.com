import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import BaseLink from './BaseLink'

const EmailLink: React.FC = () => {
  const email = "aidencullo@gmail.com"
  const title = "Email"
  const url = `mailto:${email}`
  
  return (
    <BaseLink href={url} title={title} isExternal={false}>
      <span className="link-icon"><FaEnvelope /></span>
    </BaseLink>
  )
}

export default EmailLink

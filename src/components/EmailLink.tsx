import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import Link from './Link'

const EmailLink: React.FC = () => {
  const email = "aidencullo@gmail.com"
  const title = "Email"
  const url = `mailto:${email}`
  
  return (
    <Link href={url} title={title} isExternal={false}>
      <span className="link-icon"><FaEnvelope /></span>
    </Link>
  )
}

export default EmailLink

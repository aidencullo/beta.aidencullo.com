import React from 'react'
import Link from './Link/Link'

const EmailTextLink: React.FC = () => {
  const email = "aidencullo@gmail.com"
  const title = "Email"
  const url = `mailto:${email}`
  
  return (
    <Link href={url} title={title}>
      Email
    </Link>
  )
}

export default EmailTextLink

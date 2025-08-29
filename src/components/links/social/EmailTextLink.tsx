import React from 'react'
import EmailLink from './EmailLink'

const EmailTextLink: React.FC = () => {
  const title = "Email"
  
  return (
    <EmailLink>
      {title}
    </EmailLink>
  )
}

export default EmailTextLink

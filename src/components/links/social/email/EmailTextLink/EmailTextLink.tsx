import React from 'react'
import EmailLink from '../EmailLink/EmailLink'

const EmailTextLink: React.FC = () => {
  const title = "Email"
  
  return (
    <EmailLink>
      {title}
    </EmailLink>
  )
}

export default EmailTextLink

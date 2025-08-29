import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'

const ContactLink: React.FC = () => {
  const title = "Contact"
  return (
    <InternalLink href="#" title={title} className="contact-link">
      {title}
    </InternalLink>
  )
}

export default ContactLink

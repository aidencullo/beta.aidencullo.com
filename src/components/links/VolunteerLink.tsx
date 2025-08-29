import React from 'react'
import InternalLink from './InternalLink/InternalLink'

const VolunteerLink: React.FC = () => {
  const title = "Volunteer"
  return (
    <InternalLink href="#" title={title} className="header-me-link">
      {title}
    </InternalLink>
  )
}

export default VolunteerLink

import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'

const VolunteerLink: React.FC = () => {
  const title = "Volunteer"
  return (
    <InternalLink href="#" title={title} className="volunteer-link">
      {title}
    </InternalLink>
  )
}

export default VolunteerLink

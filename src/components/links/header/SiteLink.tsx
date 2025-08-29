import React from 'react'
import InternalLink from '../InternalLink/InternalLink'

const SiteLink: React.FC = () => {
  const title = "Site"
  return (
    <InternalLink href="#" title={title} className="site-link">
      {title}
    </InternalLink>
  )
}

export default SiteLink

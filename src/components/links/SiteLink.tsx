import React from 'react'
import InternalLink from './InternalLink/InternalLink'

const SiteLink: React.FC = () => {
  return (
    <InternalLink href="#" title="Site" className="header-me-link">
      Site
    </InternalLink>
  )
}

export default SiteLink

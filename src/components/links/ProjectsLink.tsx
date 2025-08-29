import React from 'react'
import InternalLink from './InternalLink/InternalLink'

const ProjectsLink: React.FC = () => {
  const title = "Projects"
  return (
    <InternalLink href="#" title={title} className="header-me-link">
      {title}
    </InternalLink>
  )
}

export default ProjectsLink

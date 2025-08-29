import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'

const ProjectsLink: React.FC = () => {
  const title = "Projects"
  return (
    <InternalLink href="#" title={title} className="projects-link">
      {title}
    </InternalLink>
  )
}

export default ProjectsLink

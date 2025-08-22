import React from 'react'
import { FaRss } from 'react-icons/fa'
import ExternalLink from './ExternalLink'

const BlogLink: React.FC = () => {
  const url = "https://zhegemeiguoren.substack.com/"
  const title = "Substack"
  
  return (
    <ExternalLink href={url} title={title}>
      <span className="link-icon">
        <FaRss />
      </span>
    </ExternalLink>
  )
}

export default BlogLink

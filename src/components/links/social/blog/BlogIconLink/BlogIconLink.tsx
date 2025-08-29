import React from 'react'
import { FaRss } from 'react-icons/fa'
import BlogLink from '../BlogLink/BlogLink'

const BlogIconLink: React.FC = () => {
  return (
    <BlogLink>
      <span className="link-icon">
        <FaRss />
      </span>
    </BlogLink>
  )
}

export default BlogIconLink

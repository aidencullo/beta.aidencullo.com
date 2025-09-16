import React from 'react'
import Link from '@links/Link/Link'

const BlogTextLink: React.FC = () => {
  const url = "https://zhegemeiguoren.substack.com/"
  const title = "Blog"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default BlogTextLink

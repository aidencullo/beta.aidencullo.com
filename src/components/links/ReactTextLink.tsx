import React from 'react'
import Link from './Link/Link'

const ReactTextLink: React.FC = () => {
  const url = "https://react.dev/"
  const title = "React"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default ReactTextLink

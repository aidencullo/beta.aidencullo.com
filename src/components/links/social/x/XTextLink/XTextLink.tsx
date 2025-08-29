import React from 'react'
import Link from '@links/Link/Link'

const XTextLink: React.FC = () => {
  const url = "https://x.com/CuloEgan"
  const title = "X"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default XTextLink

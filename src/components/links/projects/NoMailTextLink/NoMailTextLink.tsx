import React from 'react'
import Link from '@links/Link/Link'

const NoMailTextLink: React.FC = () => {
  const url = "https://pypi.org/project/nomail/"
  const title = "NoMail"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default NoMailTextLink

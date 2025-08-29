import React from 'react'
import Link from './Link/Link'

const NoMailTextLink: React.FC = () => {
  const url = "https://github.com/aidencullo/nomail"
  const title = "NoMail"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default NoMailTextLink

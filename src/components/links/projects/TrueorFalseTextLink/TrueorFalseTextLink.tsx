import React from 'react'
import Link from '@links/Link/Link'

const TrueorFalseTextLink: React.FC = () => {
  const url = "https://github.com/aidencullo/trueorfalse.online"
  const title = "TrueorFalse"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default TrueorFalseTextLink

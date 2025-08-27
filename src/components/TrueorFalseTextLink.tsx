import React from 'react'
import Link from './Link'

const TrueorFalseTextLink: React.FC = () => {
  const url = "https://github.com/aidencullo/trueorfalse.online"
  const title = "TrueorFalse"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      TrueorFalse
    </Link>
  )
}

export default TrueorFalseTextLink

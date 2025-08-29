import React from 'react'
import Link from './Link/Link'

const NYCDSATextLink: React.FC = () => {
  const url = "https://socialists.nyc/"
  const title = "NYC DSA"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default NYCDSATextLink

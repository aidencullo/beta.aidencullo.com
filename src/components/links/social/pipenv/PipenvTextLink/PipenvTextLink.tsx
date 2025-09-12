import React from 'react'
import Link from '@links/Link/Link'

const PipenvTextLink: React.FC = () => {
  const url = "https://pipenv.pypa.io/en/latest/"
  const title = "Pipenv"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default PipenvTextLink

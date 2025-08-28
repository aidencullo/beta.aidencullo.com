import React from 'react'
import Link from './Link/Link'

const NamecheapTextLink: React.FC = () => {
  const url = "https://www.namecheap.com/"
  const title = "Namecheap"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      Namecheap
    </Link>
  )
}

export default NamecheapTextLink

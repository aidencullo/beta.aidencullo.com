import React from 'react'
import Link from './Link/Link'

const ViteTextLink: React.FC = () => {
  const url = "https://vitejs.dev/"
  const title = "Vite"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default ViteTextLink

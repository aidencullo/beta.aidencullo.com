import React from 'react'
import Link from '../Link/Link'

const BushwickAyudaMutuaTextLink: React.FC = () => {
  const url = "https://bushwickayudamutua.com/"
  const title = "Bushwick Ayuda Mutua"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default BushwickAyudaMutuaTextLink

import React from 'react'
import Link from '../Link/Link'

const SeatFinderTextLink: React.FC = () => {
  const url = "https://github.com/aidencullo/seatFinder"
  const title = "SeatFinder"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      {title}
    </Link>
  )
}

export default SeatFinderTextLink

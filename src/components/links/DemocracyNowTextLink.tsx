import React from 'react'
import Link from './Link'

const DemocracyNowTextLink: React.FC = () => {
  const url = "https://www.democracynow.org/2025/8/6/headlines/advocates_launch_protest_camp_outside_new_york_city_immigration_offices"
  const title = "Democracy Now!"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      Democracy Now!
    </Link>
  )
}

export default DemocracyNowTextLink

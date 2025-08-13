import React from 'react'
import Welcome from './Welcome'
import Links from './Links'

const Body: React.FC = () => {
  return (
    <main className="body">
      <Welcome />
      <Links />
    </main>
  )
}

export default Body

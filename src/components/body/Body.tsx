import React from 'react'
import Welcome from './Welcome'
import Bio from './Bio'
import './Body.css'

const Body: React.FC = () => {
  return (
    <main className="body">
      <Welcome />
      <Bio />
    </main>
  )
}

export default Body

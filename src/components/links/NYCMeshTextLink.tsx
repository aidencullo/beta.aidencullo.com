import React from 'react'
import Link from './Link'

const NYCMeshTextLink: React.FC = () => {
  const url = "https://www.nycmesh.net/"
  const title = "NYC Mesh"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      NYC Mesh
    </Link>
  )
}

export default NYCMeshTextLink

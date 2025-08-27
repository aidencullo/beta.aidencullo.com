import React from 'react'
import Link from './Link'

const StackOverflowTextLink: React.FC = () => {
  const url = "https://stackoverflow.com/users/1234567/aidencullo"
  const title = "Stack Overflow"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      Stack Overflow
    </Link>
  )
}

export default StackOverflowTextLink

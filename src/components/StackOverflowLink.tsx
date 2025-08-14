import React from 'react'
import { FaStackOverflow } from 'react-icons/fa'
import Link from './Link'

const StackOverflowLink: React.FC = () => {
  const url = "https://stackoverflow.com/users/6447634/aiden-cullo"
  const title = "Stack Overflow"
  
  return (
    <Link href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaStackOverflow /></span>
    </Link>
  )
}

export default StackOverflowLink

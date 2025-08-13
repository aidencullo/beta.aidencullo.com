import React from 'react'
import { FaStackOverflow } from 'react-icons/fa'
import BaseLink from './BaseLink'

const StackOverflowLink: React.FC = () => {
  const url = "https://stackoverflow.com/users/6447634/aiden-cullo"
  const title = "Stack Overflow"
  
  return (
    <BaseLink href={url} title={title} isExternal={true}>
      <span className="link-icon"><FaStackOverflow /></span>
    </BaseLink>
  )
}

export default StackOverflowLink

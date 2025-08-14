import React from 'react'
import { FaStackOverflow } from 'react-icons/fa'
import ExternalLink from './ExternalLink'

const StackOverflowLink: React.FC = () => {
  const url = "https://stackoverflow.com/users/6447634/aiden-cullo"
  const title = "Stack Overflow"
  
  return (
    <ExternalLink href={url} title={title}>
      <span className="link-icon"><FaStackOverflow /></span>
    </ExternalLink>
  )
}

export default StackOverflowLink

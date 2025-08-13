import React from 'react'
import { FaStackOverflow } from 'react-icons/fa'

const StackOverflowLink: React.FC = () => {
  const url = "https://stackoverflow.com/users/6447634/aiden-cullo"
  const title = "Stack Overflow"
  
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="link"
      title={title}
    >
      <span className="link-icon"><FaStackOverflow /></span>
    </a>
  )
}

export default StackOverflowLink

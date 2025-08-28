import React from 'react'
import { FaStackOverflow } from 'react-icons/fa'
import StackOverflowLink from './StackOverflowLink'

const StackOverflowIconLink: React.FC = () => {
  return (
    <StackOverflowLink>
      <span className="link-icon"><FaStackOverflow /></span>
    </StackOverflowLink>
  )
}

export default StackOverflowIconLink

import React from 'react'
import ExternalLink from './ExternalLink/ExternalLink'

interface StackOverflowLinkProps {
  children: React.ReactNode
  className?: string
}

const StackOverflowLink: React.FC<StackOverflowLinkProps> = ({ children, className }) => {
  const url = "https://stackoverflow.com/users/6447634/aiden-cullo"
  const title = "Stack Overflow"
  
  return (
    <ExternalLink href={url} title={title} className={className}>
      {children}
    </ExternalLink>
  )
}

export default StackOverflowLink

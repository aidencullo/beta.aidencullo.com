import React from 'react'
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import Link from './Link'

const Links: React.FC = () => {
  return (
    <div className="links-container">
      <Link 
        name="GitHub" 
        url="https://github.com/aidencullo" 
        isExternal={true}
        icon={<FaGithub />}
      />
      <Link 
        name="Stack Overflow" 
        url="https://stackoverflow.com/users/6447634/aiden-cullo" 
        isExternal={true}
        icon={<FaStackOverflow />}
      />
      <Link 
        name="LinkedIn" 
        url="https://www.linkedin.com/in/aidencullo" 
        isExternal={true}
        icon={<FaLinkedin />}
      />
      <Link 
        name="Email" 
        url="mailto:aidencullo@gmail.com" 
        isExternal={false}
        icon={<Mail />}
      />
    </div>
  )
}

export default Links

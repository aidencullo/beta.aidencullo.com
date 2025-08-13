import React from 'react'
import { 
  FaGithub, 
  FaTwitter, 
  FaLinkedin, 
  FaHeart, 
  FaStar,
  FaCode,
  FaRocket
} from 'react-icons/fa'
import { 
  Mail, 
  Phone, 
  Globe, 
  Download, 
  Settings,
  User,
  Search
} from 'lucide-react'
import { 
  BiHomeAlt, 
  BiUser, 
  BiCog, 
  BiHelpCircle 
} from 'react-icons/bi'

const IconShowcase: React.FC = () => {
  return (
    <div className="icon-showcase">
      <h3>Icon Libraries Available</h3>
      
      <div className="icon-section">
        <h4>React Icons - Font Awesome</h4>
        <div className="icon-grid">
          <div className="icon-item">
            <FaGithub size={24} />
            <span>FaGithub</span>
          </div>
          <div className="icon-item">
            <FaTwitter size={24} />
            <span>FaTwitter</span>
          </div>
          <div className="icon-item">
            <FaLinkedin size={24} />
            <span>FaLinkedin</span>
          </div>
          <div className="icon-item">
            <FaHeart size={24} />
            <span>FaHeart</span>
          </div>
          <div className="icon-item">
            <FaStar size={24} />
            <span>FaStar</span>
          </div>
          <div className="icon-item">
            <FaCode size={24} />
            <span>FaCode</span>
          </div>
          <div className="icon-item">
            <FaRocket size={24} />
            <span>FaRocket</span>
          </div>
        </div>
      </div>

      <div className="icon-section">
        <h4>Lucide React</h4>
        <div className="icon-grid">
          <div className="icon-item">
            <Mail size={24} />
            <span>Mail</span>
          </div>
          <div className="icon-item">
            <Phone size={24} />
            <span>Phone</span>
          </div>
          <div className="icon-item">
            <Globe size={24} />
            <span>Globe</span>
          </div>
          <div className="icon-item">
            <Download size={24} />
            <span>Download</span>
          </div>
          <div className="icon-item">
            <Settings size={24} />
            <span>Settings</span>
          </div>
          <div className="icon-item">
            <User size={24} />
            <span>User</span>
          </div>
          <div className="icon-item">
            <Search size={24} />
            <span>Search</span>
          </div>
        </div>
      </div>

      <div className="icon-section">
        <h4>React Icons - Boxicons</h4>
        <div className="icon-grid">
          <div className="icon-item">
            <BiHomeAlt size={24} />
            <span>BiHomeAlt</span>
          </div>
          <div className="icon-item">
            <BiUser size={24} />
            <span>BiUser</span>
          </div>
          <div className="icon-item">
            <BiCog size={24} />
            <span>BiCog</span>
          </div>
          <div className="icon-item">
            <BiHelpCircle size={24} />
            <span>BiHelpCircle</span>
          </div>
        </div>
      </div>

      <div className="icon-section">
        <h4>Usage Examples</h4>
        <div className="usage-examples">
          <div className="example">
            <h5>Basic Usage:</h5>
            <code>{`import { FaGithub } from 'react-icons/fa'
<FaGithub size={24} color="#333" />`}</code>
          </div>
          <div className="example">
            <h5>With Custom Styling:</h5>
            <code>{`<FaHeart 
  size={32} 
  color="#ff6b6b" 
  className="heart-icon" 
/>`}</code>
          </div>
          <div className="example">
            <h5>Lucide Icons:</h5>
            <code>{`import { Mail, Phone } from 'lucide-react'
<Mail size={20} strokeWidth={2} />
<Phone size={20} strokeWidth={2} />`}</code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconShowcase

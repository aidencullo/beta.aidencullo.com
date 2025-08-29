import React from 'react';
import EmailTextLink from '@links/social/email/EmailTextLink/EmailTextLink';
import LinkedInTextLink from '@links/social/linkedin/LinkedInTextLink/LinkedInTextLink';
import XTextLink from '@links/social/x/XTextLink/XTextLink';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <>
      <li>
        <EmailTextLink />
      </li>
      <li>
        <LinkedInTextLink />
      </li>
      <li>
        <XTextLink />
      </li>
    </>
  );
};

export default ContactSection;

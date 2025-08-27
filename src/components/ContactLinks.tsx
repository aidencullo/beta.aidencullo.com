import React from 'react';
import EmailTextLink from './links/EmailTextLink';
import LinkedInTextLink from './links/LinkedInTextLink';
import XTextLink from './links/XTextLink';

const ContactLinks: React.FC = () => {
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

export default ContactLinks;

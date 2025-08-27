import React from 'react';
import EmailTextLink from './EmailTextLink';
import LinkedInTextLink from './LinkedInTextLink';
import XTextLink from './XTextLink';

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

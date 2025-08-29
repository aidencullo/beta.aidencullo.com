import React from 'react';
import EmailTextLink from '../../../links/social/EmailTextLink';
import LinkedInTextLink from '../../../links/social/LinkedInTextLink';
import XTextLink from '../../../links/social/XTextLink';

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

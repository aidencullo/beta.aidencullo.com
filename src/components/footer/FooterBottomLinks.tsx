import React from 'react';
import GitHubTextLink from '../links/GitHubTextLink';
import StackOverflowTextLink from '../links/StackOverflowTextLink';
import LinkedInTextLink from '../links/LinkedInTextLink';
import EmailTextLink from '../links/EmailTextLink';
import ResumeTextLink from '../links/ResumeTextLink';

const FooterBottomLinks: React.FC = () => {
  return (
    <p>
      <GitHubTextLink />
      <StackOverflowTextLink />
      <LinkedInTextLink />
      <EmailTextLink />
      <ResumeTextLink />
    </p>
  );
};

export default FooterBottomLinks;

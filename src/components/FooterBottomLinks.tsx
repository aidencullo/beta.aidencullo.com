import React from 'react';
import GitHubTextLink from './GitHubTextLink';
import StackOverflowTextLink from './StackOverflowTextLink';
import LinkedInTextLink from './LinkedInTextLink';
import EmailTextLink from './EmailTextLink';
import ResumeTextLink from './ResumeTextLink';

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

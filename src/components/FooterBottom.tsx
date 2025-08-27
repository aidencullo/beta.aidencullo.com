import React from 'react';
import GitHubTextLink from './GitHubTextLink';
import StackOverflowTextLink from './StackOverflowTextLink';
import LinkedInTextLink from './LinkedInTextLink';
import EmailTextLink from './EmailTextLink';
import ResumeTextLink from './ResumeTextLink';
import Copyright from './Copyright';

const FooterBottom: React.FC = () => {
  return (
    <div className="footer-bottom">
      <p>
        <GitHubTextLink />
        {" "}&nbsp;{" "}
        <StackOverflowTextLink />
        {" "}&nbsp;{" "}
        <LinkedInTextLink />
        {" "}&nbsp;{" "}
        <EmailTextLink />
        {" "}&nbsp;{" "}
        <ResumeTextLink />
      </p>
      <Copyright />
    </div>
  );
};

export default FooterBottom;

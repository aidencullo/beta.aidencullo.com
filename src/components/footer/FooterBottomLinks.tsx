import React from 'react';
import GitHubTextLink from '../links/GitHubTextLink';
import StackOverflowTextLink from '../links/StackOverflowTextLink';
import LinkedInTextLink from '../links/LinkedInTextLink';
import EmailTextLink from '../links/EmailTextLink';
import ResumeTextLink from '../links/ResumeTextLink';
import FooterBottomLink from './FooterBottomLink';

const FooterBottomLinks: React.FC = () => {
  return (
    <p> 
      <FooterBottomLink>
        <GitHubTextLink />
      </FooterBottomLink>
      <FooterBottomLink>
        <StackOverflowTextLink />
      </FooterBottomLink>
      <FooterBottomLink>
        <LinkedInTextLink />
      </FooterBottomLink>
      <FooterBottomLink>
        <EmailTextLink />
      </FooterBottomLink>
      <FooterBottomLink>
        <ResumeTextLink />
      </FooterBottomLink>
    </p>
  );
};

export default FooterBottomLinks;

import React from 'react';
import GitHubTextLink from '@links/social/github/GitHubTextLink/GitHubTextLink';
import StackOverflowTextLink from '@links/social/stackoverflow/StackOverflowTextLink/StackOverflowTextLink';
import LinkedInTextLink from '@links/social/linkedin/LinkedInTextLink/LinkedInTextLink';
import EmailTextLink from '@links/social/email/EmailTextLink/EmailTextLink';
import ResumeTextLink from '@links/social/resume/ResumeTextLink/ResumeTextLink';
import FooterBottomLink from '../FooterBottomLink/FooterBottomLink';

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

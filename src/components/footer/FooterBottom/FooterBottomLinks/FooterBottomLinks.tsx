import React from 'react';
import GitHubTextLink from '../../../links/social/GitHubTextLink';
import StackOverflowTextLink from '../../../links/social/StackOverflowTextLink';
import LinkedInTextLink from '../../../links/social/LinkedInTextLink';
import EmailTextLink from '../../../links/social/EmailTextLink';
import ResumeTextLink from '../../../links/social/ResumeTextLink';
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

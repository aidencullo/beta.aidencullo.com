import React from 'react';
import GitHubTextLink from '@links/social/github/GitHubTextLink/GitHubTextLink';
import StackOverflowTextLink from '@links/social/stackoverflow/StackOverflowTextLink/StackOverflowTextLink';
import LinkedInTextLink from '@links/social/linkedin/LinkedInTextLink/LinkedInTextLink';
import EmailTextLink from '@links/social/email/EmailTextLink/EmailTextLink';
import ResumeTextLink from '@links/social/resume/ResumeTextLink/ResumeTextLink';
import BlogTextLink from '@links/social/blog/BlogTextLink/BlogTextLink';
import FooterBottomLink from '../FooterBottomLink/FooterBottomLink';

const FooterBottomLinks: React.FC = () => {
  const footerBottomLinks = [
    GitHubTextLink,
    StackOverflowTextLink,
    LinkedInTextLink,
    EmailTextLink,
    ResumeTextLink,
    BlogTextLink
  ];

  return (
    <>
    {footerBottomLinks.map((FooterBottomLinkComponent, index) => (
      <FooterBottomLink key={index}>  
        <FooterBottomLinkComponent />
      </FooterBottomLink>
    ))}
    </>
  );
};

export default FooterBottomLinks;

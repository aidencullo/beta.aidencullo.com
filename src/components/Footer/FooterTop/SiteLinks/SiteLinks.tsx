import React from 'react';
import GitHubPagesTextLink from '@links/social/githubpages/GitHubPagesTextLink/GitHubPagesTextLink';
import NamecheapTextLink from '@links/social/namecheap/NamecheapTextLink/NamecheapTextLink';
import ReactTextLink from '@links/social/react/ReactTextLink/ReactTextLink';
import ViteTextLink from '@links/social/vite/ViteTextLink/ViteTextLink';
import './SiteLinks.css';

const SiteLinks: React.FC = () => {
  const sites = [
    GitHubPagesTextLink,
    NamecheapTextLink,
    ReactTextLink,
    ViteTextLink
  ];

  return (
    <>
    {sites.map((SiteLinkComponent, index) => (
      <li key={index}>
        <SiteLinkComponent />
      </li>
    ))}
    </>
  );
};

export default SiteLinks;

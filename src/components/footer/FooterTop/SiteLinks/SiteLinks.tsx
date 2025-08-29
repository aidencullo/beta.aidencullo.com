import React from 'react';
import GitHubPagesTextLink from '@links/social/githubpages/GitHubPagesTextLink/GitHubPagesTextLink';
import NamecheapTextLink from '@links/social/namecheap/NamecheapTextLink/NamecheapTextLink';
import ReactTextLink from '@links/social/react/ReactTextLink/ReactTextLink';
import ViteTextLink from '@links/social/vite/ViteTextLink/ViteTextLink';

const SiteLinks: React.FC = () => {
  return (
    <>
      <li>
        <GitHubPagesTextLink />
      </li>
      <li>
        <NamecheapTextLink />
      </li>
      <li>
        <ReactTextLink />
      </li>
      <li>
        <ViteTextLink />
      </li>
    </>
  );
};

export default SiteLinks;

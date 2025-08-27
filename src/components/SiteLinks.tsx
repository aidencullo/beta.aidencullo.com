import React from 'react';
import GitHubPagesTextLink from './GitHubPagesTextLink';
import NamecheapTextLink from './NamecheapTextLink';
import ReactTextLink from './ReactTextLink';
import ViteTextLink from './ViteTextLink';

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

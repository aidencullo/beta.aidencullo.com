import React from 'react';
import GitHubPagesTextLink from '../links/GitHubPagesTextLink';
import NamecheapTextLink from '../links/NamecheapTextLink';
import ReactTextLink from '../links/ReactTextLink';
import ViteTextLink from '../links/ViteTextLink';

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

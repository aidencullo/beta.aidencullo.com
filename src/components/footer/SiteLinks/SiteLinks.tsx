import React from 'react';
import GitHubPagesTextLink from '../../links/social/GitHubPagesTextLink';
import NamecheapTextLink from '../../links/social/NamecheapTextLink';
import ReactTextLink from '../../links/social/ReactTextLink';
import ViteTextLink from '../../links/social/ViteTextLink';

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

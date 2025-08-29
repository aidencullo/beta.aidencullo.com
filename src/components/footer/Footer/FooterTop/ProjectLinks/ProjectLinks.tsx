import React from 'react';
import PipenvTextLink from '@links/social/pipenv/PipenvTextLink/PipenvTextLink';
import TrueorFalseTextLink from '@links/projects/TrueorFalseTextLink/TrueorFalseTextLink';
import NoMailTextLink from '@links/projects/NoMailTextLink/NoMailTextLink';
import SeatFinderTextLink from '@links/projects/SeatFinderTextLink/SeatFinderTextLink';

const ProjectLinks: React.FC = () => {
  return (
    <>
      <li>
        <PipenvTextLink />
      </li>
      <li>
        <TrueorFalseTextLink />
      </li>
      <li>
        <NoMailTextLink />
      </li>
      <li>
        <SeatFinderTextLink />
      </li>
    </>
  );
};

export default ProjectLinks;

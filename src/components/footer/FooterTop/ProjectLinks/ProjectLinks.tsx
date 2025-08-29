import React from 'react';
import PipenvTextLink from '../../../links/social/PipenvTextLink';
import TrueorFalseTextLink from '../../../links/projects/TrueorFalseTextLink';
import NoMailTextLink from '../../../links/projects/NoMailTextLink';
import SeatFinderTextLink from '../../../links/projects/SeatFinderTextLink';

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

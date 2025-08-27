import React from 'react';
import PipenvTextLink from './links/PipenvTextLink';
import TrueorFalseTextLink from './links/TrueorFalseTextLink';
import NoMailTextLink from './links/NoMailTextLink';
import SeatFinderTextLink from './links/SeatFinderTextLink';

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

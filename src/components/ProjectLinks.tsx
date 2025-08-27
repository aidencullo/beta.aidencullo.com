import React from 'react';
import PipenvTextLink from './PipenvTextLink';
import TrueorFalseTextLink from './TrueorFalseTextLink';
import NoMailTextLink from './NoMailTextLink';
import SeatFinderTextLink from './SeatFinderTextLink';

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

import React from 'react';
import NYCMeshTextLink from './NYCMeshTextLink';
import BushwickAyudaMutuaTextLink from './BushwickAyudaMutuaTextLink';
import NYCDSATextLink from './NYCDSATextLink';
import DemocracyNowTextLink from './DemocracyNowTextLink';

const VolunteerLinks: React.FC = () => {
  return (
    <>
      <li>
        <NYCMeshTextLink />
      </li>
      <li>
        <BushwickAyudaMutuaTextLink />
      </li>
      <li>
        <NYCDSATextLink />
      </li>
      <li>
        <DemocracyNowTextLink />
      </li>
    </>
  );
};

export default VolunteerLinks;

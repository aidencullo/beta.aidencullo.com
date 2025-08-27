import React from 'react';
import NYCMeshTextLink from './links/NYCMeshTextLink';
import BushwickAyudaMutuaTextLink from './links/BushwickAyudaMutuaTextLink';
import NYCDSATextLink from './links/NYCDSATextLink';
import DemocracyNowTextLink from './links/DemocracyNowTextLink';

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
